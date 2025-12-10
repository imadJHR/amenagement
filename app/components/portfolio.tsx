"use client"

import { useState } from "react"

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projects = [
    {
      title: "Penthouse Casablanca",
      category: "Résidentiel Premium",
      description: "Suite parentale luxueuse avec vue panoramique",
      image: "luxury penthouse interior casablanca",
    },
    {
      title: "Riad Marrakech Moderne",
      category: "Riad Contemporain",
      description: "Fusion tradition et modernité dans un riad classique",
      image: "modern traditional riad marrakech interior",
    },
    {
      title: "Appartement Fès Épuré",
      category: "Design Minimaliste",
      description: "Espace lumineux et fonctionnel avec matériaux nobles",
      image: "minimalist apartment interior design fes",
    },
    {
      title: "Villa Agadir Côtière",
      category: "Style Côtier Luxe",
      description: "Intérieur inspié par la mer et le soleil",
      image: "coastal luxury villa interior agadir",
    },
    {
      title: "Loft Tanger Industriel",
      category: "Loft Créatif",
      description: "Espace ouvert avec accents industriels élégants",
      image: "industrial loft interior design tanger",
    },
    {
      title: "Maison Rabat Familiale",
      category: "Résidentiel Spacieux",
      description: "Ambiance chaleureuse pour toute la famille",
      image: "family home interior design rabat",
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <p className="text-primary font-medium text-lg tracking-wide uppercase mb-4">Notre Portfolio</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Réalisations Exceptionnelles
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez une sélection de nos projets à travers le Maroc
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg transform group-hover:shadow-2xl transition-all duration-300">
                {/* Image */}
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('/abstract-geometric-shapes.png')`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div
                    className={`transition-all duration-300 ${hoveredIndex === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                  >
                    <p className="text-primary text-sm font-medium mb-2">{project.category}</p>
                    <h3 className="font-serif text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-100 text-sm">{project.description}</p>
                  </div>
                </div>

                {/* Static Content */}
                <div
                  className={`absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300 ${hoveredIndex === index ? "opacity-0" : "opacity-100"}`}
                >
                  <h3 className="font-serif text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
