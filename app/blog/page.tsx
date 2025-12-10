import Navigation from "../components/navigation"
import Footer from "../components/footer"
import BlogCard from "../components/blog-card"
import { blogPosts } from "../lib/blog-data"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog Aménagement | Articles de Design Intérieur Maroc",
  description:
    "Découvrez nos articles sur les tendances design, astuces aménagement et conseils décoration pour votre appartement au Maroc.",
  keywords: "blog design intérieur, conseils aménagement, tendances décoration, Maroc, style bohème, luxe",
}

const categories = ["Tous", "Tendances", "Conseils", "Guides", "Styles"]

export default function BlogPage() {
  return (
    <>
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted mt-20">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 animate-fadeInUp">
            <p className="text-primary font-medium text-sm sm:text-lg tracking-wide uppercase">Notre Blog</p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground">
              Inspiration & <span className="gradient-text">Conseils</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Découvrez nos derniers articles sur le design intérieur, les tendances et astuces d'aménagement
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {blogPosts.map((post, index) => (
                <BlogCard key={post.id} {...post} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 animate-fadeInUp">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                Prêt à Transformer Votre Espace?
              </h2>
              <p className="text-lg text-muted-foreground">
                Consultez nos experts et recevez un devis personnalisé basé sur vos rêves
              </p>
            </div>
            <Link
              href="/devis"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Demander une Consultation
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
