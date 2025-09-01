"use client"

import type React from "react"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  AlertTriangle,
  Heart,
  Shield,
  MapPin,
  Clock,
  Zap,
  Droplets,
  Activity,
  Globe,
  Loader2,
} from "lucide-react"

interface EmergencyContact {
  id: number
  name: string
  number: string
  description: string
  icon: React.ReactNode
  category: "immediate" | "urgent" | "support"
}

interface LocationData {
  country: string
  countryCode: string
  city: string
  region: string
}

interface CountryEmergencyData {
  country: string
  countryCode: string
  emergencyContacts: EmergencyContact[]
  emergencyScenarios: Array<{
    title: string
    icon: React.ReactNode
    symptoms: string[]
    action: string
    color: string
  }>
}

const emergencyDatabase: Record<string, CountryEmergencyData> = {
  US: {
    country: "United States",
    countryCode: "US",
    emergencyContacts: [
      {
        id: 1,
        name: "Emergency Services",
        number: "911",
        description: "Police, Fire, Medical Emergency",
        icon: <AlertTriangle className="h-6 w-6" />,
        category: "immediate",
      },
      {
        id: 2,
        name: "Poison Control",
        number: "1-800-222-1222",
        description: "24/7 Poison Emergency Hotline",
        icon: <Shield className="h-6 w-6" />,
        category: "immediate",
      },
      {
        id: 3,
        name: "Crisis Text Line",
        number: "741741",
        description: "Text HOME for mental health crisis support",
        icon: <Heart className="h-6 w-6" />,
        category: "urgent",
      },
      {
        id: 4,
        name: "National Suicide Prevention",
        number: "988",
        description: "24/7 Crisis Support Lifeline",
        icon: <Heart className="h-6 w-6" />,
        category: "urgent",
      },
      {
        id: 5,
        name: "Non-Emergency Medical",
        number: "811",
        description: "Health Information & Nurse Hotline",
        icon: <Activity className="h-6 w-6" />,
        category: "support",
      },
    ],
    emergencyScenarios: [
      {
        title: "Heart Attack",
        icon: <Heart className="h-5 w-5" />,
        symptoms: ["Chest pain", "Shortness of breath", "Nausea", "Cold sweats"],
        action: "Call 911 immediately",
        color: "border-red-500 bg-red-50",
      },
      {
        title: "Stroke",
        icon: <Zap className="h-5 w-5" />,
        symptoms: ["Face drooping", "Arm weakness", "Speech difficulty", "Time critical"],
        action: "Call 911 immediately",
        color: "border-red-500 bg-red-50",
      },
      {
        title: "Severe Bleeding",
        icon: <Droplets className="h-5 w-5" />,
        symptoms: ["Heavy bleeding", "Deep cuts", "Won't stop bleeding"],
        action: "Apply pressure, call 911",
        color: "border-orange-500 bg-orange-50",
      },
      {
        title: "Poisoning",
        icon: <Shield className="h-5 w-5" />,
        symptoms: ["Ingested toxins", "Chemical exposure", "Overdose"],
        action: "Call Poison Control: 1-800-222-1222",
        color: "border-purple-500 bg-purple-50",
      },
    ],
  },
  BD: {
    country: "Bangladesh",
    countryCode: "BD",
    emergencyContacts: [
      {
        id: 1,
        name: "Emergency Services",
        number: "999",
        description: "Police, Fire, Medical Emergency",
        icon: <AlertTriangle className="h-6 w-6" />,
        category: "immediate",
      },
      {
        id: 2,
        name: "National Emergency Service",
        number: "199",
        description: "National Emergency Helpline",
        icon: <AlertTriangle className="h-6 w-6" />,
        category: "immediate",
      },
      {
        id: 3,
        name: "Fire Service",
        number: "102",
        description: "Fire Service & Civil Defence",
        icon: <Shield className="h-6 w-6" />,
        category: "immediate",
      },
      {
        id: 4,
        name: "Police",
        number: "100",
        description: "Bangladesh Police Emergency",
        icon: <Shield className="h-6 w-6" />,
        category: "immediate",
      },
      {
        id: 5,
        name: "Ambulance Service",
        number: "10921",
        description: "Dhaka Medical College Ambulance",
        icon: <Activity className="h-6 w-6" />,
        category: "urgent",
      },
      {
        id: 6,
        name: "Mental Health Helpline",
        number: "09611677777",
        description: "Kaan Pete Roi Mental Health Support",
        icon: <Heart className="h-6 w-6" />,
        category: "support",
      },
    ],
    emergencyScenarios: [
      {
        title: "Heart Attack",
        icon: <Heart className="h-5 w-5" />,
        symptoms: ["Chest pain", "Shortness of breath", "Nausea", "Cold sweats"],
        action: "Call 999 immediately",
        color: "border-red-500 bg-red-50",
      },
      {
        title: "Stroke",
        icon: <Zap className="h-5 w-5" />,
        symptoms: ["Face drooping", "Arm weakness", "Speech difficulty", "Time critical"],
        action: "Call 999 immediately",
        color: "border-red-500 bg-red-50",
      },
      {
        title: "Severe Bleeding",
        icon: <Droplets className="h-5 w-5" />,
        symptoms: ["Heavy bleeding", "Deep cuts", "Won't stop bleeding"],
        action: "Apply pressure, call 999",
        color: "border-orange-500 bg-orange-50",
      },
      {
        title: "Fire Emergency",
        icon: <Shield className="h-5 w-5" />,
        symptoms: ["Fire outbreak", "Smoke inhalation", "Burns"],
        action: "Call Fire Service: 102",
        color: "border-purple-500 bg-purple-50",
      },
    ],
  },
  GB: {
    country: "United Kingdom",
    countryCode: "GB",
    emergencyContacts: [
      {
        id: 1,
        name: "Emergency Services",
        number: "999",
        description: "Police, Fire, Ambulance, Coastguard",
        icon: <AlertTriangle className="h-6 w-6" />,
        category: "immediate",
      },
      {
        id: 2,
        name: "EU Emergency Number",
        number: "112",
        description: "European Emergency Number",
        icon: <AlertTriangle className="h-6 w-6" />,
        category: "immediate",
      },
      {
        id: 3,
        name: "NHS 111",
        number: "111",
        description: "Non-emergency medical advice",
        icon: <Activity className="h-6 w-6" />,
        category: "support",
      },
      {
        id: 4,
        name: "Samaritans",
        number: "116123",
        description: "24/7 emotional support",
        icon: <Heart className="h-6 w-6" />,
        category: "urgent",
      },
    ],
    emergencyScenarios: [
      {
        title: "Heart Attack",
        icon: <Heart className="h-5 w-5" />,
        symptoms: ["Chest pain", "Shortness of breath", "Nausea", "Cold sweats"],
        action: "Call 999 immediately",
        color: "border-red-500 bg-red-50",
      },
      {
        title: "Stroke",
        icon: <Zap className="h-5 w-5" />,
        symptoms: ["Face drooping", "Arm weakness", "Speech difficulty", "Time critical"],
        action: "Call 999 immediately",
        color: "border-red-500 bg-red-50",
      },
    ],
  },
  IN: {
    country: "India",
    countryCode: "IN",
    emergencyContacts: [
      {
        id: 1,
        name: "Emergency Services",
        number: "112",
        description: "All Emergency Services",
        icon: <AlertTriangle className="h-6 w-6" />,
        category: "immediate",
      },
      {
        id: 2,
        name: "Police",
        number: "100",
        description: "Police Emergency",
        icon: <Shield className="h-6 w-6" />,
        category: "immediate",
      },
      {
        id: 3,
        name: "Fire Brigade",
        number: "101",
        description: "Fire Emergency",
        icon: <Shield className="h-6 w-6" />,
        category: "immediate",
      },
      {
        id: 4,
        name: "Ambulance",
        number: "108",
        description: "Medical Emergency",
        icon: <Activity className="h-6 w-6" />,
        category: "urgent",
      },
    ],
    emergencyScenarios: [
      {
        title: "Heart Attack",
        icon: <Heart className="h-5 w-5" />,
        symptoms: ["Chest pain", "Shortness of breath", "Nausea", "Cold sweats"],
        action: "Call 112 immediately",
        color: "border-red-500 bg-red-50",
      },
    ],
  },
}

