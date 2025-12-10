"use client"

import type React from "react"

import { Check } from "lucide-react"

interface WhyChooseUsItem {
  title: string
  description: string
  icon: React.ReactNode
}

export default function WhyChooseUs() {
  const reasons: WhyChooseUsItem[] = [
    {
      title: "Expertise & Expérience",
      description: "Plus de 15 ans d'expérience dans l'aménagement d'appartements de luxe au Maroc",
      icon: (
        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
          <Check className="w-6 h-6 text-primary" />
        </div>
      ),
    },
    {
      title: "Design Personnalisé",
      description: "Chaque projet est unique. Nous créons des solutions adaptées à votre style et vos besoins",
      icon: (
        <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center">
          <Check className="w-6 h-6 text-accent" />
        </div>
      ),
    },
    {
      title: "Qualité Premium",
      description: "Matériaux haut de gamme et finitions impeccables pour un résultat durable",
      icon: (
        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
          <Check className="w-6 h-6 text-primary" />
        </div>
      ),
    },
    {
      title: "Respect des Délais",
      description: "Livraison à temps avec un suivi rigoureux de chaque étape du projet",
      icon: (
        <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center">
          <Check className="w-6 h-6 text-accent" />
        </div>
      ),
    },
    {
      title: "Service Client 24/7",
      description: "Équipe disponible pour répondre à vos questions avant, pendant et après le projet",
      icon: (
        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
          <Check className="w-6 h-6 text-primary" />
        </div>
      ),
    },
    {
      title: "Tarifs Compétitifs",
      description: "Meilleur rapport qualité-prix du marché marocain avec transparence totale",
      icon: (
        <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center">
          <Check className="w-6 h-6 text-accent" />
        </div>
      ),
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4 animate-slideInDown">
            Pourquoi nous choisir ?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto animate-fadeInUp"
            style={{ animationDelay: "0.1s" }}
          >
            Découvrez les raisons pour lesquelles nos clients nous font confiance pour transformer leurs espaces de vie
          </p>
        </div>

        {/* Grid of reasons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:border-primary/50 animate-slideInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110">{reason.icon}</div>

              {/* Title */}
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{reason.description}</p>

              {/* Bottom accent line */}
              <div className="mt-4 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-muted-foreground mb-4 animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
            Prêt à transformer votre appartement ?
          </p>
          <a
            href="/devis"
            className="inline-block bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-slideInUp"
            style={{ animationDelay: "0.7s" }}
          >
            Demander un devis gratuit
          </a>
        </div>
      </div>
    </section>
  )
}
