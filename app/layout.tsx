import type React from "react"
import type { Metadata } from "next"

import "./globals.css"
import ScrollToTop from "@/components/layout/ScrollToTop"

import { Inter, Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _geist = V0_Font_Geist({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DevFest Ireland 2025 | Premier Developer Conference",
  description:
    "Join Ireland's largest free tech event for a day of learning, networking, and innovation. Discover the latest in Google technologies and connect with the developer community.",
  keywords:
    "DevFest, Ireland, Google, Developer, Conference, Technology, AI, Web Development, Mobile, Cloud",
  authors: [{ name: "Google Developer Groups Ireland" }],
  openGraph: {
    title: "DevFest Ireland 2025",
    description:
      "Ireland's largest free tech event - December 6th, 2025 in Portlaoise",
    url: "https://devfestireland.com",
    siteName: "DevFest Ireland 2025",
    images: [
      {
        url: "/images/devfest-branding.png",
        width: 1200,
        height: 630,
        alt: "DevFest Ireland 2025",
      },
    ],
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevFest Ireland 2025",
    description:
      "Ireland's premier developer conference - December 6th, 2025 in Portlaoise",
    images: ["/images/devfest-branding.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