export default function EmergencyPage() {
  const [userLocation, setUserLocation] = useState<LocationData | null>(null)
  const [isLoadingLocation, setIsLoadingLocation] = useState(false)
  const [locationError, setLocationError] = useState<string | null>(null)
  const [currentEmergencyData, setCurrentEmergencyData] = useState<CountryEmergencyData>(emergencyDatabase.US)

  const detectLocation = async () => {
    setIsLoadingLocation(true)
    setLocationError(null)

    try {
      if (!navigator.geolocation) {
        throw new Error("Geolocation is not supported by this browser")
      }

      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000,
        })
      })

      const { latitude, longitude } = position.coords
      console.log("[v0] User coordinates:", latitude, longitude)

      // Use reverse geocoding to get country information
      const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`,
      )

      if (!response.ok) {
        throw new Error("Failed to get location information")
      }

      const locationData = await response.json()
      console.log("[v0] Location data:", locationData)

      const detectedLocation: LocationData = {
        country: locationData.countryName || "Unknown",
        countryCode: locationData.countryCode || "US",
        city: locationData.city || locationData.locality || "Unknown",
        region: locationData.principalSubdivision || "Unknown",
      }

      setUserLocation(detectedLocation)

      // Set emergency data based on detected country
      const emergencyData = emergencyDatabase[detectedLocation.countryCode] || emergencyDatabase.US
      setCurrentEmergencyData(emergencyData)
      console.log("[v0] Emergency data set for:", detectedLocation.countryCode)
    } catch (error) {
      console.error("[v0] Location detection error:", error)
      setLocationError(error instanceof Error ? error.message : "Failed to detect location")
      // Default to US emergency data on error
      setCurrentEmergencyData(emergencyDatabase.US)
    } finally {
      setIsLoadingLocation(false)
    }
  }

  useEffect(() => {
    detectLocation()
  }, [])

  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "immediate":
        return "bg-red-600 hover:bg-red-700"
      case "urgent":
        return "bg-orange-600 hover:bg-orange-700"
      case "support":
        return "bg-blue-600 hover:bg-blue-700"
      default:
        return "bg-gray-600 hover:bg-gray-700"
    }
  }

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "immediate":
        return "bg-red-100 text-red-800"
      case "urgent":
        return "bg-orange-100 text-orange-800"
      case "support":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="h-12 w-12 text-red-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Emergency Contacts</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quick access to emergency services and critical health information when you need it most.
          </p>
        </div>

        <div className="mb-6">
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-blue-600" />
                  <div>
                    {isLoadingLocation ? (
                      <div className="flex items-center space-x-2">
                        <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
                        <span className="text-blue-800">Detecting your location...</span>
                      </div>
                    ) : userLocation ? (
                      <div>
                        <span className="text-blue-800 font-medium">
                          Emergency info for: {userLocation.city}, {currentEmergencyData.country}
                        </span>
                        <p className="text-sm text-blue-600">Showing emergency numbers specific to your location</p>
                      </div>
                    ) : (
                      <div>
                        <span className="text-blue-800 font-medium">Using default emergency info</span>
                        <p className="text-sm text-blue-600">{locationError || "Unable to detect location"}</p>
                      </div>
                    )}
                  </div>
                </div>
                <Button
                  onClick={detectLocation}
                  disabled={isLoadingLocation}
                  variant="outline"
                  size="sm"
                  className="border-blue-300 text-blue-700 hover:bg-blue-100 bg-transparent"
                >
                  {isLoadingLocation ? (
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  ) : (
                    <MapPin className="h-4 w-4 mr-2" />
                  )}
                  Detect Location
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Alert className="mb-8 border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <strong>Life-threatening emergency?</strong> Call{" "}
            {currentEmergencyData.emergencyContacts[0]?.number || "emergency services"} immediately. Do not delay
            seeking professional medical help.
          </AlertDescription>
        </Alert>

        {/* Emergency Contacts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentEmergencyData.emergencyContacts.map((contact) => (
            <Card key={contact.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-red-600">{contact.icon}</div>
                    <div>
                      <CardTitle className="text-lg">{contact.name}</CardTitle>
                      <Badge className={getCategoryBadge(contact.category)}>
                        {contact.category.charAt(0).toUpperCase() + contact.category.slice(1)}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-400">{contact.description}</p>

                <div className="text-center">
                  <div className="text-2xl font-bold mb-2 text-white">{contact.number}</div>
                  <Button
                    onClick={() => handleCall(contact.number)}
                    className={`w-full ${getCategoryColor(contact.category)} text-white`}
                    size="lg"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Scenarios */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Common Emergency Scenarios</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentEmergencyData.emergencyScenarios.map((scenario, index) => (
              <Card key={index} className={`${scenario.color} border-2`}>
                <CardHeader className="text-sm text-slate-400">
                  <CardTitle className="text-lg flex items-center text-black">
                    {scenario.icon}
                    <span className="ml-2">{scenario.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Symptoms:</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {scenario.symptoms.map((symptom, idx) => (
                        <li key={idx}>• {symptom}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2">
                    <p className="text-sm font-bold text-gray-800">{scenario.action}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          

          
        </div>

        {/* Important Information */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-yellow-200">
            <CardHeader>
              <CardTitle className="text-yellow-700 text-lg">
                When to Call {currentEmergencyData.emergencyContacts[0]?.number}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Life-threatening injuries</li>
                <li>• Severe chest pain</li>
                <li>• Difficulty breathing</li>
                <li>• Unconsciousness</li>
                <li>• Severe allergic reactions</li>
                <li>• Signs of stroke</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-700 text-lg">Before Emergency Arrives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Stay calm and follow dispatcher instructions</li>
                <li>• Provide clear location information</li>
                <li>• Keep airways clear</li>
                <li>• Apply pressure to bleeding wounds</li>
                <li>• Don't move injured person unless necessary</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-700 text-lg">Emergency Preparedness</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Keep emergency contacts updated</li>
                <li>• Know your medical conditions</li>
                <li>• Have first aid kit accessible</li>
                <li>• Learn basic CPR</li>
                <li>• Keep medications list current</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
