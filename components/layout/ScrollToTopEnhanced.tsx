"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export default function ScrollToTopEnhanced() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Check if there's a hash in the URL (for anchor links)
    const hash = window.location.hash

    if (hash) {
      // If there's a hash, try to scroll to that element
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        } else {
          // If element not found, scroll to top
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
      }, 100) // Small delay to ensure page is rendered
    } else {
      // No hash, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [pathname, searchParams])

  return null
}
