import Navigation from "../components/navigation"
import Footer from "../components/footer"

export const metadata = {
  title: "À Propos - Aménagement Luxe Maroc",
  description:
    "Découvrez notre histoire, notre expertise et notre passion pour la décoration d'intérieur haut de gamme au Maroc. Plus de 10 ans d'expérience dans l'aménagement luxe.",
  keywords:
    "aménagement appartement maroc, décoration intérieur luxe, design intérieur casablanca, expertise décoration",
  openGraph: {
    title: "À Propos - Aménagement Luxe Maroc",
    description: "Découvrez notre histoire et notre expertise en décoration d'intérieur au Maroc",
    type: "website",
  },
}

export default function About() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary/5 to-transparent py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fadeInUp">
              <h1 className="font-serif text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Notre <span className="gradient-text">Histoire</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Depuis plus de 10 ans, nous transformons les espaces en havres de luxe et de bien-être, combinant
                esthétique moderne et fonctionnalité exemplaire.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 lg:py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="animate-slideInRight">
                <img
                  src="/elegant-apartment-design.jpg"
                  alt="Nos réalisations en aménagement luxe"
                  className="rounded-xl shadow-xl object-cover"
                />
              </div>
              <div className="space-y-6 animate-fadeInUp">
                <h2 className="font-serif text-4xl font-bold text-foreground">Fondée sur l'Excellence</h2>
                <div className="space-y-4 text-foreground/80 text-lg leading-relaxed">
                  <p>
                    Aménagement Luxe Maroc est née de la passion pour créer des espaces exceptionnels qui racontent
                    l'histoire de ses habitants. Fondée en 2014, notre entreprise s'est établie comme la référence
                    incontournable du design d'intérieur haut de gamme au Maroc.
                  </p>
                  <p>
                    Notre équipe, composée de designers, architectes et artisans renommés, travaille sans relâche pour
                    transformer chaque projet en chef-d'œuvre. De Casablanca à Marrakech, de Fès à Tanger, nous avons le
                    privilège de créer des appartements luxueux qui dépassent les attentes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-4xl font-bold text-center text-foreground mb-16">
              Nos Valeurs Fondamentales
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Excellence",
                  description: "Chaque projet est traité avec la plus grande attention aux détails et à la qualité.",
                  icon: "✨",
                },
                {
                  title: "Innovation",
                  description: "Nous intégrons les dernières tendances du design luxe avec la technologie moderne.",
                  icon: "🎨",
                },
                {
                  title: "Écoute",
                  description:
                    "Votre vision est au cœur de nos réalisations. Nous écoutons, nous comprenons, nous créons.",
                  icon: "💡",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="group bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 animate-scaleIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 lg:py-24 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-4xl font-bold text-center text-foreground mb-16">Notre Équipe d'Experts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Fatima Al-Zahra", role: "Directrice Design", specialty: "Design d'intérieur" },
                { name: "Mohamed Bennani", role: "Architecte Principal", specialty: "Rénovation et agencement" },
                { name: "Leila Qadi", role: "Spécialiste Matériaux", specialty: "Sourcing et finitions" },
                { name: "Youssef Larbi", role: "Chef de Projet", specialty: "Gestion et livraison" },
              ].map((member, index) => (
                <div
                  key={index}
                  className="text-center animate-fadeInUp"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <img
                    src={`/professional-portrait-.jpg?height=250&width=250&query=professional-portrait-${index}`}
                    alt={member.name}
                    className="w-full aspect-square rounded-lg object-cover mb-4"
                  />
                  <h3 className="font-serif text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.specialty}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 lg:py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "250+", label: "Projets Réalisés" },
                { number: "98%", label: "Clients Satisfaits" },
                { number: "10+", label: "Années d'Expérience" },
                { number: "5", label: "Villes Principales" },
              ].map((stat, index) => (
                <div key={index} className="animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="font-serif text-5xl font-bold gradient-text mb-2">{stat.number}</div>
                  <p className="text-muted-foreground text-lg">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">Prêt à Transformer Votre Espace ?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Contactez-nous aujourd'hui pour discuter de votre projet d'aménagement luxe.
            </p>
            <a
              href="/devis"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-serif font-bold text-lg"
            >
              Demander un Devis Gratuit
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
