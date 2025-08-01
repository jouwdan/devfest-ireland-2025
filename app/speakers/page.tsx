"use client"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import SpeakerCard from "@/components/sections/SpeakerCard"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"
import Link from "next/link"

// Import data
import speakersData from "@/data/speakers.json"

export default function SpeakersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="Speakers" />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Our Speakers</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Meet the industry experts, Google Developer Experts, and thought leaders who will be sharing their
              knowledge at DevFest Ireland 2025
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2 text-gray-700">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">Saturday, December 6th, 2025</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <MapPin className="w-5 h-5 text-red-500" />
                <span className="font-semibold">Midlands Park Hotel, Portlaoise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {speakersData.speakers.map((speaker) => (
              <SpeakerCard key={speaker.id} speaker={speaker} showSession={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Want to Speak at DevFest?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our call for speakers is open! Share your expertise with Ireland's developer community.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-green-600 hover:bg-green-700 px-8 py-3 text-lg">Submit Your Talk</Button>
            <Link href="/schedule">
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent px-8 py-3 text-lg"
              >
                View Full Schedule
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
