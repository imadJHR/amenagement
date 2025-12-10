"use client"

import BlogCard from "../components/blog-card"
import { blogPosts } from "../lib/blog-data"
import Link from "next/link"

export default function FeaturedBlog() {
  const featuredPosts = blogPosts.slice(0, 5)

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center animate-fadeIn">
          <p className="text-primary font-semibold text-sm sm:text-base uppercase tracking-wider mb-3">
            Articles et Conseils
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Nos Guides d'Aménagement
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Découvrez les meilleures pratiques et conseils pour transformer votre appartement en un espace magnifique et
            fonctionnel.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <div key={post.id} className="animate-slideInUp" style={{ animationDelay: `${index * 0.1}s` }}>
              <BlogCard
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                author={post.author}
                category={post.category}
                readTime={post.readTime}
                image={post.image}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center animate-fadeIn" style={{ animationDelay: "0.5s" }}>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 font-semibold"
          >
            Lire Tous nos Articles
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
