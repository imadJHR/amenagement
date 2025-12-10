"use client"

export default function WorkProcess() {
  const steps = [
    {
      step: 1,
      title: "Consultation Initiale",
      description: "Rencontre pour comprendre vos besoins et votre vision",
      icon: "📋",
    },
    {
      step: 2,
      title: "Analyse & Concept",
      description: "Étude détaillée avec propositions créatives et rendus 3D",
      icon: "🎨",
    },
    {
      step: 3,
      title: "Planification",
      description: "Établissement du budget, calendrier et sélection des matériaux",
      icon: "📐",
    },
    {
      step: 4,
      title: "Réalisation",
      description: "Exécution professionnelle avec supervision complète",
      icon: "🔧",
    },
    {
      step: 5,
      title: "Finition & Suivi",
      description: "Derniers ajustements et accompagnement post-projet",
      icon: "✨",
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <p className="text-primary font-medium text-lg tracking-wide uppercase mb-2">Notre Approche</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Processus de <span className="gradient-text">Travail</span>
          </h2>
          <p className="text-lg text-muted-foreground">Une méthode éprouvée pour vos succès</p>
        </div>

        <div className="space-y-8">
          {steps.map((item, index) => (
            <div key={index} className="animate-slideInRight" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex gap-6 sm:gap-8">
                {/* Left side - Step number and icon */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif font-bold text-2xl sm:text-3xl border-4 border-primary/20">
                    {item.step}
                  </div>
                  {index !== steps.length - 1 && (
                    <div className="w-1 h-12 sm:h-16 bg-gradient-to-b from-primary to-primary/20 my-2"></div>
                  )}
                </div>

                {/* Right side - Content */}
                <div className="pt-2 pb-4 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl sm:text-4xl">{item.icon}</span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
