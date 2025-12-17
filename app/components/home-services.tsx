"use client"

import { ArrowRight, Building, Home, Truck, Package, Boxes, Shuffle } from "lucide-react"
import Link from "next/link"

export default function HomeServices() {
  const services = [
    {
      id: "professionnel",
      title: "Déménagement Professionnel",
      description: "Services pour entreprises et commerces",
      icon: <Building className="w-8 h-8" />,
      color: "from-blue-500/20 to-blue-600/20",
      badge: "Entreprise",
      badgeColor: "bg-blue-100 text-blue-800",
    },
    {
      id: "particuliers",
      title: "Déménagement Particuliers",
      description: "Solutions pour maisons et appartements",
      icon: <Home className="w-8 h-8" />,
      color: "from-green-500/20 to-green-600/20",
      badge: "Particulier",
      badgeColor: "bg-green-100 text-green-800",
    },
    {
      id: "transport",
      title: "Transport Spécialisé",
      description: "Transport sécurisé d'objets spécifiques",
      icon: <Truck className="w-8 h-8" />,
      color: "from-purple-500/20 to-purple-600/20",
      badge: "Tous clients",
      badgeColor: "bg-purple-100 text-purple-800",
    },
    {
      id: "emballage",
      title: "Emballage & Protection",
      description: "Service professionnel d'emballage",
      icon: <Package className="w-8 h-8" />,
      color: "from-amber-500/20 to-amber-600/20",
      badge: "Tous clients",
      badgeColor: "bg-amber-100 text-amber-800",
    },
  ]

  const otherServices = [
    {
      id: "stockage",
      title: "Stockage & Garde-meubles",
      icon: <Boxes className="w-6 h-6" />,
    },
    {
      id: "cle-en-main",
      title: "Service Clé en Main",
      icon: <Shuffle className="w-6 h-6" />,
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <p className="text-primary font-medium text-lg tracking-wide uppercase mb-2">Services Principaux</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Nos <span className="gradient-text">Services de Déménagement</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solutions complètes et professionnelles pour tous vos besoins de déménagement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Link
              key={index}
              href={`/devis?service=${service.id}`}
              className="group block bg-card rounded-xl border border-border overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`bg-gradient-to-br ${service.color} p-6 flex items-center justify-center h-32 relative`}>
                <div className="text-primary p-3 rounded-full bg-white/20 backdrop-blur-sm">
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${service.badgeColor}`}>
                    {service.badge}
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
                <div className="pt-2">
                  <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    Demander un devis
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:ml-2 transition-all" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mb-12 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
          <h3 className="font-serif text-2xl font-bold text-foreground text-center mb-8">
            Services Complémentaires
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {otherServices.map((service, index) => (
              <Link
                key={index}
                href={`/devis?service=${service.id}`}
                className="group flex items-center gap-3 px-6 py-3 bg-muted rounded-lg hover:bg-primary/10 hover:shadow-md transition-all duration-300"
              >
                <div className="text-primary">
                  {service.icon}
                </div>
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { value: "500+", label: "Projets Réalisés" },
            { value: "24h", label: "Délai de Réponse" },
            { value: "100%", label: "Satisfaction Client" },
            { value: "0 DH", label: "Devis Gratuit" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border text-center animate-fadeInUp"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <div className="font-serif text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-8">
          <div className="animate-fadeInUp" style={{ animationDelay: "0.9s" }}>
            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Découvrir Tous Nos Services
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="text-sm text-muted-foreground animate-fadeInUp" style={{ animationDelay: "1s" }}>
            <Link href="/devis" className="text-primary hover:underline font-medium">
              Demandez votre devis gratuit
            </Link>
            {" "}et obtenez une réponse sous 24h
          </p>
        </div>
      </div>
    </section>
  )
}