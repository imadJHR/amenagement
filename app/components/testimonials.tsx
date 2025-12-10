"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Fatima Al-Mansouri",
    role: "Cliente",
    text: "Un travail magnifique! L'équipe a transformé mon appartement en un véritable paradis. Très professionnel et à l'écoute.",
    rating: 5,
    city: "Casablanca",
  },
  {
    name: "Ahmed Bennani",
    role: "Entrepreneur",
    text: "Excellent service avec une attention remarquable aux détails. Je recommande vivement Aménagement Luxe Maroc!",
    rating: 5,
    city: "Rabat",
  },
  {
    name: "Nadia El-Kadi",
    role: "Architecte",
    text: "Leur créativité et leur professionnalisme sont exceptionnels. Un partenaire idéal pour tous les projets d'aménagement.",
    rating: 5,
    city: "Marrakech",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 text-balance">
            Témoignages de Nos Clients
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Découvrez ce que nos clients satisfaits disent de nos services
          </p>
        </div>

        <div className="relative">
          <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 shadow-lg animate-scaleIn">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="flex gap-1">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={24} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg sm:text-xl text-foreground italic">"{testimonials[current].text}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonials[current].name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[current].role} • {testimonials[current].city}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-primary" />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-primary" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-primary w-8" : "bg-muted"}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
