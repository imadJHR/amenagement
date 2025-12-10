"use client"

export default function Certifications() {
  const certifications = [
    {
      title: "Certifiée Design",
      description: "Experts en design intérieur",
      icon: "🏆",
    },
    {
      title: "15+ Ans Expérience",
      description: "Expertise reconnue",
      icon: "⭐",
    },
    {
      title: "Projets Validés",
      description: "+250 appartements rénovés",
      icon: "✓",
    },
    {
      title: "Garantie Qualité",
      description: "Satisfaction 100%",
      icon: "✅",
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <p className="text-primary font-medium text-lg tracking-wide uppercase mb-2">Partenaires & Certifications</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Confiance et <span className="gradient-text">Expertise</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group text-center animate-fadeInUp hover:scale-105 transition-transform duration-300 bg-background rounded-xl p-6 border border-border/50 hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-6xl mb-4 transform group-hover:rotate-12 transition-transform duration-300">
                {cert.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">{cert.title}</h3>
              <p className="text-muted-foreground text-sm">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
