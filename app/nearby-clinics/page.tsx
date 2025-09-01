"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Clock, Star, Navigation, Filter, Stethoscope, Locate } from "lucide-react"
import { useSearchParams } from "next/navigation"

interface MapInstance {
  setView: (coords: [number, number], zoom: number) => void
  remove: () => void
}

interface Clinic {
  id: number
  name: string
  type: "hospital" | "clinic" | "pharmacy" | "specialist"
  address: string
  phone: string
  hours: string
  rating: number
  distance: string
  specialties?: string[]
  emergency?: boolean
  treatmentAreas?: string[]
  coordinates?: [number, number]
}

const mockClinics: Clinic[] = [
  {
    id: 1,
    name: "Dhaka Medical College Hospital",
    type: "hospital",
    address: "Bakshibazar, Dhaka 1000, Bangladesh",
    phone: "+880-2-8626812",
    hours: "24/7",
    rating: 4.3,
    distance: "1.2 km",
    specialties: ["Emergency", "Cardiology", "Internal Medicine", "Surgery"],
    treatmentAreas: ["chest pain", "heart problems", "breathing issues", "severe pain", "emergency", "cardiac arrest"],
    emergency: true,
    coordinates: [23.7275, 90.3854],
  },
  {
    id: 2,
    name: "Square Hospital Ltd",
    type: "hospital",
    address: "18/F, Bir Uttam Qazi Nuruzzaman Sarak, Dhaka 1205, Bangladesh",
    phone: "+880-2-8159457",
    hours: "24/7",
    rating: 4.7,
    distance: "2.1 km",
    specialties: ["Cardiology", "Neurology", "Oncology", "Emergency"],
    treatmentAreas: ["chest pain", "heart disease", "stroke", "cancer treatment", "emergency care"],
    emergency: true,
    coordinates: [23.7516, 90.3876],
  },
  {
    id: 3,
    name: "United Hospital Limited",
    type: "hospital",
    address: "Plot 15, Road 71, Gulshan 2, Dhaka 1212, Bangladesh",
    phone: "+880-2-8836000",
    hours: "24/7",
    rating: 4.8,
    distance: "3.5 km",
    specialties: ["Cardiology", "Orthopedics", "Gastroenterology", "Emergency"],
    treatmentAreas: ["chest pain", "heart problems", "joint pain", "stomach issues", "emergency"],
    emergency: true,
    coordinates: [23.7925, 90.4078],
  },
  {
    id: 4,
    name: "Apollo Hospitals Dhaka",
    type: "hospital",
    address: "Plot 81, Block E, Bashundhara R/A, Dhaka 1229, Bangladesh",
    phone: "+880-2-8401661",
    hours: "24/7",
    rating: 4.6,
    distance: "4.2 km",
    specialties: ["Cardiology", "Neurosurgery", "Oncology", "Emergency"],
    treatmentAreas: ["chest pain", "heart surgery", "brain surgery", "cancer", "emergency care"],
    emergency: true,
    coordinates: [23.8223, 90.4251],
  },
  {
    id: 5,
    name: "Popular Diagnostic Centre",
    type: "clinic",
    address: "House 16, Road 2, Dhanmondi R/A, Dhaka 1205, Bangladesh",
    phone: "+880-2-8616074",
    hours: "8:00 AM - 10:00 PM",
    rating: 4.4,
    distance: "1.8 km",
    specialties: ["Diagnostics", "Pathology", "Radiology"],
    treatmentAreas: ["chest x-ray", "blood tests", "diagnostic imaging", "health checkup"],
    coordinates: [23.7461, 90.3742],
  },
  {
    id: 6,
    name: "Ibn Sina Medical College Hospital",
    type: "hospital",
    address: "1 Kalyanpur Main Road, Mirpur, Dhaka 1216, Bangladesh",
    phone: "+880-2-8050802",
    hours: "24/7",
    rating: 4.2,
    distance: "5.1 km",
    specialties: ["Emergency", "General Medicine", "Surgery"],
    treatmentAreas: ["chest pain", "general illness", "surgery", "emergency care"],
    emergency: true,
    coordinates: [23.7956, 90.3537],
  },
  {
    id: 7,
    name: "Labaid Specialized Hospital",
    type: "hospital",
    address: "House 1, Road 4, Dhanmondi R/A, Dhaka 1205, Bangladesh",
    phone: "+880-2-8610793",
    hours: "24/7",
    rating: 4.5,
    distance: "2.3 km",
    specialties: ["Cardiology", "Nephrology", "Gastroenterology"],
    treatmentAreas: ["chest pain", "heart problems", "kidney issues", "stomach problems"],
    emergency: true,
    coordinates: [23.7465, 90.3751],
  },
  {
    id: 8,
    name: "Green Life Medical College Hospital",
    type: "hospital",
    address: "32, Bir Uttam Shafiullah Sarak, Dhaka 1212, Bangladesh",
    phone: "+880-2-8836444",
    hours: "24/7",
    rating: 4.3,
    distance: "3.8 km",
    specialties: ["Emergency", "Cardiology", "Orthopedics"],
    treatmentAreas: ["chest pain", "heart disease", "bone fractures", "emergency"],
    emergency: true,
    coordinates: [23.7889, 90.4167],
  },
  {
    id: 9,
    name: "Evercare Hospital Dhaka",
    type: "hospital",
    address: "Plot 81, Block E, Bashundhara R/A, Dhaka 1229, Bangladesh",
    phone: "+880-2-55028888",
    hours: "24/7",
    rating: 4.7,
    distance: "4.5 km",
    specialties: ["Cardiology", "Oncology", "Neurology", "Emergency"],
    treatmentAreas: ["chest pain", "heart surgery", "cancer treatment", "neurological issues"],
    emergency: true,
    coordinates: [23.8234, 90.4289],
  },
  {
    id: 10,
    name: "Comfort Nursing Home",
    type: "clinic",
    address: "165/2/A Green Road, Dhaka 1205, Bangladesh",
    phone: "+880-2-8624080",
    hours: "8:00 AM - 8:00 PM",
    rating: 4.1,
    distance: "1.5 km",
    specialties: ["General Medicine", "Pediatrics"],
    treatmentAreas: ["fever", "cold", "flu", "chest pain", "general checkup", "child care"],
    coordinates: [23.7334, 90.3654],
  },
  {
    id: 11,
    name: "City General Hospital",
    type: "hospital",
    address: "123 Main St, Downtown, NY 10001, USA",
    phone: "(555) 123-4567",
    hours: "24/7",
    rating: 4.5,
    distance: "0.8 miles",
    specialties: ["Emergency", "Cardiology", "Orthopedics", "Internal Medicine"],
    treatmentAreas: ["chest pain", "heart problems", "breathing issues", "severe pain", "emergency"],
    emergency: true,
    coordinates: [40.7128, -74.006],
  },
  {
    id: 12,
    name: "Wellness Family Clinic",
    type: "clinic",
    address: "456 Oak Ave, Midtown, NY 10018, USA",
    phone: "(555) 234-5678",
    hours: "8:00 AM - 6:00 PM",
    rating: 4.8,
    distance: "1.2 miles",
    specialties: ["Family Medicine", "Pediatrics"],
    treatmentAreas: ["fever", "cold", "flu", "general checkup", "vaccination", "minor injuries", "chest pain"],
    coordinates: [40.7589, -73.9851],
  },
  {
    id: 13,
    name: "Heart & Chest Specialist Center",
    type: "specialist",
    address: "789 Cardiac Ave, Medical District, NY 10016, USA",
    phone: "(555) 345-6789",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.9,
    distance: "2.1 miles",
    specialties: ["Cardiology", "Pulmonology", "Thoracic Surgery"],
    treatmentAreas: ["chest pain", "heart disease", "breathing problems", "lung issues", "cardiac surgery"],
    emergency: true,
    coordinates: [40.7505, -73.9934],
  },
]

