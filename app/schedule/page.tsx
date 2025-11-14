'use client'

import { useState, useEffect } from 'react'
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import ScrollToTopButton from "@/components/layout/ScrollToTopButton"
import { Calendar, MapPin, Clock, Users } from 'lucide-react'

interface Speaker {
  id: string
  name: string
}

interface Session {
  id: string
  title: string
  description: string | null
  startsAt: string
  endsAt: string
  isServiceSession: boolean
  isPlenumSession: boolean
  speakers: Speaker[]
  categories: any[]
  roomId: number
  room: string
  liveUrl: string | null
  recordingUrl: string | null
  status: string | null
  isInformed: boolean
  isConfirmed: boolean
}

interface Room {
  id: number
  name: string
  session: Session
  index: number
}

interface TimeSlot {
  slotStart: string
  rooms: Room[]
}

interface ScheduleData {
  date: string
  isDefault: boolean
  rooms: Array<{
    id: number
    name: string
    sessions: Session[]
    hasOnlyPlenumSessions: boolean
  }>
  timeSlots: TimeSlot[]
}

async function getSchedule(): Promise<ScheduleData[]> {
  const res = await fetch('https://sessionize.com/api/v2/v298fp8p/view/GridSmart', {
    next: { revalidate: 3600 } // Cache for 1 hour
  })
  
  if (!res.ok) {
    throw new Error('Failed to fetch schedule')
  }
  
  return res.json()
}

function formatTime(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  })
}

function isAfterLunch(dateString: string): boolean {
  const date = new Date(dateString)
  const hours = date.getHours()
  const minutes = date.getMinutes()
  // After 1:15pm (13:15)
  return hours > 13 || (hours === 13 && minutes >= 15)
}

function calculateTimeSlotSpan(session: Session, allTimeSlots: TimeSlot[]): number {
  const sessionStart = new Date(session.startsAt).getTime()
  const sessionEnd = new Date(session.endsAt).getTime()
  
  let span = 0
  for (const slot of allTimeSlots) {
    const slotStart = new Date(slot.rooms[0]?.session?.startsAt || slot.slotStart).getTime()
    if (slotStart >= sessionStart && slotStart < sessionEnd) {
      span++
    }
  }
  
  return span
}

function buildSessionRenderMap(timeSlots: TimeSlot[], rooms: Array<{ id: number }>): Map<string, number> {
  const sessionRenderMap = new Map<string, number>() // key: `timeSlotIndex-roomId`, value: rowspan or -1 (skip)
  
  timeSlots.forEach((timeSlot, timeIndex) => {
    rooms.forEach((room) => {
      const roomSession = timeSlot.rooms.find(r => r.id === room.id)
      const session = roomSession?.session
      
      if (session) {
        const key = `${timeIndex}-${room.id}`
        
        // Check if this session was already rendered in a previous time slot
        const isAlreadyRendered = Array.from(sessionRenderMap.entries()).some(([prevKey, span]) => {
          const [prevTimeIndex, prevRoomId] = prevKey.split('-').map(Number)
          return prevRoomId === room.id && 
                 span > 0 && 
                 timeIndex > prevTimeIndex && 
                 timeIndex < prevTimeIndex + span
        })
        
        if (isAlreadyRendered) {
          sessionRenderMap.set(key, -1) // Mark as skip
        } else {
          const span = calculateTimeSlotSpan(session, timeSlots)
          sessionRenderMap.set(key, span)
        }
      }
    })
  })
  
  return sessionRenderMap
}

