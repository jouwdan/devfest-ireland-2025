import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import ScrollToTopButton from "@/components/layout/ScrollToTopButton"

// Import data
import blogData from "@/data/blog-posts.json"

// Sample blog post content (in a real app, this would come from markdown files or CMS)
const blogPostContent = {
  "devfest-2025-announcement": `
# DevFest Ireland 2025: Bigger and Better Than Ever

We're thrilled to announce that DevFest Ireland 2025 is officially happening! After months of planning and preparation, we're excited to bring you the biggest and most comprehensive developer conference Ireland has ever seen.

## What's New This Year

This year's DevFest promises to be our most ambitious yet. We've expanded our program to include:

- **20+ Technical Sessions** covering the latest in AI/ML, Web Development, Mobile, and Cloud technologies
- **Hands-on Workshops** where you can get practical experience with cutting-edge tools
- **Networking Opportunities** to connect with fellow developers from across Ireland
- **Community Showcase** highlighting amazing projects from local developer groups

## Why Portlaoise?

We've chosen Portlaoise as our host city for its central location, making it easily accessible from Dublin, Cork, Galway, and Belfast. The Midlands Park Hotel provides the perfect venue with state-of-the-art facilities and ample space for all our activities.

## Join the Community

DevFest Ireland 2025 isn't just about the talks and workshops – it's about bringing together Ireland's vibrant developer community. Whether you're a seasoned professional or just starting your journey in tech, there's something for everyone.

Registration opens soon, so stay tuned to our social media channels and website for updates. We can't wait to see you there!

## Get Involved

Want to be part of making DevFest Ireland 2025 amazing? We're looking for:

- **Speakers** to share their expertise
- **Volunteers** to help with event logistics  
- **Sponsors** to support the community

[Submit a talk proposal](#) or [get in touch](#) if you'd like to contribute to making this event unforgettable.

See you in Portlaoise on December 6th, 2025!
  `,
  "call-for-speakers-open": `
# Call for Speakers Now Open - Share Your Expertise

The moment many of you have been waiting for is here – our Call for Speakers (CFP) for DevFest Ireland 2025 is now officially open!

## What We're Looking For

We're seeking passionate speakers who want to share their knowledge and experience with Ireland's developer community. We welcome talks on:

### Technical Topics
- **AI & Machine Learning** - Latest developments, practical applications, and ethical considerations
- **Web Development** - Modern frameworks, performance optimization, and best practices
- **Mobile Development** - Flutter, React Native, native iOS/Android development
- **Cloud & Infrastructure** - Google Cloud Platform, DevOps, containerization, and scalability
- **Developer Tools** - Productivity tools, debugging techniques, and workflow optimization

### Community & Career
- **Developer Experience** - Building better tools and processes for developers
- **Career Development** - Growing as a developer, leadership, and mentorship
- **Diversity & Inclusion** - Making tech more accessible and welcoming for everyone
- **Open Source** - Contributing to and maintaining open source projects

## Session Formats

We offer multiple session formats to suit different speaking styles:

- **Lightning Talks** (5 minutes) - Perfect for quick tips or introducing new concepts
- **Standard Sessions** (25 minutes) - Deep dives into specific topics
- **Workshops** (60-90 minutes) - Hands-on learning experiences

## What We Provide

Selected speakers will receive:
- Travel reimbursement (within Ireland)
- Accommodation for the night before the event
- Full conference access
- Speaker dinner and networking opportunities
- Professional recording of your session

## How to Apply

Ready to share your expertise? Here's what you need to do:

1. **Prepare Your Proposal** - Include a compelling title, abstract, and speaker bio
2. **Choose Your Format** - Select the session type that best fits your content
3. **Submit by December 15th** - Don't wait until the last minute!

[Submit Your Talk Proposal](#)

## Tips for a Great Proposal

- **Be Specific** - Clearly explain what attendees will learn
- **Show Your Passion** - Let your enthusiasm for the topic shine through
- **Include Examples** - Mention specific tools, techniques, or case studies you'll cover
- **Consider Your Audience** - Think about what would be most valuable for Irish developers

## Questions?

Have questions about the CFP process or need help with your proposal? Reach out to our program committee at [speakers@devfest.ie](mailto:speakers@devfest.ie).

We can't wait to see what amazing talks you'll propose. The deadline is December 15th, 2024, so start working on your proposals today!
  `,
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogData.blogPosts.find((p) => p.slug === params.slug)
  const content = blogPostContent[params.slug as keyof typeof blogPostContent]

  if (!post || !content) {
    notFound()
  }

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
      cfp: "bg-orange-100 text-orange-800",
      ireland: "bg-emerald-100 text-emerald-800",
    }
    return colors[tag as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="Blog" />

      {/* Article Header */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className={getTagColor(tag)}>
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{post.title}</h1>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{post.author.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{post.author.name}</p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.publishDate)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readingTime}</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: content
                    .split("\n")
                    .map((line) => {
                      if (line.startsWith("# ")) {
                        return `<h1 class="text-3xl font-bold text-gray-900 mt-8 mb-4">${line.substring(2)}</h1>`
                      } else if (line.startsWith("## ")) {
                        return `<h2 class="text-2xl font-bold text-gray-900 mt-6 mb-3">${line.substring(3)}</h2>`
                      } else if (line.startsWith("### ")) {
                        return `<h3 class="text-xl font-bold text-gray-900 mt-4 mb-2">${line.substring(4)}</h3>`
                      } else if (line.startsWith("- **")) {
                        const match = line.match(/- \*\*(.*?)\*\* - (.*)/)
                        if (match) {
                          return `<li class="mb-2"><strong class="text-gray-900">${match[1]}</strong> - ${match[2]}</li>`
                        }
                        return `<li class="mb-1">${line.substring(2)}</li>`
                      } else if (line.startsWith("- ")) {
                        return `<li class="mb-1">${line.substring(2)}</li>`
                      } else if (line.trim() === "") {
                        return "<br>"
                      } else {
                        return `<p class="mb-4">${line}</p>`
                      }
                    })
                    .join(""),
                }}
              />
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">{post.author.avatar}</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">About {post.author.name}</h3>
                  <p className="text-blue-600 mb-2">{post.author.role}</p>
                  <p className="text-gray-600">{post.author.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts / CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Stay Connected</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't miss out on the latest DevFest Ireland updates and developer insights.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/blog">
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent px-8 py-3"
              >
                Read More Posts
              </Button>
            </Link>
            <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3">Register for DevFest</Button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
