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
  url?: string
}

interface Partner {
  id: string
  name: string
  description: string
  logo: string
  type: string
  color: string
  url?: string
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

        <div className="space-y-12 max-w-6xl mx-auto">
          {/* Headline Sponsor - Google */}
          <div className="text-center">
            <Badge className="bg-green-600 text-white px-4 py-2 text-lg mb-6">
              Headline Sponsor
            </Badge>
            <Link href="https://gdg.community.dev" target="_blank" rel="noopener noreferrer">
              <Card className="p-12 hover:shadow-lg transition-shadow bg-gradient-to-br from-green-50 to-green-100 border-green-200 cursor-pointer">
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/gfd-logo.svg"
                    alt="Google for Developers"
                    width={300}
                    height={300}
                    className="object-contain"
                    loading="eager"
                  />
                </div>
              </Card>
            </Link>
          </div>

          {goldSponsors[0] && (
            <div>
              <div className="text-center mb-6">
                <Badge className="bg-yellow-500 text-white px-4 py-2 text-lg">
                  Gold Sponsors
                </Badge>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {goldSponsors.map((sponsor) => (
                  <Link
                    key={sponsor.id}
                    href={sponsor.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={!sponsor.url ? "pointer-events-none" : ""}
                  >
                    <Card className="p-8 text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200 h-full cursor-pointer">
                      <div className="flex items-center justify-center mb-4">
                        <Image
                          src={sponsor.logo || "/placeholder.svg"}
                          alt={sponsor.name}
                          width={120}
                          height={120}
                          className="object-contain"
                          loading="eager"
                        />
                      </div>
                      <h3 className="font-semibold text-gray-900 text-lg">
                        {sponsor.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-2">
                        {sponsor.description}
                      </p>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Silver Sponsors */}
          {silverSponsors[0] && (
            <div>
              <div className="text-center mb-6">
                <Badge className="bg-gray-500 text-white px-4 py-2 text-lg">
                  Silver Sponsors
                </Badge>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {silverSponsors.map((sponsor) => (
                  <Link
                    key={sponsor.id}
                    href={sponsor.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={!sponsor.url ? "pointer-events-none" : ""}
                  >
                    <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200 h-full cursor-pointer">
                      <div className="flex items-center justify-center mb-3">
                        <Image
                          src={sponsor.logo || "/placeholder.svg"}
                          alt={sponsor.name}
                          width={80}
                          height={80}
                          className="object-contain"
                          loading="eager"
                        />
                      </div>
                      <h3 className="font-semibold text-gray-900 text-sm">
                        {sponsor.name}
                      </h3>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8">
            {/* Bronze Sponsors */}
            {bronzeSponsors[0] && (
              <div>
                <div className="text-center mb-6">
                  <Badge className="bg-amber-600 text-white px-3 py-1.5">
                    Bronze Sponsors
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {bronzeSponsors.map((sponsor) => (
                    <Link
                      key={sponsor.id}
                      href={sponsor.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={!sponsor.url ? "pointer-events-none" : ""}
                    >
                      <Card className="p-4 text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200 h-full cursor-pointer">
                        <div className="flex items-center justify-center mb-2">
                          <Image
                            src={sponsor.logo || "/placeholder.svg"}
                            alt={sponsor.name}
                            width={60}
                            height={60}
                            className="object-contain"
                            loading="eager"
                          />
                        </div>
                        <h3 className="font-semibold text-gray-900 text-sm">
                          {sponsor.name}
                        </h3>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Partners */}
            {partners[0] && (
              <div>
                <div className="text-center mb-6">
                  <Badge className="bg-blue-600 text-white px-3 py-1.5">
                    Service Partners
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {partners.map((partner) => {
                    const [bgClasses, , iconBgClass] =
                      getPartnerColorClasses(partner.color).split(" ");
                    return (
                      <Link
                        key={partner.id}
                        href={partner.url || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={!partner.url ? "pointer-events-none" : ""}
                      >
                        <Card
                          className={`p-4 text-center hover:shadow-lg transition-shadow bg-gradient-to-br ${bgClasses} h-full cursor-pointer`}
                        >
                          <div className="flex items-center justify-center mb-2">
                            <Image
                              src={partner.logo || "/placeholder.svg"}
                              alt={partner.name}
                              width={60}
                              height={60}
                              className="object-contain"
                              loading="eager"
                            />
                          </div>
                          <h3 className="font-semibold text-gray-900 text-sm">
                            {partner.name}
                          </h3>
                        </Card>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
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
                className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
              >
                Partnership Opportunities
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
