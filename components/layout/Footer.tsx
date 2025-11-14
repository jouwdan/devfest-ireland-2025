import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold">
                <span className="text-yellow-500">{`{`}</span>
                <span>DevFest</span>
                <span className="text-yellow-500">{`}`}</span>
              </span>
              <Badge variant="outline" className="bg-blue-900 text-blue-200 border-blue-700">
                Ireland 2025
              </Badge>
            </div>
            <p className="text-gray-400">Organized by Google Developer Groups Ireland</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/schedule" className="block text-gray-400 hover:text-white transition-colors">
                Schedule
              </Link>
              <Link href="/venue" className="block text-gray-400 hover:text-white transition-colors">
                Venue
              </Link>
              <Link href="/sponsorship" className="block text-gray-400 hover:text-white transition-colors">
                Sponsorship
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="space-y-2">
              <Link href="https://linkedin.com/company/gdgportlaoise" className="block text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </Link>
              <Link href="/register" className="block text-gray-400 hover:text-white transition-colors">
                Register
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Google Developer Groups Ireland. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
