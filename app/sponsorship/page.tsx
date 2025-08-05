"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  Star,
  Users,
  Globe,
  Megaphone,
  Gift,
  Mic,
  Shirt,
  FileText,
  MapPin,
  Calendar,
  Mail,
  Phone,
  Handshake,
  Zap,
  Heart,
  Wifi,
  Camera,
  Utensils,
} from "lucide-react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import ScrollToTopButton from "@/components/layout/ScrollToTopButton"
import Link from "next/link"

const sponsorshipTiers = [
  {
    name: "Bronze",
    cost: "€750",
    maxSlots: 6,
    color: "amber",
    bgGradient: "from-amber-50 to-amber-100",
    borderColor: "border-amber-200",
    badgeColor: "bg-amber-600",
    benefits: [
      "Logo on website",
      "Verbal recognition in opening & closing remarks",
      "Logo on DevFest Ireland 2025 printed media",
    ],
  },
  {
    name: "Silver",
    cost: "€1,250",
    maxSlots: 4,
    color: "gray",
    bgGradient: "from-gray-50 to-gray-100",
    borderColor: "border-gray-200",
    badgeColor: "bg-gray-500",
    benefits: [
      "All Bronze benefits, plus:",
      "Exhibitor Table at event",
      "More prominent logo on website",
      "Promotion on DevFest Ireland social media",
      "Bring Your Own Merchandise",
    ],
  },
  {
    name: "Gold",
    cost: "€2,000",
    maxSlots: 2,
    color: "yellow",
    bgGradient: "from-yellow-50 to-yellow-100",
    borderColor: "border-yellow-200",
    badgeColor: "bg-yellow-500",
    popular: true,
    benefits: [
      "All Silver benefits, plus:",
      "Prominently placed Exhibitor Table",
      "Most prominent logo on website",
      "Logo on volunteer & organizer clothing",
      "Option to deliver 1 technical talk/workshop at event",
      "Bring Your Own Merchandise placed at check in desk",
    ],
  },
];

const partnershipTypes = [
  {
    name: "Technology Partner",
    icon: Wifi,
    color: "purple",
    description: "Provide technical services or infrastructure",
    benefits: [
      "Logo on website",
      "Technical service recognition",
      "Developer community exposure",
    ],
  },
  {
    name: "Media Partner",
    icon: Camera,
    color: "red",
    description: "Provide photography, videography, or streaming",
    benefits: [
      "Content co-branding rights",
      "Recognition in all media",
      "Cross-promotion opportunities",
      "Access to exclusive content",
    ],
  },
  {
    name: "Service Partner",
    icon: Zap,
    color: "indigo",
    description: "Provide professional services or expertise",
    benefits: [
      "Professional service recognition",
      "Expertise showcase opportunities",
      "Networking with attendees",
      "Industry thought leadership",
    ],
  },
];

const whySponsor = [
  {
    icon: Users,
    title: "Reach Tech Talent",
    description: "Connect with 300+ developers, engineers, and tech professionals from across Ireland",
  },
  {
    icon: Globe,
    title: "Brand Visibility",
    description: "Showcase your brand to Ireland's most active developer community",
  },
  {
    icon: Megaphone,
    title: "Thought Leadership",
    description: "Position your company as an industry leader through speaking opportunities",
  },
  {
    icon: Gift,
    title: "Direct Engagement",
    description: "Interact directly with potential customers, partners, and employees",
  },
]

const whyPartner = [
  {
    icon: Handshake,
    title: "Community Impact",
    description: "Support Ireland's developer community and contribute to tech education",
  },
  {
    icon: Heart,
    title: "Brand Association",
    description: "Associate your brand with innovation, learning, and community building",
  },
  {
    icon: Users,
    title: "Network Growth",
    description: "Connect with like-minded organizations and expand your professional network",
  },
  {
    icon: Zap,
    title: "Service Showcase",
    description: "Demonstrate your capabilities to a highly engaged tech audience",
  },
]

const eventStats = [
  { number: "200+", label: "Expected Attendees" },
  { number: "10+", label: "Technical Sessions" },
  { number: "8", label: "Hours of Networking" },
  { number: "100%", label: "Free for Attendees" },
]

