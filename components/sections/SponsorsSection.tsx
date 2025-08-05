import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

interface Sponsor {
  id: string
  name: string
  description: string
  logo: string
}

interface Partner {
  id: string
  name: string
  description: string
  logo: string
  type: string
  color: string
}

interface SponsorsSectionProps {
  goldSponsors: Sponsor[]
  silverSponsors: Sponsor[]
  bronzeSponsors: Sponsor[]
  partners: Partner[]
}

export default function SponsorsSection({
  goldSponsors,
  silverSponsors,
  bronzeSponsors,
  partners,
}: SponsorsSectionProps) {
  const getPartnerColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-50 to-blue-100 border-blue-200 bg-blue-600",
      green: "from-green-50 to-green-100 border-green-200 bg-green-600",
      purple: "from-purple-50 to-purple-100 border-purple-200 bg-purple-600",
      red: "from-red-50 to-red-100 border-red-200 bg-red-600",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sponsors & Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            DevFest Ireland 2025 is made possible by our amazing sponsors and
            partners
          </p>
        </div>

        <div className="mb-12">
          <div className="text-center mb-8">
            <Badge className="bg-green-600 text-white px-4 py-2 text-lg mb-4">
              Headline Sponsor
            </Badge>
            <p className="text-gray-600">
              Headline sponsor supporting DevFest Ireland
            </p>
          </div>
          <div className="grid md:grid-cols1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 gap-2 text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <div className="rounded-lg flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/images/gfd-logo.svg"
                  alt="Google for Developers"
                  width={156}
                  height={156}
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">
                Google for Developers
              </h3>
              <p className="text-sm text-gray-600">Headline sponsor supporting DevFest Ireland</p>
            </Card>
          </div>
        </div>

        {/* Gold Sponsors */}
        {goldSponsors[0] && (
          <div className="mb-12">
            <div className="text-center mb-8">
              <Badge className="bg-yellow-500 text-white px-4 py-2 text-lg mb-4">
                Gold Sponsors
              </Badge>
              <p className="text-gray-600">
                Premier sponsors supporting DevFest Ireland
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {goldSponsors.map((sponsor) => (
                <Card
                  key={sponsor.id}
                  className="p-8 gap-2 text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
                  <div className="w-24 h-24 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={96}
                      height={96}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {sponsor.name}
                  </h3>
                  <p className="text-sm text-gray-600">{sponsor.description}</p>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Silver Sponsors */}
        {silverSponsors[0] && (
          <div className="mb-12">
            <div className="text-center mb-8">
              <Badge className="bg-gray-500 text-white px-4 py-2 text-lg mb-4">
                Silver Sponsors
              </Badge>
              <p className="text-gray-600">
                Supporting the developer community
              </p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {silverSponsors.map((sponsor) => (
                <Card
                  key={sponsor.id}
                  className="p-6 gap-2 text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {sponsor.name}
                  </h3>
                  <p className="text-xs text-gray-600">{sponsor.description}</p>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Bronze Sponsors */}
        {bronzeSponsors[0] && (
          <div className="mb-12">
            <div className="text-center mb-8">
              <Badge className="bg-amber-600 text-white px-4 py-2 text-lg mb-4">
                Bronze Sponsors
              </Badge>
              <p className="text-gray-600">Community supporters</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
              {bronzeSponsors.map((sponsor) => (
                <Card
                  key={sponsor.id}
                  className="p-4 gap-2 text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {sponsor.name}
                  </h3>
                  <p className="text-xs text-gray-600">{sponsor.description}</p>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Partners */}
        {partners[0] && (
          <div className="mb-8">
            <div className="text-center mb-8">
              <Badge className="bg-blue-600 text-white px-4 py-2 text-lg mb-4">
                Partners
              </Badge>
              <p className="text-gray-600">Providing services and support</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {partners.map((partner) => {
                const [bgClasses, , iconBgClass] = getPartnerColorClasses(
                  partner.color
                ).split(" ");
                return (
                  <Card
                    key={partner.id}
                    className={`p-6 text-center hover:shadow-lg transition-shadow bg-gradient-to-br ${bgClasses} gap-2`}>
                    <div
                      className={`w-16 h-16 ${iconBgClass} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      {partner.name}
                    </h3>
                    <p className="text-xs text-gray-600">
                      {partner.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Interested in sponsoring or partnering with DevFest Ireland 2025?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/sponsorship">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Become a Sponsor
              </Button>
            </Link>
            <Link href="/sponsorship">
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent">
                Partnership Opportunities
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
