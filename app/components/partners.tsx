"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Partner {
  id: number
  name: string
  logo: string
  description: string
}

const partners: Partner[] = [
  {
    id: 1,
    name: "Leroy Merlin",
    logo: "🏢",
    description: "Matériaux de construction premium",
  },
  {
    id: 2,
    name: "IKEA",
    logo: "🛋️",
    description: "Mobilier design moderne",
  },
  {
    id: 3,
    name: "Decathlon Home",
    logo: "🏠",
    description: "Articles de décoration",
  },
  {
    id: 4,
    name: "Artemide",
    logo: "💡",
    description: "Éclairage premium",
  },
  {
    id: 5,
    name: "Roche Bobois",
    logo: "✨",
    description: "Meubles haut de gamme",
  },
  {
    id: 6,
    name: "B&B Italia",
    logo: "🎨",
    description: "Design contemporain",
  },
]

export default function Partners() {
  const [current, setCurrent] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, partners.length - itemsPerView)

  const goNext = () => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const goPrev = () => {
    setCurrent((prev) => (prev === 0 ? maxIndex : prev - 1))
  }

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-transparent to-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Nos Partenaires de Confiance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous collaborons avec les meilleures marques pour offrir des solutions de décoration exceptionnelles
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Partners Grid */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${current * (100 / itemsPerView)}%)`,
              }}
            >
              {partners.map((partner, index) => (
                <div
                  key={partner.id}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
                  style={{
                    animation: `slideUp 0.6s ease-out`,
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: "both",
                  }}
                >
                  <div className="bg-white dark:bg-card rounded-xl p-8 h-full border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer group">
                    {/* Logo */}
                    <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {partner.logo}
                    </div>

                    {/* Name */}
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {partner.name}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed">{partner.description}</p>

                    {/* Accent Line */}
                    <div className="h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4 w-0 group-hover:w-full transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-10 z-10 bg-primary hover:bg-secondary text-white rounded-full p-3 transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Partenaire précédent"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-10 z-10 bg-primary hover:bg-secondary text-white rounded-full p-3 transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Partenaire suivant"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current ? "bg-primary w-8" : "bg-border hover:bg-muted-foreground w-2"
                }`}
                aria-label={`Aller au groupe ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
