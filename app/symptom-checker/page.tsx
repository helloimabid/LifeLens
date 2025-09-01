"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, AlertTriangle, Stethoscope, MapPin, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SymptomChecker() {
  const [symptoms, setSymptoms] = useState("")
  const [analysis, setAnalysis] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const analyzeSymptoms = async () => {
    if (!symptoms.trim()) return

    setIsLoading(true)
    try {
      const response = await fetch("/api/analyze-symptoms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ symptoms }),
      })

      if (!response.ok) {
        throw new Error("Failed to analyze symptoms")
      }

      const data = await response.json()
      setAnalysis(data.analysis)
    } catch (error) {
      console.error("Error analyzing symptoms:", error)
      setAnalysis("Sorry, there was an error analyzing your symptoms. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const findNearbyProviders = () => {
    const encodedSymptoms = encodeURIComponent(symptoms.trim())
    router.push(`/nearby-clinics?symptoms=${encodedSymptoms}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Stethoscope className="h-12 w-12 text-green-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">AI Symptom Checker</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Describe your symptoms and get AI-powered health insights to help guide your next steps.
          </p>
        </div>

        <Alert className="mb-8 border-amber-200 bg-amber-50">
          <AlertTriangle className="h-4 w-4 text-amber-600" />
          <AlertDescription className="text-amber-800">
            <strong>Important:</strong> This is not a replacement for professional medical advice. Always consult with a
            healthcare provider for proper diagnosis and treatment.
          </AlertDescription>
        </Alert>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-green-700">Describe Your Symptoms</CardTitle>
              <CardDescription>Be as detailed as possible about what you're experiencing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Example: I've been experiencing a persistent headache for 2 days, along with mild nausea and sensitivity to light..."
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                className="min-h-[150px] resize-none"
              />
              <Button
                onClick={analyzeSymptoms}
                disabled={!symptoms.trim() || isLoading}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  "Analyze Symptoms"
                )}
              </Button>

              {symptoms.trim() && (
                <Button
                  onClick={findNearbyProviders}
                  variant="outline"
                  className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent"
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Find Nearby Healthcare Providers
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Output Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-700">AI Analysis & Suggestions</CardTitle>
              <CardDescription>AI-generated insights based on your symptoms</CardDescription>
            </CardHeader>
            <CardContent>
              {analysis ? (
                <div className="space-y-4">
                  <div className="prose prose-sm max-w-none">
                    <div className="whitespace-pre-wrap leading-relaxed text-green-600">{analysis}</div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Next Steps</h4>
                      <p className="text-sm text-blue-800 mb-3">
                        Based on your symptoms, consider finding appropriate healthcare providers in your area.
                      </p>
                      <Button onClick={findNearbyProviders} size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <MapPin className="mr-2 h-4 w-4" />
                        Find Matching Providers
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <Stethoscope className="h-16 w-16 mx-auto mb-4 opacity-30" />
                  <p>Enter your symptoms above and click "Analyze Symptoms" to get AI-powered insights.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-700 text-lg">When to Seek Immediate Care</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Severe chest pain or difficulty breathing</li>
                <li>• Signs of stroke (face drooping, arm weakness, speech difficulty)</li>
                <li>• Severe allergic reactions</li>
                <li>• High fever with severe symptoms</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-700 text-lg">How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• AI analyzes your symptom description</li>
                <li>• Provides possible conditions to consider</li>
                <li>• Suggests appropriate next steps</li>
                <li>• Recommends when to see a doctor</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-700 text-lg">Tips for Better Results</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Include symptom duration and severity</li>
                <li>• Mention any triggers or patterns</li>
                <li>• Note any medications you're taking</li>
                <li>• Describe how symptoms affect daily life</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
