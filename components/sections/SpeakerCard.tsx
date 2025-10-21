import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"

interface Speaker {
  id: string
  name: string
  title: string
  company: string
  expertise: string
  bio: string
  session: string
  time: string
  color: string
  initials: string
}

interface SpeakerCardProps {
  speaker: Speaker
  showSession?: boolean
}

export default function SpeakerCard({ speaker, showSession = true }: SpeakerCardProps) {
  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 text-blue-600 bg-blue-50 border-blue-200",
      green: "from-green-500 to-green-600 text-green-600 bg-green-50 border-green-200",
      purple: "from-purple-500 to-purple-600 text-purple-600 bg-purple-50 border-purple-200",
      red: "from-red-500 to-red-600 text-red-600 bg-red-50 border-red-200",
      yellow: "from-yellow-500 to-yellow-600 text-yellow-600 bg-yellow-50 border-yellow-200",
      indigo: "from-indigo-500 to-indigo-600 text-indigo-600 bg-indigo-50 border-indigo-200",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const colorClasses = getColorClasses(speaker.color)
  const [gradientClasses, textColorClass, bgColorClass, borderColorClass] = colorClasses.split(" ")

  return (
    <Card className={`hover:shadow-lg transition-shadow ${showSession ? `border-2 ${borderColorClass}` : ""}`}>
      <CardHeader className="text-center">
        <div
          className={`w-24 h-24 bg-gradient-to-br ${gradientClasses} rounded-full flex items-center justify-center mx-auto mb-4`}
        >
          <span className="text-white font-bold text-2xl">{speaker.initials}</span>
        </div>
        <CardTitle className="text-xl">{speaker.name}</CardTitle>
        <CardDescription className={`${textColorClass} font-semibold`}>{speaker.expertise}</CardDescription>
        <CardDescription className="text-gray-600">
          {speaker.title} at {speaker.company}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-600 text-sm leading-relaxed">{speaker.bio}</p>

        {showSession && (
          <div className={`p-4 ${bgColorClass} rounded-lg`}>
            <h4 className="font-semibold text-gray-900 mb-2">{speaker.session}</h4>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{speaker.time}</span>
              </div>
            </div>
          </div>
        )}

      </CardContent>
    </Card>
  )
}
