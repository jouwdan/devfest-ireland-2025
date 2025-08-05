import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Organizer {
  id: string
  name: string
  description: string
  color: string
}

interface OrganizersSectionProps {
  organizers: Organizer[]
}

export default function OrganizersSection({ organizers }: OrganizersSectionProps) {
  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-blue-200 from-blue-500 to-blue-600",
      green: "border-green-200 from-green-500 to-green-600",
      red: "border-red-200 from-red-500 to-red-600",
      yellow: "border-yellow-200 from-yellow-500 to-yellow-600",
      purple: "border-purple-200 from-purple-500 to-purple-600",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Organized By</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            DevFest Ireland 2025 is brought to you by Google Developer Groups across Ireland
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {organizers.map((organizer) => {
            const [borderClass, gradientClass] = getColorClasses(organizer.color).split(" ")
            return (
              <Card
                key={organizer.id}
                className={`text-center hover:shadow-lg transition-shadow border-2 hover:${borderClass}`}
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${gradientClass} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <span className="text-white font-bold text-xl">GDG</span>
                  </div>
                  <CardTitle className="text-lg">{organizer.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{organizer.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
