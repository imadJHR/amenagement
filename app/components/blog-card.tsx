import Link from "next/link"
import { ArrowRight, Clock, User, Tag } from "lucide-react"

interface BlogCardProps {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  readTime: number
  image: string
  index?: number
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  date,
  author,
  category,
  readTime,
  image,
  index = 0,
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <Link href={`/blog/${slug}`}>
      <article
        className="group bg-card rounded-xl border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col hover:-translate-y-2 animate-fadeInUp cursor-pointer"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {/* Image */}
        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-muted">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="flex-1 p-6 sm:p-8 flex flex-col">
          {/* Meta */}
          <div className="flex flex-wrap gap-3 mb-4 text-xs sm:text-sm">
            <span className="inline-flex items-center gap-1 text-primary font-medium">
              <Tag size={14} />
              {category}
            </span>
            <span className="inline-flex items-center gap-1 text-muted-foreground">
              <Clock size={14} />
              {readTime} min
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-muted-foreground text-sm sm:text-base mb-6 flex-1 line-clamp-3">{excerpt}</p>

          {/* Footer */}
          <div className="border-t border-border pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-col gap-1">
              <div className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <User size={14} />
                <span>{author}</span>
              </div>
              <span className="text-xs text-muted-foreground">{formattedDate}</span>
            </div>
            <ArrowRight className="text-primary group-hover:translate-x-2 transition-transform duration-300 w-5 h-5" />
          </div>
        </div>
      </article>
    </Link>
  )
}