export default function ClinicsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("distance")
  const [symptomFilter, setSymptomFilter] = useState("")
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null)
  const [locationLoading, setLocationLoading] = useState(false)
  const [locationError, setLocationError] = useState<string | null>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<MapInstance | null>(null)
  const searchParams = useSearchParams()

  useEffect(() => {
    const loadLeaflet = async () => {
      // Load Leaflet CSS
      if (!document.querySelector('link[href*="leaflet"]')) {
        const link = document.createElement("link")
        link.rel = "stylesheet"
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        link.crossOrigin = ""
        document.head.appendChild(link)
      }

      // Load Leaflet JS
      if (!window.L) {
        const script = document.createElement("script")
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        script.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
        script.crossOrigin = ""
        script.onload = () => setMapLoaded(true)
        document.head.appendChild(script)
      } else {
        setMapLoaded(true)
      }
    }

    loadLeaflet()
  }, [])

  useEffect(() => {
    if (mapLoaded && mapRef.current && !mapInstanceRef.current) {
      const L = (window as any).L

      // Initialize map
      const map = L.map(mapRef.current).setView([23.7985614, 90.366018], 12)

      // Add OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map)

      mapInstanceRef.current = map

      // Add markers for filtered clinics
      const filteredClinics = mockClinics
        .map((clinic) => {
          if (userLocation && clinic.coordinates) {
            const realDistance = calculateDistance(
              userLocation.lat,
              userLocation.lng,
              clinic.coordinates[0],
              clinic.coordinates[1],
            )
            return {
              ...clinic,
              distance: `${realDistance.toFixed(1)} km`,
              realDistanceValue: realDistance,
            }
          }
          return clinic
        })
        .filter((clinic) => {
          const matchesSearch =
            clinic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            clinic.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
            clinic.specialties?.some((specialty) => specialty.toLowerCase().includes(searchTerm.toLowerCase()))

          const matchesType = filterType === "all" || clinic.type === filterType

          const matchesSymptom =
            !symptomFilter ||
            clinic.treatmentAreas?.some(
              (area) =>
                symptomFilter.toLowerCase().includes(area.toLowerCase()) ||
                area.toLowerCase().includes(symptomFilter.toLowerCase()),
            ) ||
            clinic.specialties?.some(
              (specialty) =>
                symptomFilter.toLowerCase().includes(specialty.toLowerCase()) ||
                specialty.toLowerCase().includes(symptomFilter.toLowerCase()),
            )

          return matchesSearch && matchesType && matchesSymptom
        })
        .sort((a, b) => {
          if (sortBy === "distance") {
            if (userLocation && "realDistanceValue" in a && "realDistanceValue" in b) {
              return (a as any).realDistanceValue - (b as any).realDistanceValue
            }
            return Number.parseFloat(a.distance) - Number.parseFloat(b.distance)
          } else if (sortBy === "rating") {
            return b.rating - a.rating
          } else if (sortBy === "relevance" && symptomFilter) {
            const aRelevance =
              (a.treatmentAreas?.filter((area) => symptomFilter.toLowerCase().includes(area.toLowerCase()))?.length ||
                0) +
              (a.specialties?.filter((specialty) => symptomFilter.toLowerCase().includes(specialty.toLowerCase()))
                ?.length || 0)

            const bRelevance =
              (b.treatmentAreas?.filter((area) => symptomFilter.toLowerCase().includes(area.toLowerCase()))?.length ||
                0) +
              (b.specialties?.filter((specialty) => symptomFilter.toLowerCase().includes(specialty.toLowerCase()))
                ?.length || 0)

            return bRelevance - aRelevance
          }
          return 0
        })

      filteredClinics.forEach((clinic) => {
        if (clinic.coordinates) {
          const [lat, lng] = clinic.coordinates

          // Create custom icon based on type
          const iconColor =
            clinic.type === "hospital"
              ? "red"
              : clinic.type === "clinic"
                ? "green"
                : clinic.type === "specialist"
                  ? "purple"
                  : "blue"

          const customIcon = L.divIcon({
            html: `<div style="background-color: ${iconColor}; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 10px;">${clinic.type.charAt(0).toUpperCase()}</div>`,
            className: "custom-marker",
            iconSize: [20, 20],
            iconAnchor: [10, 10],
          })

          const marker = L.marker([lat, lng], { icon: customIcon }).addTo(map)

          // Add popup with clinic info
          marker.bindPopup(`
            <div style="min-width: 200px;">
              <h3 style="margin: 0 0 8px 0; font-size: 14px; font-weight: bold;">${clinic.name}</h3>
              <p style="margin: 0 0 4px 0; font-size: 12px; color: #666;">${clinic.address}</p>
              <p style="margin: 0 0 4px 0; font-size: 12px;"><strong>Phone:</strong> ${clinic.phone}</p>
              <p style="margin: 0 0 4px 0; font-size: 12px;"><strong>Hours:</strong> ${clinic.hours}</p>
              <p style="margin: 0 0 8px 0; font-size: 12px;"><strong>Rating:</strong> ⭐ ${clinic.rating}</p>
              <button onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}', '_blank')" 
                      style="background: #22c55e; color: white; border: none; padding: 4px 8px; border-radius: 4px; font-size: 11px; cursor: pointer;">
                Get Directions
              </button>
            </div>
          `)
        }
      })

      // Add user location marker if available
      if (userLocation) {
        const userIcon = L.divIcon({
          html: '<div style="background-color: #8b5cf6; width: 16px; height: 16px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);"></div>',
          className: "user-location-marker",
          iconSize: [16, 16],
          iconAnchor: [8, 8],
        })

        L.marker([userLocation.lat, userLocation.lng], { icon: userIcon })
          .addTo(map)
          .bindPopup('<div style="text-align: center;"><strong>Your Location</strong></div>')

        // Center map on user location
        map.setView([userLocation.lat, userLocation.lng], 13)
      }
    }

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [mapLoaded, mockClinics, userLocation])

  useEffect(() => {
    const symptoms = searchParams.get("symptoms")
    if (symptoms) {
      setSymptomFilter(symptoms)
    }
  }, [searchParams])

  const getUserLocation = () => {
    setLocationLoading(true)
    setLocationError(null)

    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by this browser")
      setLocationLoading(false)
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
        setLocationLoading(false)
        console.log("[v0] User location obtained:", position.coords.latitude, position.coords.longitude)
      },
      (error) => {
        setLocationError("Unable to retrieve your location")
        setLocationLoading(false)
        console.log("[v0] Geolocation error:", error.message)
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000, // 5 minutes
      },
    )
  }

  const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number) => {
    const R = 6371 // Earth's radius in kilometers
    const dLat = ((lat2 - lat1) * Math.PI) / 180
    const dLng = ((lng2 - lng1) * Math.PI) / 180
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) * Math.sin(dLng / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c
  }

  const filteredClinics = mockClinics
    .map((clinic) => {
      if (userLocation && clinic.coordinates) {
        const realDistance = calculateDistance(
          userLocation.lat,
          userLocation.lng,
          clinic.coordinates[0],
          clinic.coordinates[1],
        )
        return {
          ...clinic,
          distance: `${realDistance.toFixed(1)} km`,
          realDistanceValue: realDistance,
        }
      }
      return clinic
    })
    .filter((clinic) => {
      const matchesSearch =
        clinic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        clinic.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        clinic.specialties?.some((specialty) => specialty.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesType = filterType === "all" || clinic.type === filterType

      const matchesSymptom =
        !symptomFilter ||
        clinic.treatmentAreas?.some(
          (area) =>
            symptomFilter.toLowerCase().includes(area.toLowerCase()) ||
            area.toLowerCase().includes(symptomFilter.toLowerCase()),
        ) ||
        clinic.specialties?.some(
          (specialty) =>
            symptomFilter.toLowerCase().includes(specialty.toLowerCase()) ||
            specialty.toLowerCase().includes(symptomFilter.toLowerCase()),
        )

      return matchesSearch && matchesType && matchesSymptom
    })
    .sort((a, b) => {
      if (sortBy === "distance") {
        if (userLocation && "realDistanceValue" in a && "realDistanceValue" in b) {
          return (a as any).realDistanceValue - (b as any).realDistanceValue
        }
        return Number.parseFloat(a.distance) - Number.parseFloat(b.distance)
      } else if (sortBy === "rating") {
        return b.rating - a.rating
      } else if (sortBy === "relevance" && symptomFilter) {
        const aRelevance =
          (a.treatmentAreas?.filter((area) => symptomFilter.toLowerCase().includes(area.toLowerCase()))?.length || 0) +
          (a.specialties?.filter((specialty) => symptomFilter.toLowerCase().includes(specialty.toLowerCase()))
            ?.length || 0)

        const bRelevance =
          (b.treatmentAreas?.filter((area) => symptomFilter.toLowerCase().includes(area.toLowerCase()))?.length || 0) +
          (b.specialties?.filter((specialty) => symptomFilter.toLowerCase().includes(specialty.toLowerCase()))
            ?.length || 0)

        return bRelevance - aRelevance
      }
      return 0
    })

  const getTypeColor = (type: string) => {
    switch (type) {
      case "hospital":
        return "bg-red-100 text-red-800"
      case "clinic":
        return "bg-green-100 text-green-800"
      case "pharmacy":
        return "bg-blue-100 text-blue-800"
      case "specialist":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "hospital":
        return "🏥"
      case "clinic":
        return "🏥"
      case "pharmacy":
        return "💊"
      case "specialist":
        return "👨‍⚕️"
      default:
        return "📍"
    }
  }

  const handleGetDirections = (clinic: Clinic) => {
    if (clinic.coordinates) {
      const [lat, lng] = clinic.coordinates
      const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&destination_place_id=${encodeURIComponent(clinic.name)}`
      window.open(url, "_blank")
    } else {
      const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.address)}`
      window.open(url, "_blank")
    }
  }

  const handleCallNow = (phone: string) => {
    const cleanPhone = phone.replace(/[^\d+]/g, "")
    window.location.href = `tel:${cleanPhone}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="h-12 w-12 text-green-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Nearby Healthcare</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find hospitals, clinics, and specialists near you based on your symptoms and health needs.
          </p>
          {symptomFilter && (
            <div className="mt-4 p-3 bg-blue-100 rounded-lg max-w-md mx-auto">
              <p className="text-sm text-blue-800">
                <Stethoscope className="h-4 w-4 inline mr-1" />
                Showing results for: <strong>{symptomFilter}</strong>
              </p>
            </div>
          )}

          <div className="mt-6 flex justify-center">
            <Button
              onClick={getUserLocation}
              disabled={locationLoading}
              variant="outline"
              className="flex items-center space-x-2 bg-transparent text-black"
            >
              <Locate className={`h-4 w-4 ${locationLoading ? "animate-spin" : ""}`} />
              <span>
                {locationLoading ? "Getting Location..." : userLocation ? "Location Detected" : "Use My Location"}
              </span>
            </Button>
          </div>

          {locationError && <p className="text-red-600 text-sm mt-2">{locationError}</p>}

          {userLocation && (
            <p className="text-green-600 text-sm mt-2">📍 Showing distances from your current location</p>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="h-[500px]">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Navigation className="h-5 w-5 mr-2 text-green-600" />
                  Interactive Map - OpenStreetMap
                </CardTitle>
              </CardHeader>
              <CardContent className="h-full p-0">
                <div ref={mapRef} className="w-full h-full rounded-lg" style={{ minHeight: "400px" }}>
                  {!mapLoaded && (
                    <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-2"></div>
                        <p className="text-gray-700 font-medium">Loading Interactive Map...</p>
                        <p className="text-xs text-gray-500 mt-1">Powered by OpenStreetMap</p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="h-5 w-5 mr-2 text-blue-600" />
                  Search & Filter
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Search by name, address, or specialty..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                <Input
                  placeholder="Filter by symptoms (e.g., chest pain, rash)..."
                  value={symptomFilter}
                  onChange={(e) => setSymptomFilter(e.target.value)}
                  className="border-green-200 focus:border-green-400"
                />

                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="hospital">Hospitals</SelectItem>
                    <SelectItem value="clinic">Clinics</SelectItem>
                    <SelectItem value="specialist">Specialists</SelectItem>
                    <SelectItem value="pharmacy">Pharmacies</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="distance">Distance</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                    {symptomFilter && <SelectItem value="relevance">Symptom Relevance</SelectItem>}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Map Legend</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Hospitals (H)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Clinics (C)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">Specialists (S)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Pharmacies (P)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                  <span className="text-sm">Your Location</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Healthcare Facilities ({mockClinics.length})
              {symptomFilter && <span className="text-green-600 text-lg ml-2">matching your symptoms</span>}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockClinics.map((clinic) => (
              <Card key={clinic.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg flex items-center">
                        <span className="mr-2">{getTypeIcon(clinic.type)}</span>
                        {clinic.name}
                      </CardTitle>
                      <div className="flex items-center space-x-2 mt-2">
                        <Badge className={getTypeColor(clinic.type)}>
                          {clinic.type.charAt(0).toUpperCase() + clinic.type.slice(1)}
                        </Badge>
                        {clinic.emergency && <Badge className="bg-red-100 text-red-800">Emergency</Badge>}
                        {symptomFilter &&
                          clinic.treatmentAreas?.some(
                            (area) =>
                              symptomFilter.toLowerCase().includes(area.toLowerCase()) ||
                              area.toLowerCase().includes(symptomFilter.toLowerCase()),
                          ) && (
                            <Badge className="bg-green-100 text-green-800">
                              <Stethoscope className="h-3 w-3 mr-1" />
                              Symptom Match
                            </Badge>
                          )}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium">{clinic.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">{clinic.address}</p>
                      <p className="text-sm font-medium text-green-600">{clinic.distance}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <p className="text-sm text-gray-600">{clinic.phone}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <p className="text-sm text-gray-600">{clinic.hours}</p>
                  </div>

                  {clinic.specialties && (
                    <div className="pt-2">
                      <p className="text-xs text-gray-500 mb-1">Specialties:</p>
                      <div className="flex flex-wrap gap-1">
                        {clinic.specialties.map((specialty, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {clinic.treatmentAreas && (
                    <div className="pt-2">
                      <p className="text-xs text-gray-500 mb-1">Treats:</p>
                      <div className="flex flex-wrap gap-1">
                        {clinic.treatmentAreas.slice(0, 4).map((area, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className={`text-xs ${
                              symptomFilter &&
                              (
                                symptomFilter.toLowerCase().includes(area.toLowerCase()) ||
                                  area.toLowerCase().includes(symptomFilter.toLowerCase())
                              )
                                ? "bg-green-100 text-green-800"
                                : ""
                            }`}
                          >
                            {area}
                          </Badge>
                        ))}
                        {clinic.treatmentAreas.length > 4 && (
                          <Badge variant="secondary" className="text-xs">
                            +{clinic.treatmentAreas.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="pt-2 space-y-2">
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700"
                      size="sm"
                      onClick={() => handleGetDirections(clinic)}
                    >
                      <Navigation className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent"
                      size="sm"
                      onClick={() => handleCallNow(clinic.phone)}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
