'use client'

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

interface SessionizeSpeaker {
  id: string
  firstName: string
  lastName: string
  fullName: string
  bio: string
  tagLine: string
  profilePicture: string
  sessions: Array<{
    id: number
    name: string
  }>
  isTopSpeaker: boolean
  links: Array<{
    title: string
    url: string
    linkType: string
  }>
  categories?: Array<{
    id: number
    name: string
    categoryItems: Array<{
      id: number
      name: string
    }>
  }>
}

export default function SessionizeSpeakerWall() {
  const [speakers, setSpeakers] = useState<SessionizeSpeaker[]>([])
  const [loading, setLoading] = useState(true)
  const [showAll, setShowAll] = useState(false)
  
  const INITIAL_DISPLAY = 6
  const displayedSpeakers = showAll ? speakers : speakers.slice(0, INITIAL_DISPLAY)
  const hasMore = speakers.length > INITIAL_DISPLAY

  useEffect(() => {
    async function fetchSpeakers() {
      try {
        const res = await fetch('https://sessionize.com/api/v2/v298fp8p/view/SpeakerWall')
        
        if (!res.ok) {
          throw new Error('Failed to fetch speakers')
        }
        
        const data = await res.json()
        setSpeakers(data)
      } catch (error) {
        console.error('Error fetching speakers:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchSpeakers()
  }, [])
  
  if (loading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Loading speakers...</p>
      </div>
    )
  }
  
  if (speakers.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Speakers will be announced soon!</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {displayedSpeakers.map((speaker) => (
          <Card key={speaker.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-blue-100">
                {speaker.profilePicture ? (
                  <img
                    src={speaker.profilePicture || "/placeholder.svg"}
                    alt={speaker.fullName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">
                      {speaker.firstName[0]}{speaker.lastName[0]}
                    </span>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{speaker.fullName}</h3>
              {speaker.tagLine && (
                <p className="text-blue-600 font-semibold mt-1">{speaker.tagLine}</p>
              )}
            </CardHeader>
            <CardContent className="space-y-4">
              {speaker.bio && (
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {speaker.bio}
                </p>
              )}
              
              {speaker.sessions && speaker.sessions.length > 0 && (
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 text-sm">
                    {speaker.sessions[0].name}
                  </h4>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      
      {hasMore && !showAll && (
        <div className="text-center">
          <Button
            onClick={() => setShowAll(true)}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Show More Speakers ({speakers.length - INITIAL_DISPLAY} more)
          </Button>
        </div>
      )}
    </div>
  )
}
