import { generateText } from "ai"
import { groq } from "@ai-sdk/groq"

export async function POST(request: Request) {
  try {
    const { symptoms } = await request.json()

    if (!symptoms || typeof symptoms !== "string") {
      return Response.json({ error: "Symptoms description is required" }, { status: 400 })
    }

    const { text } = await generateText({
      model: groq("llama-3.3-70b-versatile"),
      prompt: `You are a medical AI assistant helping users understand their symptoms. Analyze the following symptoms and provide helpful, educational information.

IMPORTANT GUIDELINES:
- Always emphasize that this is not a medical diagnosis
- Recommend consulting healthcare professionals for proper evaluation
- Provide general educational information about possible conditions
- Suggest appropriate urgency level for seeking medical care
- Be empathetic and supportive
- Do not provide specific medical advice or treatment recommendations

User's symptoms: "${symptoms}"

Please provide:
1. A brief analysis of the symptoms described
2. Possible conditions that might be associated with these symptoms (educational purposes only)
3. Recommended urgency for seeking medical care (routine, urgent, or emergency)
4. General self-care suggestions if appropriate
5. When to seek immediate medical attention

Format your response in a clear, easy-to-read manner.`,
    })

    return Response.json({ analysis: text })
  } catch (error) {
    console.error("Error in symptom analysis:", error)
    return Response.json({ error: "Failed to analyze symptoms. Please try again." }, { status: 500 })
  }
}
