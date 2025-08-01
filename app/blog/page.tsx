import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import ScrollToTopButton from "@/components/layout/ScrollToTopButton"

// Import data
import blogData from "@/data/blog-posts.json"

export default function BlogPage() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-IE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getTagColor = (tag: string) => {
    const colors = {
      announcement: "bg-blue-100 text-blue-800",
      devfest: "bg-green-100 text-green-800",
      speakers: "bg-purple-100 text-purple-800",
      community: "bg-yellow-100 text-yellow-800",
      google: "bg-red-100 text-red-800",
      technology: "bg-indigo-100 text-indigo-800",
      tips: "bg-pink-100 text-pink-800",
      cfp: "bg-orange-100 text-orange-800",
      ireland: "bg-emerald-100 text-emerald-800",
      ai: "bg-cyan-100 text-cyan-800",
      cloud: "bg-slate-100 text-slate-800",
      gdg: "bg-violet-100 text-violet-800",
      events: "bg-rose-100 text-rose-800",
      networking: "bg-teal-100 text-teal-800",
      attendees: "bg-lime-100 text-lime-800",
    }
    return colors[tag as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  const featuredPosts = blogData.blogPosts.filter((post) => post.featured)
  const regularPosts = blogData.blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="Blog" />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">DevFest Blog</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Stay updated with the latest news, insights, and stories from the DevFest Ireland community
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPosts.map((post) => (
        <section key={post.slug} className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Badge className="bg-blue-600 text-white mb-4">Featured Post</Badge>
              <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className={getTagColor(tag)}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-2xl md:text-3xl mb-4">{post.title}</CardTitle>
                  <CardDescription className="text-lg text-gray-600 mb-6">{post.excerpt}</CardDescription>

                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xs">{post.author.avatar}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{post.author.name}</p>
                        <p className="text-gray-500">{post.author.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.publishDate)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readingTime}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Link href={`/blog/${post.slug}`}>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      ))}

      {/* All Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Latest Posts</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className={`${getTagColor(tag)} text-xs`}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-xl mb-3">{post.title}</CardTitle>
                    <CardDescription className="text-gray-600 mb-4">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xs">{post.author.avatar}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">{post.author.name}</p>
                          <p className="text-gray-500 text-xs">{post.author.role}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(post.publishDate)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readingTime}</span>
                      </div>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <Button
                        variant="outline"
                        className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                      >
                        Read More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Subscribe to our newsletter to get the latest DevFest news and updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 whitespace-nowrap">Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
