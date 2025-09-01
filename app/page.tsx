import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Stethoscope, MapPin, AlertTriangle, Shield, Clock, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-lg px-8 bg-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Your AI-powered first step to <span className="text-green-500">better healthcare</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Get instant symptom analysis, find nearby clinics, and receive personalized health guidance powered by
                advanced AI technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-lg px-8">
                  <Link href="/symptom-checker">Check Symptoms Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  <Link href="/nearby-clinics">Find Clinics</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-white dark:bg-card rounded-full shadow-2xl flex items-center justify-center">
                  <Heart className="w-32 h-32 text-green-500 animate-heartbeat" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                  <Stethoscope className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Comprehensive Health Support</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Everything you need for better health decisions, all in one place
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Symptom Checker</h3>
                <p className="text-muted-foreground">
                  Get instant analysis of your symptoms with AI-powered recommendations
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Find Nearby Clinics</h3>
                <p className="text-muted-foreground">Locate the nearest healthcare facilities and pharmacies</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Emergency Support</h3>
                <p className="text-muted-foreground">
                  Quick access to emergency contacts and critical health information
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Health Tips</h3>
                <p className="text-muted-foreground">Daily wellness tips and health insights to keep you informed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-muted/50 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">Trusted Health Guidance</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
              <p className="text-muted-foreground">Your health data is protected with enterprise-grade security</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Available</h3>
              <p className="text-muted-foreground">Get health guidance whenever you need it, day or night</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Backed</h3>
              <p className="text-muted-foreground">AI recommendations based on medical expertise and research</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to take control of your health?</h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Start with our AI-powered symptom checker and get personalized health guidance in seconds.
          </p>
          <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-lg px-8">
            <Link href="/symptom-checker">Get Started Now</Link>
          </Button>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-muted/30 py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm text-muted-foreground">
            <strong>Medical Disclaimer:</strong> This platform is not a replacement for professional medical advice.
            Always consult with qualified healthcare providers for medical concerns and emergencies.
          </p>
        </div>
      </section>
    </div>
  )
}