export default function SchedulePage() {
  const [scheduleData, setScheduleData] = useState<ScheduleData[]>([])
  const [expandedSessions, setExpandedSessions] = useState<Set<string>>(new Set())
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchSchedule() {
      try {
        const res = await fetch('https://sessionize.com/api/v2/v298fp8p/view/GridSmart')
        const data = await res.json()
        setScheduleData(data)
      } catch (error) {
        console.error('Failed to fetch schedule:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchSchedule()
  }, [])

  const toggleSessionExpansion = (sessionId: string) => {
    setExpandedSessions(prev => {
      const next = new Set(prev)
      if (next.has(sessionId)) {
        next.delete(sessionId)
      } else {
        next.add(sessionId)
      }
      return next
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header currentPage="Schedule" />
        <div className="flex items-center justify-center py-32">
          <p className="text-gray-600">Loading schedule...</p>
        </div>
      </div>
    )
  }

  const daySchedule = scheduleData[0]
  if (!daySchedule) {
    return (
      <div className="min-h-screen bg-white">
        <Header currentPage="Schedule" />
        <div className="flex items-center justify-center py-32">
          <p className="text-gray-600">No schedule available</p>
        </div>
      </div>
    )
  }

  const sessionRenderMap = buildSessionRenderMap(daySchedule.timeSlots, daySchedule.rooms)

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

      {/* Schedule Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Room Headers */}
            <div className="hidden lg:block">
              <table className="w-full border-separate border-spacing-4">
                <thead>
                  <tr>
                    <th className="w-[150px] text-left font-bold text-gray-900">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Time
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {daySchedule.timeSlots.map((timeSlot, timeIndex) => {
                    const showBothTracks = isAfterLunch(timeSlot.rooms[0]?.session?.startsAt || timeSlot.slotStart)
                    const isFirstAfterLunch = timeIndex > 0 && 
                      !isAfterLunch(daySchedule.timeSlots[timeIndex - 1].rooms[0]?.session?.startsAt || '') && 
                      showBothTracks
                    
                    return (
                      <>
                        {isFirstAfterLunch && (
                          <tr>
                            <td className="pt-8"></td>
                            {daySchedule.rooms.map((room) => (
                              <td key={room.id} className="font-bold text-gray-900 text-center p-4 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg">
                                <Users className="w-5 h-5 inline-block mr-2" />
                                {room.name}
                              </td>
                            ))}
                          </tr>
                        )}

                        <tr key={timeIndex}>
                          {/* Time Column */}
                          <td className="w-[150px] font-semibold text-blue-600 align-top pt-4">
                            <div className="flex items-start">
                              <Clock className="w-4 h-4 mr-2 mt-1" />
                              <span>{formatTime(timeSlot.rooms[0]?.session?.startsAt || '')}</span>
                            </div>
                          </td>

                          {daySchedule.rooms.map((room, roomIndex) => {
                            const key = `${timeIndex}-${room.id}`
                            const rowSpan = sessionRenderMap.get(key) || 0
                            
                            if (rowSpan === -1) {
                              return null
                            }

                            const roomSession = timeSlot.rooms.find(r => r.id === room.id)
                            const session = roomSession?.session

                            if (!showBothTracks) {
                              if (roomIndex === 0) {
                                const isExpanded = session ? expandedSessions.has(session.id) : false
                                
                                return (
                                  <td 
                                    key={room.id}
                                    rowSpan={rowSpan > 1 ? rowSpan : undefined}
                                    colSpan={2}
                                    className={`rounded-lg p-6 border-2 align-top ${
                                      session?.isServiceSession 
                                        ? 'bg-gray-50 border-gray-200' 
                                        : 'bg-white border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer'
                                    }`}
                                    onClick={() => session && !session.isServiceSession && toggleSessionExpansion(session.id)}
                                  >
                                    {session ? (
                                      <>
                                        <div className="flex items-start justify-between mb-3">
                                          <h3 className={`font-bold ${
                                            session.isServiceSession ? 'text-gray-700 text-lg' : 'text-gray-900 text-xl'
                                          }`}>
                                            {session.title}
                                          </h3>
                                          {!session.isServiceSession && (
                                            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full whitespace-nowrap">
                                              {formatTime(session.startsAt)} - {formatTime(session.endsAt)}
                                            </span>
                                          )}
                                        </div>

                                        {session.speakers.length > 0 && (
                                          <div className="mb-3">
                                            <p className="text-sm font-semibold text-blue-600">
                                              {session.speakers.map(s => s.name).join(', ')}
                                            </p>
                                          </div>
                                        )}

                                        {session.description && (
                                          <p className={`text-gray-600 text-sm ${isExpanded ? '' : 'line-clamp-3'}`}>
                                            {session.description}
                                          </p>
                                        )}

                                        {session.isServiceSession && (
                                          <div className="mt-2">
                                            <span className="inline-flex items-center px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">
                                              Break
                                            </span>
                                          </div>
                                        )}
                                      </>
                                    ) : (
                                      <p className="text-gray-400 text-center">No session</p>
                                    )}
                                  </td>
                                )
                              } else {
                                return null
                              }
                            }

                            if (!session) {
                              return null
                            }

                            const isExpanded = expandedSessions.has(session.id)

                            return (
                              <td 
                                key={room.id}
                                rowSpan={rowSpan > 1 ? rowSpan : undefined}
                                className={`rounded-lg p-6 border-2 align-top ${
                                  session.isServiceSession 
                                    ? 'bg-gray-50 border-gray-200' 
                                    : 'bg-white border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer'
                                }`}
                                onClick={() => !session.isServiceSession && toggleSessionExpansion(session.id)}
                              >
                                <div className="flex items-start justify-between mb-3">
                                  <h3 className={`font-bold ${
                                    session.isServiceSession ? 'text-gray-700 text-lg' : 'text-gray-900 text-xl'
                                  }`}>
                                    {session.title}
                                  </h3>
                                  {!session.isServiceSession && (
                                    <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full whitespace-nowrap">
                                      {formatTime(session.startsAt)} - {formatTime(session.endsAt)}
                                    </span>
                                  )}
                                </div>

                                {session.speakers.length > 0 && (
                                  <div className="mb-3">
                                    <p className="text-sm font-semibold text-blue-600">
                                      {session.speakers.map(s => s.name).join(', ')}
                                    </p>
                                  </div>
                                )}

                                {session.description && (
                                  <p className={`text-gray-600 text-sm ${isExpanded ? '' : 'line-clamp-3'}`}>
                                    {session.description}
                                  </p>
                                )}

                                {session.isServiceSession && (
                                  <div className="mt-2">
                                    <span className="inline-flex items-center px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">
                                      Break
                                    </span>
                                  </div>
                                )}
                              </td>
                            )
                          })}
                        </tr>
                      </>
                    )
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile View */}
            <div className="lg:hidden space-y-6">
              {daySchedule.timeSlots.map((timeSlot, index) => (
                <div key={index} className="space-y-4">
                  <div className="font-semibold text-blue-600 flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{formatTime(timeSlot.rooms[0]?.session?.startsAt || '')}</span>
                  </div>

                  {daySchedule.rooms.map((room) => {
                    const roomSession = timeSlot.rooms.find(r => r.id === room.id)
                    const session = roomSession?.session

                    if (!session) return null

                    const isExpanded = expandedSessions.has(session.id)

                    return (
                      <div 
                        key={room.id} 
                        className={`rounded-lg p-6 border-2 ${
                          session.isServiceSession 
                            ? 'bg-gray-50 border-gray-200' 
                            : 'bg-white border-blue-200 cursor-pointer hover:border-blue-400 transition-all'
                        }`}
                        onClick={() => !session.isServiceSession && toggleSessionExpansion(session.id)}
                      >
                        <div className="mb-2 text-sm font-semibold text-gray-500 flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {session.room}
                        </div>

                        <div className="flex items-start justify-between mb-3">
                          <h3 className={`font-bold ${
                            session.isServiceSession ? 'text-gray-700 text-lg' : 'text-gray-900 text-xl'
                          }`}>
                            {session.title}
                          </h3>
                          {!session.isServiceSession && (
                            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full whitespace-nowrap">
                              {formatTime(session.startsAt)} - {formatTime(session.endsAt)}
                            </span>
                          )}
                        </div>

                        {session.speakers.length > 0 && (
                          <div className="mb-3">
                            <p className="text-sm font-semibold text-blue-600">
                              {session.speakers.map(s => s.name).join(', ')}
                            </p>
                          </div>
                        )}

                        {session.description && (
                          <p className={`text-gray-600 text-sm ${isExpanded ? '' : 'line-clamp-3'}`}>
                            {session.description}
                          </p>
                        )}

                        {session.isServiceSession && (
                          <div className="mt-2">
                            <span className="inline-flex items-center px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">
                              Break
                            </span>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
