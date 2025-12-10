"use client"

import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  const services = [
    {
      title: "Design Intérieur",
      description: "Création d'ambiances uniques et personnalisées",
      icon: "🎨",
      features: ["Concept 3D", "Palette Couleurs", "Choix Mobilier", "Agencement Optimal"],
      price: "À partir de 500 DH",
    },
    {
      title: "Aménagement Complet",
      description: "Transformation totale de votre espace",
      icon: "✨",
      features: ["Design Complet", "Sélection Mobilier", "Installation", "Suivi Post-Projet"],
      price: "Devis Personnalisé",
    },
    {
      title: "Rénovation",
      description: "Modernisez votre appartement avec classe",
      icon: "🔨",
      features: ["Diagnostic Espace", "Travaux Coordination", "Suivi Budget", "Qualité Garantie"],
      price: "À partir de 1000 DH/m²",
    },
    {
      title: "Consultation Design",
      description: "Conseils d'expert pour vos projets",
      icon: "💡",
      features: ["Visite Sur Site", "Recommandations", "Plans 3D", "Rapport Détaillé"],
      price: "À partir de 250 DH",
    },
    {
      title: "Sélection Mobilier",
      description: "Choix de pièces adaptées à votre style",
      icon: "🛋️",
      features: ["Sourcing Premium", "Comparaison", "Importation", "Installation"],
      price: "Tarifs Négociés",
    },
    {
      title: "Home Staging",
      description: "Valorisez votre bien pour la vente",
      icon: "🏠",
      features: ["Évaluation", "Mise en Scène", "Photographie", "Marketing Immobilier"],
      price: "À partir de 300 DH",
    },
  ]

  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted mt-20">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fadeInUp">
            <p className="text-primary font-medium text-lg tracking-wide uppercase">Services Professionnels</p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground">
              Solutions <span className="gradient-text">Complètes</span> d'Aménagement
            </h1>
            <p className="text-xl text-muted-foreground">
              Explorez nos services spécialisés pour transformer vos espaces en lieux de vie exceptionnels
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-xl border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer animate-fadeInUp transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setExpandedService(expandedService === index ? null : index)}
                >
                  <div className="p-8 space-y-4">
                    {/* Icon */}
                    <div className="text-5xl">{service.icon}</div>

                    {/* Title */}
                    <h3 className="font-serif text-2xl font-bold text-foreground">{service.title}</h3>

                    {/* Description */}
                    <p className="text-muted-foreground">{service.description}</p>

                    {/* Features */}
                    <div
                      className={`space-y-2 transition-all duration-300 ${expandedService === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
                    >
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                          <Check size={16} className="text-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="border-t border-border pt-4 flex items-center justify-between">
                      <span className="font-semibold text-primary">{service.price}</span>
                      <ArrowRight
                        className={`transition-transform duration-300 ${expandedService === index ? "rotate-90" : ""}`}
                        size={20}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fadeInUp">
              <p className="text-primary font-medium text-lg tracking-wide uppercase mb-4">Notre Processus</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Comment Ça Fonctionne</h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "Consultation Initiale",
                  description: "Rencontre pour comprendre vos besoins et votre vision",
                },
                {
                  step: 2,
                  title: "Analyse & Design",
                  description: "Étude détaillée avec propositions créatives et 3D",
                },
                {
                  step: 3,
                  title: "Planification",
                  description: "Établissement du budget, calendrier et sélection matériaux",
                },
                { step: 4, title: "Réalisation", description: "Exécution professionnelle et supervision complète" },
                {
                  step: 5,
                  title: "Finition & Suivi",
                  description: "Derniers ajustements et accompagnement post-projet",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6 animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif font-bold text-xl">
                      {item.step}
                    </div>
                  </div>
                  <div className="pt-1">
                    <h3 className="font-bold text-lg text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fadeInUp">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground">
              Démarrez Votre Projet Aujourd'hui
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Consultez nos experts gratuitement et recevez un devis personnalisé
            </p>
            <Link
              href="/devis"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-foreground text-primary rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
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
