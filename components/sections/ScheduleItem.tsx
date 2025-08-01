import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Users, Coffee, Utensils } from "lucide-react"

interface ScheduleSession {
  track: string
  title: string
  speaker: string
  location: string
}

interface ScheduleItemData {
  time: string
  title: string
  description: string
  type: string
  duration: string
  location: string
  speaker?: string
  sessions?: ScheduleSession[]
}

interface ScheduleItemProps {
  item: ScheduleItemData
}

export default function ScheduleItem({ item }: ScheduleItemProps) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "registration":
        return <Users className="w-5 h-5" />
      case "keynote":
      case "closing":
        return <Users className="w-5 h-5" />
      case "session":
      case "workshop":
        return <Users className="w-5 h-5" />
      case "break":
        return <Coffee className="w-5 h-5" />
      case "lunch":
        return <Utensils className="w-5 h-5" />
      default:
        return <Clock className="w-5 h-5" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "keynote":
      case "closing":
        return "bg-blue-50 border-blue-200"
      case "session":
      case "workshop":
        return "bg-green-50 border-green-200"
      case "break":
        return "bg-yellow-50 border-yellow-200"
      case "lunch":
        return "bg-orange-50 border-orange-200"
      case "networking":
        return "bg-purple-50 border-purple-200"
      default:
        return "bg-gray-50 border-gray-200"
    }
  }

  return (
    <Card className={`${getTypeColor(item.type)} border-2`}>
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
          <div className="flex items-center space-x-3 mb-4 lg:mb-0 lg:min-w-[140px]">
            <div className="text-blue-600">{getTypeIcon(item.type)}</div>
            <div>
              <div className="font-bold text-blue-600 text-lg">{item.time}</div>
              <div className="text-sm text-gray-500">{item.duration}</div>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
              <h3 className="font-bold text-gray-900 text-lg mb-2 sm:mb-0">{item.title}</h3>
              <Badge variant="outline" className="text-xs w-fit">
                <MapPin className="w-3 h-3 mr-1" />
                {item.location}
              </Badge>
            </div>

            <p className="text-gray-600 mb-4">{item.description}</p>

            {item.speaker && (
              <div className="mb-4">
                <span className="text-sm font-semibold text-gray-700">Speaker: </span>
                <span className="text-sm text-blue-600">{item.speaker}</span>
              </div>
            )}

            {item.sessions && (
              <div className="grid md:grid-cols-2 gap-4">
                {item.sessions.map((session, sessionIndex) => (
                  <div key={sessionIndex} className="bg-white p-4 rounded-lg border">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {session.track}
                      </Badge>
                      <span className="text-xs text-gray-500 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {session.location}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">{session.title}</h4>
                    <p className="text-xs text-blue-600">{session.speaker}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
