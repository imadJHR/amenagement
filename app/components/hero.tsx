"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen md:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted to-background pt-16 md:pt-0">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 md:top-20 right-5 md:right-10 w-40 md:w-72 h-40 md:h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-10 md:bottom-20 left-5 md:left-10 w-40 md:w-72 h-40 md:h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-6 md:space-y-8 ${isLoaded ? "animate-fadeInUp" : "opacity-0"}`}>
            <div className="space-y-3 md:space-y-4">
              <p className="text-primary font-medium text-base md:text-lg tracking-wide uppercase">
                Transformation Intérieure
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Votre <span className="gradient-text">Rêve</span> Devient Réalité
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Créez des espaces exceptionnels qui reflètent votre style unique. Nos experts en aménagement intérieur
                transforment vos appartements en lieux de vie extraordinaires.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
              <Link
                href="/devis"
                className="group inline-flex items-center justify-center px-6 md:px-8 py-2.5 md:py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-sm md:text-base hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Demander un Devis
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 md:px-8 py-2.5 md:py-3 border-2 border-primary text-primary rounded-lg font-semibold text-sm md:text-base hover:bg-primary/5 transition-all duration-300"
              >
                Voir nos Services
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-border">
              {[
                { number: "500+", label: "Projets Réalisés" },
                { number: "150+", label: "Clients Satisfaits" },
                { number: "15+", label: "Années Expérience" },
              ].map((stat, i) => (
                <div key={i} className="animate-scaleIn" style={{ animationDelay: `${i * 0.1}s` }}>
                  <p className="font-serif text-2xl md:text-3xl font-bold text-primary">{stat.number}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Content */}
          <div className={`relative hidden md:block ${isLoaded ? "animate-slideInRight" : "opacity-0"}`}>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20"
                style={{
                  backgroundImage: `url('/luxury-apartment-interior-design-modern-elegant.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Decorative Card */}
            <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 animate-slideUp">
              <p className="font-serif text-lg font-bold">Design Moderne</p>
              <p className="text-sm opacity-90">Luxe & Créativité</p>
            </div>
          </div>

          {/* Mobile Image */}
          <div
            className={`md:hidden relative ${isLoaded ? "animate-fadeInUp" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
              <div
                className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20"
                style={{
                  backgroundImage: `url('/luxury-apartment-interior-design-modern-elegant.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
