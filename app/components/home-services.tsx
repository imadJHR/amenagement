"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomeServices() {
  const services = [
    {
      title: "Design Intérieur",
      description: "Création d'ambiances uniques",
      icon: "🎨",
      color: "from-blue-500/20 to-blue-600/20",
    },
    {
      title: "Aménagement Complet",
      description: "Transformation totale",
      icon: "✨",
      color: "from-purple-500/20 to-purple-600/20",
    },
    {
      title: "Rénovation",
      description: "Modernisation avec classe",
      icon: "🔨",
      color: "from-amber-500/20 to-amber-600/20",
    },
    {
      title: "Consultation Design",
      description: "Conseils d'experts",
      icon: "💡",
      color: "from-green-500/20 to-green-600/20",
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <p className="text-primary font-medium text-lg tracking-wide uppercase mb-2">Services Principaux</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Nos <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solutions d'aménagement complètes adaptées à vos besoins
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl border border-border overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`bg-gradient-to-br ${service.color} p-6 flex items-center justify-center h-32`}>
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-serif text-xl font-bold text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
          >
            Voir Tous Les Services
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
