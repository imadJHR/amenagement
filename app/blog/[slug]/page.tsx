import Navigation from "../../components/navigation"
import Footer from "../../components/footer"
import { blogPosts } from "../../lib/blog-data"
import Link from "next/link"
import { ArrowLeft, Clock, User, Tag, Share2 } from "lucide-react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: "Article non trouvé",
    }
  }

  return {
    title: `${post.title} | Blog Aménagement`,
    description: post.excerpt,
    keywords: `${post.category}, design intérieur, aménagement, Maroc`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://amenagement-luxe-maroc.ma/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3)

  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted mt-20">
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 animate-fadeInUp">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
            >
              <ArrowLeft size={18} />
              Retour aux articles
            </Link>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-primary font-medium">
                <Tag size={16} />
                <span>{post.category}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                {post.title}
              </h1>

              <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{post.readTime} min de lecture</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image */}
        <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-background">
          <div className="max-w-4xl mx-auto">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-64 sm:h-96 md:h-[500px] object-cover rounded-xl shadow-2xl animate-fadeInUp"
            />
          </div>
        </section>

        {/* Content */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-foreground animate-fadeInUp">
              {post.content.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("##")) {
                  return (
                    <h2
                      key={index}
                      className="font-serif text-2xl sm:text-3xl font-bold text-foreground mt-8 mb-4 pt-6 border-t border-border"
                    >
                      {paragraph.replace("## ", "")}
                    </h2>
                  )
                }
                if (paragraph.startsWith("-")) {
                  const items = paragraph
                    .split("\n")
                    .filter((item) => item.startsWith("-"))
                    .map((item) => item.replace("- ", ""))

                  return (
                    <ul key={index} className="space-y-2 my-4 ml-4">
                      {items.map((item, i) => (
                        <li key={i} className="list-disc text-base sm:text-lg leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )
                }
                return (
                  <p key={index} className="text-base sm:text-lg leading-relaxed mb-4 text-muted-foreground">
                    {paragraph}
                  </p>
                )
              })}
            </div>

            {/* Share Buttons */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="font-semibold text-foreground">Partager:</span>
                <button className="p-2 hover:bg-muted rounded-lg transition-colors duration-300">
                  <Share2 size={20} className="text-primary" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12 text-center animate-fadeInUp">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">Articles Similaires</h2>
                <p className="text-muted-foreground">Découvrez d'autres articles intéressants</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="group bg-card rounded-xl border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative h-40 sm:h-48 overflow-hidden bg-muted">
                      <img
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-4 sm:p-6">
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2 mb-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">{relatedPost.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 animate-fadeInUp">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground">
              Inspiré? Commençons Votre Projet
            </h2>
            <p className="text-base sm:text-lg text-primary-foreground/90">
              Parlons de vos idées et transformons votre espace en réalité
            </p>
            <Link
              href="/devis"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-primary-foreground text-primary rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Demander un Devis
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
