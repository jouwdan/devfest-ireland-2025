"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Clock, Users, Code, Lightbulb, Coffee, Megaphone } from "lucide-react"
import Link from "next/link"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import SpeakerCard from "@/components/sections/SpeakerCard"
import SponsorsSection from "@/components/sections/SponsorsSection"
import OrganizersSection from "@/components/sections/OrganizersSection"
import ScrollToTopButton from "@/components/layout/ScrollToTopButton"

// Import data
import speakersData from "@/data/speakers.json"
import sponsorsData from "@/data/sponsors.json"
import organizersData from "@/data/organizers.json"
import Logo from "@/lib/Logo"
import CurlyBracketOpen from "@/lib/CurlyBracketOpen"
import CurlyBracketClose from "@/lib/CurlyBracketClose"

export default function DevFestIreland2025() {
  // Get featured speakers (first 3)
  const featuredSpeakers = speakersData.speakers.slice(0, 4)

  return (
    <div className="min-h-screen bg-white">
      {/* Call for Speakers Banner */}
      {/* <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-3 text-center">
            <Megaphone className="w-5 h-5" />
            <span className="font-semibold">
              Call for Speakers is now open!
            </span>
            <Link
              href="https://sessionize.com/devfest-ireland-2025/"
              target="_blank">
              <Button
                size="sm"
                className="bg-white text-green-600 hover:bg-gray-100 ml-2 px-4 py-1 text-sm font-semibold">
                Submit Your Talk
              </Button>
            </Link>
          </div>
        </div>
      </div> */}

      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        {/* Decorative shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-16 bg-pink-200 rounded-full opacity-60 transform rotate-12"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-50"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-green-200 rounded-lg opacity-40 transform rotate-45"></div>
          <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-yellow-200 rounded-full opacity-50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-1/6 h-1/6 mx-auto mb-4">
                <Logo />
              </div>
              <div className="inline-flex items-center space-x-4 mb-6">
                <CurlyBracketOpen className="w-12 h-22 text-blue-600" />
                <h1 className="text-6xl md:text-8xl font-bold text-gray-900">
                  DevFest
                </h1>
                <CurlyBracketClose className="w-12 h-22 text-blue-600" />
              </div>
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Badge className="bg-green-600 text-white px-4 py-2 text-2xl">
                  Ireland 2025
                </Badge>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join Ireland's largest free tech event for a day of learning,
              networking, and innovation. Discover the latest in Google
              technologies and connect with the developer community.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <div className="flex items-center space-x-2 text-gray-700">
                <CalendarDays className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">
                  Saturday December 6th 2025, 09:00 - 17:00
                </span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <MapPin className="w-5 h-5 text-red-500" />
                <span className="font-semibold">
                  Midlands Park Hotel, Portlaoise
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/register" target="_blank">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                >
                  Register for Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Event Highlights - Add the about anchor here */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What to Expect
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A full day of technical sessions, workshops, and networking
              opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Technical Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Deep dives into the latest technologies, frameworks, and
                  developer tools
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Hands-on learning experiences with expert guidance and
                  practical applications
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Networking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connect with fellow developers, industry experts, and Google
                  Developer Groups
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Coffee className="w-6 h-6 text-yellow-600" />
                </div>
                <CardTitle className="text-xl">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Join Ireland's vibrant developer community and make lasting
                  connections
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Keynote Speakers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Speakers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn from industry leaders and Google Developer Experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredSpeakers.map((speaker) => (
              <SpeakerCard
                key={speaker.id}
                speaker={speaker}
                showSession={false}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              More speakers to be announced soon!
            </p>
            {/* <Link href="/speakers">
              <Button className="bg-blue-600 hover:bg-blue-700">
                View All Speakers
              </Button>
            </Link> */}
          </div>
        </div>
      </section>

      <OrganizersSection organizers={organizersData.organizers} />

      <SponsorsSection
        goldSponsors={sponsorsData.goldSponsors}
        silverSponsors={sponsorsData.silverSponsors}
        bronzeSponsors={sponsorsData.bronzeSponsors}
        partners={sponsorsData.partners}
      />

      {/* Event Overview */}
      <section id="schedule" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Event Overview
            </h2>
            <p className="text-xl text-gray-600">
              Saturday, December 6th, 2025
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-blue-50 rounded-lg">
                <Clock className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Full Day Event
                </h3>
                <p className="text-gray-600">09:00 - 17:00</p>
                <p className="text-sm text-gray-500 mt-2">
                  Registration, sessions, workshops, and networking
                </p>
              </div>
              <div className="p-6 bg-green-50 rounded-lg">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Expert Speakers
                </h3>
                <p className="text-gray-600">10+ Sessions</p>
                <p className="text-sm text-gray-500 mt-2">
                  Industry leaders and Google Developer Experts
                </p>
              </div>
              <div className="p-6 bg-purple-50 rounded-lg">
                <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Central Location
                </h3>
                <p className="text-gray-600">Portlaoise</p>
                <p className="text-sm text-gray-500 mt-2">
                  Easy access from all parts of Ireland
                </p>
              </div>
            </div>

            {/* <div className="text-center mt-12">
              <Link href="/schedule">
                <Button className="bg-blue-600 hover:bg-blue-700 mr-4">
                  View Full Schedule
                </Button>
              </Link>
              <Link href="/venue">
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                  Venue Details
                </Button>
              </Link>
            </div> */}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join DevFest Ireland 2025?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Don't miss out on Ireland's premier developer conference. Register
            now for free and be part of the community!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/register" target="_blank">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Register for Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
