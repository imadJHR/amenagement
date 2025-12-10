"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-secondary to-primary">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeInUp">
        <div className="space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground">
            Prêt à Transformer Votre Espace ?
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Obtenez une consultation gratuite et un devis personnalisé pour votre projet d'aménagement
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link
            href="/devis"
            className="group inline-flex items-center justify-center px-8 py-4 bg-primary-foreground text-primary rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Commencer Maintenant
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
          <Link
            href="tel:+212612345678"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-foreground text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/10 transition-all duration-300"
          >
            Nous Appeler
          </Link>
        </div>
      </div>
    </section>
  )
}
