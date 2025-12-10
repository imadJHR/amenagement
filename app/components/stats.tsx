"use client"

import { useEffect, useState } from "react"

const stats = [
  { number: 250, suffix: "+", label: "Projets Réalisés" },
  { number: 98, suffix: "%", label: "Satisfaction Client" },
  { number: 12, suffix: "+", label: "Années d'Expérience" },
  { number: 50, suffix: "+", label: "Experts Qualifiés" },
]

export default function Stats() {
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    const timers = stats.map((stat, index) => {
      const increment = stat.number / 30
      let current = 0
      return setInterval(() => {
        current += increment
        if (current >= stat.number) {
          setCounts((prev) => {
            const newCounts = [...prev]
            newCounts[index] = stat.number
            return newCounts
          })
          clearInterval(timers[index])
        } else {
          setCounts((prev) => {
            const newCounts = [...prev]
            newCounts[index] = Math.floor(current)
            return newCounts
          })
        }
      }, 30)
    })

    return () => timers.forEach((timer) => clearInterval(timer))
  }, [])

  return (
    <section className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center animate-fadeInUp" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-2">
                {counts[i]}
                {stat.suffix}
              </div>
              <p className="text-secondary-foreground/70 text-sm sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
