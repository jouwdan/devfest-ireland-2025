"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface HeaderProps {
  currentPage?: string
}

export default function Header({ currentPage }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()

  const navItems = [
    { href: "/#about", label: "About" },
    { href: "/schedule", label: "Schedule" },
    { href: "/speakers", label: "Speakers" },
    { href: "/venue", label: "Venue" },
    { href: "/blog", label: "Blog" },
    { href: "/sponsorship", label: "Sponsorship" },
  ]

  const isCurrentPage = (label: string) => {
    return currentPage?.toLowerCase() === label.toLowerCase()
  }

  const handleNavClick = (href: string, label: string) => {
    setIsMobileMenuOpen(false)

    // Handle anchor links on homepage
    if (href.startsWith("/#")) {
      const anchor = href.substring(2) // Remove "/#"

      // If we're not on the homepage, navigate there first
      if (window.location.pathname !== "/") {
        router.push("/")
        // Wait for navigation to complete, then scroll to anchor
        setTimeout(() => {
          const element = document.getElementById(anchor)
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        }, 100)
      } else {
        // We're already on homepage, just scroll to anchor
        const element = document.getElementById(anchor)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }
  }

  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-yellow-500">{`{`}</span>
              <span className="text-gray-900">DevFest</span>
              <span className="text-yellow-500">{`}`}</span>
            </div>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              Ireland 2025
            </Badge>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.href.startsWith("/#") ? (
                  <button
                    onClick={() => handleNavClick(item.href, item.label)}
                    className={`transition-colors ${
                      isCurrentPage(item.label) ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`transition-colors ${
                      isCurrentPage(item.label) ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Button className="bg-blue-600 hover:bg-blue-700">Register Now</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-600" /> : <Menu className="w-6 h-6 text-gray-600" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.href.startsWith("/#") ? (
                    <button
                      onClick={() => handleNavClick(item.href, item.label)}
                      className={`py-2 transition-colors text-left w-full ${
                        isCurrentPage(item.label) ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`py-2 transition-colors block ${
                        isCurrentPage(item.label) ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-gray-900"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <Button className="bg-blue-600 hover:bg-blue-700 w-full" onClick={() => setIsMobileMenuOpen(false)}>
                  Register Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
