"use client"

import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import ScheduleItem from "@/components/sections/ScheduleItem"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"
import Link from "next/link"

// Import data
import scheduleData from "@/data/schedule.json"

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="Schedule" />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Event Schedule</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              A full day of learning, networking, and innovation at DevFest Ireland 2025
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

      {/* Schedule */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {scheduleData.schedule.map((item, index) => (
                <ScheduleItem key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Ready to Join Us?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">Register for Free</Button>
            <Link href="/speakers">
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent px-8 py-3 text-lg"
              >
                Meet the Speakers
              </Button>
            </Link>
            <Link href="/venue">
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent px-8 py-3 text-lg"
              >
                Venue Details
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