const getPartnerColorClasses = (color: string) => {
  const colors = {
    blue: "from-blue-50 to-blue-100 border-blue-200 text-blue-600",
    green: "from-green-50 to-green-100 border-green-200 text-green-600",
    purple: "from-purple-50 to-purple-100 border-purple-200 text-purple-600",
    red: "from-red-50 to-red-100 border-red-200 text-red-600",
    pink: "from-pink-50 to-pink-100 border-pink-200 text-pink-600",
    indigo: "from-indigo-50 to-indigo-100 border-indigo-200 text-indigo-600",
  }
  return colors[color as keyof typeof colors] || colors.blue
}

export default function SponsorshipPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="Sponsorship" />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-16 bg-pink-200 rounded-full opacity-60 transform rotate-12"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-50"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-green-200 rounded-lg opacity-40 transform rotate-45"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Sponsor & Partner with DevFest Ireland 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join Ireland's largest free tech event through monetary
              sponsorship or service partnerships and connect with the most
              passionate developer community in the country
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <div className="flex items-center space-x-2 text-gray-700">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">
                  Saturday December 6th 2025
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
              <Link href="mailto:jordan@harrison.to">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Sponsorship Package
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Event Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why DevFest Ireland?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ireland's premier developer conference brings together the best
              minds in tech
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
            {eventStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Monetary Sponsorship Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Support DevFest Ireland through financial sponsorship and gain
              maximum brand exposure
            </p>
          </div>

          {/* Why Sponsor */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {whySponsor.map((item, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sponsorship Tiers */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sponsorshipTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${
                  tier.bgGradient
                } ${tier.borderColor} ${
                  tier.popular ? "ring-2 ring-blue-500 scale-105" : ""
                }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="mb-4">
                    <Badge
                      className={`${tier.badgeColor} text-white px-4 py-2 text-lg`}>
                      {tier.name}
                    </Badge>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {tier.cost}
                  </div>
                  <div className="text-sm text-gray-600">
                    Max {tier.maxSlots} slot{tier.maxSlots > 1 ? "s" : ""}{" "}
                    available
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={benefitIndex}
                        className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Button
                      className={`w-full ${
                        tier.popular
                          ? "bg-blue-600 hover:bg-blue-700"
                          : "bg-gray-600 hover:bg-gray-700"
                      }`}>
                      Choose {tier.name}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Need a custom sponsorship package? We're happy to work with you to
              create a sponsorship that meets your specific needs.
            </p>
            <Link href="mailto:jordan@harrison.to">
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                Contact Us for Custom Package
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Support DevFest Ireland through service partnerships and in-kind
              contributions
            </p>
          </div>

          {/* Why Partner */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {whyPartner.map((item, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Partnership Types */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {partnershipTypes.map((partner, index) => {
              const colorClasses = getPartnerColorClasses(partner.color);
              return (
                <Card
                  key={index}
                  className={`hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${colorClasses
                    .split(" ")
                    .slice(0, 3)
                    .join(" ")}`}>
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-sm">
                      <partner.icon
                        className={`w-8 h-8 ${colorClasses.split(" ")[3]}`}
                      />
                    </div>
                    <CardTitle className="text-xl text-gray-900">
                      {partner.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {partner.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <ul className="space-y-3">
                      {partner.benefits.map((benefit, benefitIndex) => (
                        <li
                          key={benefitIndex}
                          className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      <Button className="w-full bg-gray-600 hover:bg-gray-700">
                        Become a {partner.name}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Have a unique service or capability you'd like to contribute?
              We're open to creative partnership ideas!
            </p>

            <Link href="mailto:jordan@harrison.to">
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent">
                Propose a Custom Partnership
              </Button>
            </Link>
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
            Whether through sponsorship or partnership, join us in supporting
            Ireland's developer community and showcase your brand to the most
            engaged tech audience in the country.
          </p>
          {/* <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              <Mail className="w-5 h-5 mr-2" />
              Download Sponsorship Deck
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg bg-transparent"
            >
              <Phone className="w-5 h-5 mr-2" />
              Schedule a Meeting
            </Button>
          </div> */}

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-lg mb-4">
              Questions about sponsorship or partnerships?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>jordan@harrison.to</span>
              </div>
              {/* <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+353 1 234 5678</span>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
