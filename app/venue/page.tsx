import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Calendar,
  Clock,
  Car,
  Train,
  Bus,
  Wifi,
  Coffee,
  Utensils,
  Accessibility,
  Phone,
  Mail,
  ExternalLink,
  MapPin,
} from "lucide-react"
import Link from "next/link"
import ScrollToTopButton from "@/components/layout/ScrollToTopButton"

// Import data
import venueData from "@/data/venue.json"

export default function VenuePage() {
  const getTransportIcon = (type: string) => {
    switch (type) {
      case "car":
        return <Car className="w-8 h-8 text-blue-600" />
      case "train":
        return <Train className="w-8 h-8 text-green-600" />
      case "bus":
        return <Bus className="w-8 h-8 text-purple-600" />
      default:
        return <Car className="w-8 h-8 text-blue-600" />
    }
  }

  const getFeatureIcon = (icon: string) => {
    switch (icon) {
      case "wifi":
        return <Wifi className="w-6 h-6 text-blue-600" />
      case "coffee":
        return <Coffee className="w-6 h-6 text-green-600" />
      case "utensils":
        return <Utensils className="w-6 h-6 text-orange-600" />
      case "accessibility":
        return <Accessibility className="w-6 h-6 text-purple-600" />
      default:
        return <Wifi className="w-6 h-6 text-blue-600" />
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="Venue" />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Venue Details</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Everything you need to know about getting to and enjoying DevFest Ireland 2025
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2 text-gray-700">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">Saturday, December 6th, 2025</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Clock className="w-5 h-5 text-green-600" />
                <span className="font-semibold">9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{venueData.venue.name}</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                      <p className="text-gray-600">{venueData.venue.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
                      <p className="text-gray-600">{venueData.venue.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-600">{venueData.venue.email}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <Link href="https://maps.app.goo.gl/c6XKCEmnhVQ2JPBn7" target="_blank">
                    <Button className="bg-blue-600 hover:bg-blue-700 mr-4">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </Link>
                  <Link href="https://www.midlandsparkhotel.com/" target="_blank">
                    <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Hotel Website
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">About the Venue</h3>
                <p className="text-gray-600">{venueData.venue.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Getting There</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {venueData.venue.transportation.map((transport, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      {getTransportIcon(transport.type)}
                    </div>
                    <CardTitle className="text-xl">{transport.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{transport.description}</p>
                    <div className="text-sm text-gray-500 space-y-2">
                      {transport.routes.map((route, routeIndex) => (
                        <p key={routeIndex}>
                          {route.from && <strong>From {route.from}:</strong>} {route.duration}
                          {route.route && <strong>{route.route}:</strong>} {route.description}
                          {route.frequency && <strong>Frequency:</strong>} {route.frequency}
                          {route.note && route.note}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Venue Facilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Venue Facilities</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {venueData.venue.features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      {getFeatureIcon(feature.icon)}
                    </div>
                    <CardTitle className="text-lg">{feature.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Need Accommodation?</h2>
            <p className="text-xl text-gray-600 mb-8">Stay at the venue hotel or choose from nearby accommodations</p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{venueData.venue.accommodation.venue.name}</CardTitle>
                  <CardDescription className="text-green-600 font-semibold">
                    {venueData.venue.accommodation.venue.type}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{venueData.venue.accommodation.venue.description}</p>
                  <div className="text-sm text-gray-500">
                    <p>
                      <strong>Special Rate:</strong> {venueData.venue.accommodation.venue.rate}
                    </p>
                    <p>
                      <strong>Includes:</strong> {venueData.venue.accommodation.venue.includes}
                    </p>
                    <p>
                      <strong>Book by:</strong> {venueData.venue.accommodation.venue.deadline}
                    </p>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700 w-full">Book Special Rate</Button>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{venueData.venue.accommodation.nearby.title}</CardTitle>
                  <CardDescription>Alternative accommodations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{venueData.venue.accommodation.nearby.description}</p>
                  <div className="text-sm text-gray-500 space-y-1">
                    {venueData.venue.accommodation.nearby.options.map((option, index) => (
                      <p key={index}>• {option}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Ready to Join Us?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/register">
              <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">Register for Free</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
