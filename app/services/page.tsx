"use client"

import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { useState } from "react"
import { ArrowRight, Check, Building, Home, Truck, Package, Boxes, Shuffle, FileText, Phone } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState<number | null>(null)
  const router = useRouter()

  const services = [
    {
      id: "professionnel",
      title: "Déménagement Professionnel",
      description: "Services complets pour entreprises et commerces",
      icon: <Building className="w-10 h-10" />,
      features: [
        "Déménagement de bureaux",
        "Déménagement commercial",
        "Transfert d'entreprise clé en main",
        "Transport de mobilier professionnel",
        "Transport de matériel informatique",
        "Emballage et protection du matériel",
        "Démontage et remontage du mobilier"
      ],
      price: "Devis Gratuit",
      type: "entreprise"
    },
    {
      id: "particuliers",
      title: "Déménagement Particuliers",
      description: "Solutions pour maisons et appartements",
      icon: <Home className="w-10 h-10" />,
      features: [
        "Déménagement appartement",
        "Déménagement maison",
        "Transport de meubles",
        "Emballage et protection des biens",
        "Démontage et remontage des meubles",
        "Stockage / Garde-meubles",
        "Déménagement courte distance",
        "Déménagement longue distance"
      ],
      price: "Devis Gratuit",
      type: "particulier"
    },
    {
      id: "transport",
      title: "Transport Spécialisé",
      description: "Transport sécurisé pour objets spécifiques",
      icon: <Truck className="w-10 h-10" />,
      features: [
        "Transport de matériel informatique",
        "Transfert d'équipements professionnels",
        "Objets fragiles et précieux",
        "Pianos et instruments",
        "Électroménager",
        "Objets encombrants"
      ],
      price: "Devis Gratuit",
      type: "transport"
    },
    {
      id: "emballage",
      title: "Emballage & Protection",
      description: "Service professionnel d'emballage sécurisé",
      icon: <Package className="w-10 h-10" />,
      features: [
        "Emballage professionnel",
        "Protection des meubles",
        "Emballage objets fragiles",
        "Fournitures incluses",
        "Étiquetage systématique",
        "Inventaire détaillé"
      ],
      price: "Devis Gratuit",
      type: "emballage"
    },
    {
      id: "stockage",
      title: "Stockage & Garde-meubles",
      description: "Solutions de stockage sécurisées",
      icon: <Boxes className="w-10 h-10" />,
      features: [
        "Stockage temporaire",
        "Garde-meubles longue durée",
        "Locaux sécurisés",
        "Climatisation contrôlée",
        "Assurance incluse",
        "Accès flexible"
      ],
      price: "Devis Gratuit",
      type: "stockage"
    },
    {
      id: "cle-en-main",
      title: "Service Clé en Main",
      description: "Prise en charge complète de votre déménagement",
      icon: <Shuffle className="w-10 h-10" />,
      features: [
        "Évaluation sur site",
        "Planification détaillée",
        "Coordination complète",
        "Suivi en temps réel",
        "Installation à l'arrivée",
        "Nettoyage final"
      ],
      price: "Devis Gratuit",
      type: "complet"
    },
  ]

  const handleGetQuote = (serviceId: string, e: React.MouseEvent) => {
    e.stopPropagation() // Empêche l'ouverture/fermeture des détails
    router.push(`/devis?service=${serviceId}`)
  }

  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted mt-20">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fadeInUp">
            <p className="text-primary font-medium text-lg tracking-wide uppercase">Services Professionnels</p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground">
              Services de <span className="gradient-text">Déménagement</span> Complets
            </h1>
            <p className="text-xl text-muted-foreground">
              Solutions professionnelles pour particuliers et entreprises - Transfert sécurisé de vos biens
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
                  className="group bg-card rounded-xl border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate-fadeInUp transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-8 space-y-4">
                    {/* Icon */}
                    <div className="text-primary p-3 rounded-full bg-primary/10 w-fit">
                      {service.icon}
                    </div>

                    {/* Badge */}
                    <div className="inline-block">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        service.type === "entreprise" 
                          ? "bg-blue-100 text-blue-800" 
                          : service.type === "particulier"
                          ? "bg-green-100 text-green-800"
                          : "bg-purple-100 text-purple-800"
                      }`}>
                        {service.type === "entreprise" ? "Entreprise" : 
                         service.type === "particulier" ? "Particulier" : 
                         "Tous clients"}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-2xl font-bold text-foreground">{service.title}</h3>

                    {/* Description */}
                    <p className="text-muted-foreground">{service.description}</p>

                    {/* Expand/Collapse Toggle */}
                    <div 
                      className="cursor-pointer"
                      onClick={() => setExpandedService(expandedService === index ? null : index)}
                    >
                      {/* Features */}
                      <div
                        className={`space-y-2 transition-all duration-300 ${expandedService === index ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 overflow-hidden"}`}
                      >
                        <p className="text-sm font-medium text-foreground mb-2">Inclus dans ce service :</p>
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                            <Check size={16} className="text-primary" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Expand/Collapse Indicator */}
                      <div className="border-t border-border pt-4 flex items-center justify-between">
                        <span className="font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {service.price}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">
                            {expandedService === index ? "Moins" : "Plus"} de détails
                          </span>
                          <ArrowRight
                            className={`transition-transform duration-300 ${expandedService === index ? "rotate-90" : ""}`}
                            size={20}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Get Quote Button */}
                    <button
                      onClick={(e) => handleGetQuote(service.id, e)}
                      className="w-full mt-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <FileText size={18} />
                      Demander un Devis
                    </button>
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
                  title: "Devis Gratuit",
                  description: "Évaluation sur site ou estimation en ligne, devis détaillé sans engagement",
                },
                {
                  step: 2,
                  title: "Planification",
                  description: "Calendrier personnalisé, préparation des équipements et équipes",
                },
                {
                  step: 3,
                  title: "Préparation & Emballage",
                  description: "Emballage professionnel, protection des biens, inventaire complet",
                },
                { 
                  step: 4, 
                  title: "Chargement & Transport", 
                  description: "Manutention sécurisée, transport assuré, suivi en direct" 
                },
                {
                  step: 5,
                  title: "Livraison & Installation",
                  description: "Déchargement soigneux, installation selon vos instructions, nettoyage",
                },
                {
                  step: 6,
                  title: "Suivi & Satisfaction",
                  description: "Vérification de satisfaction, garantie de service, support post-déménagement",
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

            {/* Process CTA */}
            <div className="mt-16 text-center animate-fadeInUp">
              <Link
                href="/devis"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Commencer Votre Projet
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Services Comparison */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fadeInUp">
              <p className="text-primary font-medium text-lg tracking-wide uppercase mb-4">Solutions Adaptées</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Services par Type de Client</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Particuliers */}
              <div className="bg-card rounded-xl border border-border p-8 animate-fadeInUp">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-green-100">
                    <Home className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">Pour les Particuliers</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Studio, appartement ou maison",
                    "De 30 m² à plus de 120 m²",
                    "Services adaptés à chaque surface",
                    "Options stockage flexible",
                    "Gestion des contraintes (étage, ascenseur)",
                    "Prise en charge objets spéciaux"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check size={18} className="text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-2">Surface typique :</p>
                  <div className="grid grid-cols-3 gap-2">
                    {["< 30 m²", "30-50 m²", "50-80 m²", "80-120 m²", "120-200 m²", "> 200 m²"].map((size, idx) => (
                      <div key={idx} className="text-center p-2 bg-muted rounded-lg text-sm">
                        {size}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    href="/devis?service=particuliers"
                    className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FileText size={18} />
                    Devis pour Particuliers
                  </Link>
                </div>
              </div>

              {/* Entreprises */}
              <div className="bg-card rounded-xl border border-border p-8 animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-blue-100">
                    <Building className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">Pour les Entreprises</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Bureaux, commerces, entrepôts",
                    "De 50 m² à plus de 200 m²",
                    "Transfert clé en main",
                    "Continuité d'activité garantie",
                    "Matériel informatique sécurisé",
                    "Coordination complète"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check size={18} className="text-blue-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-2">Type d'entreprise :</p>
                  <div className="grid grid-cols-2 gap-2">
                    {["Bureau", "Commerce", "Entrepôt", "Autre"].map((type, idx) => (
                      <div key={idx} className="text-center p-2 bg-muted rounded-lg text-sm">
                        {type}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    href="/devis?service=professionnel"
                    className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FileText size={18} />
                    Devis pour Entreprises
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fadeInUp">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground">
              Prêt à Déménager?
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Demandez votre devis gratuit dès maintenant et bénéficiez d'une évaluation personnalisée
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/devis"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-foreground text-primary rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <FileText className="mr-2" size={20} />
                Obtenir un Devis Gratuit
              </Link>
              <a
                href="tel:+212612345678"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-foreground text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/10 transition-all duration-300"
              >
                <Phone className="mr-2" size={20} />
                Appelez-nous
              </a>
            </div>
            <p className="text-sm text-primary-foreground/80 mt-4">
              Réponse sous 24h • Devis détaillé • Sans engagement • Pour tous nos services
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}