"use client"

import type React from "react"

import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { useState } from "react"
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react"

export default function DevisPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    projectType: "",
    roomCount: "",
    budget: "",
    timeline: "",
    description: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
      setIsLoading(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        projectType: "",
        roomCount: "",
        budget: "",
        timeline: "",
        description: "",
      })
    }, 1500)
  }

  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted mt-20">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fadeInUp">
            <p className="text-primary font-medium text-lg tracking-wide uppercase">Votre Projet</p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground">
              Demandez Votre <span className="gradient-text">Devis Gratuit</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Partagez les détails de votre projet et recevez une proposition personnalisée de nos experts
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto">
            {submitted ? (
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary rounded-2xl p-12 text-center space-y-6 animate-scaleIn">
                <div className="flex justify-center">
                  <CheckCircle className="w-16 h-16 text-primary animate-shimmer" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-foreground">Merci pour Votre Demande!</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Nous avons bien reçu votre demande de devis. Notre équipe vous contactera dans les 24 heures pour
                  discuter de votre projet en détail.
                </p>
                <div className="pt-6 space-y-2">
                  <p className="font-semibold text-foreground">Pendant ce temps :</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>✓ Consultez notre portfolio</li>
                    <li>✓ Explorez nos services</li>
                    <li>✓ Suivez-nous sur les réseaux sociaux</li>
                  </ul>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 inline-flex px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
                >
                  Envoyer un Autre Devis
                </button>
              </div>
            ) : (
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Form */}
                <div className="lg:col-span-2 animate-fadeInUp">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-semibold text-foreground">
                          Nom Complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          placeholder="Votre nom"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-foreground">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          placeholder="votre@email.com"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-semibold text-foreground">
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          placeholder="+212 6 XX XX XX XX"
                        />
                      </div>

                      {/* City */}
                      <div className="space-y-2">
                        <label htmlFor="city" className="block text-sm font-semibold text-foreground">
                          Ville *
                        </label>
                        <select
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        >
                          <option value="">Sélectionner une ville</option>
                          <option value="casablanca">Casablanca</option>
                          <option value="fes">Fès</option>
                          <option value="marrakech">Marrakech</option>
                          <option value="agadir">Agadir</option>
                          <option value="tanger">Tanger</option>
                          <option value="rabat">Rabat</option>
                          <option value="meknes">Meknes</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Project Type */}
                      <div className="space-y-2">
                        <label htmlFor="projectType" className="block text-sm font-semibold text-foreground">
                          Type de Projet *
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        >
                          <option value="">Sélectionner un type</option>
                          <option value="design">Design Intérieur</option>
                          <option value="renovation">Rénovation Complète</option>
                          <option value="amenagement">Aménagement Partiel</option>
                          <option value="homestaging">Home Staging</option>
                          <option value="consultation">Consultation</option>
                        </select>
                      </div>

                      {/* Room Count */}
                      <div className="space-y-2">
                        <label htmlFor="roomCount" className="block text-sm font-semibold text-foreground">
                          Nombre de Pièces *
                        </label>
                        <input
                          type="number"
                          id="roomCount"
                          name="roomCount"
                          value={formData.roomCount}
                          onChange={handleChange}
                          min="1"
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          placeholder="ex: 3"
                        />
                      </div>

                      {/* Budget */}
                      <div className="space-y-2">
                        <label htmlFor="budget" className="block text-sm font-semibold text-foreground">
                          Budget Estimé *
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        >
                          <option value="">Sélectionner une gamme</option>
                          <option value="5000-10000">5 000 - 10 000 DH</option>
                          <option value="10000-25000">10 000 - 25 000 DH</option>
                          <option value="25000-50000">25 000 - 50 000 DH</option>
                          <option value="50000-100000">50 000 - 100 000 DH</option>
                          <option value="100000">100 000+ DH</option>
                        </select>
                      </div>

                      {/* Timeline */}
                      <div className="space-y-2">
                        <label htmlFor="timeline" className="block text-sm font-semibold text-foreground">
                          Délai Souhaité *
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        >
                          <option value="">Sélectionner un délai</option>
                          <option value="urgent">Urgent (moins de 1 mois)</option>
                          <option value="1-3">1 à 3 mois</option>
                          <option value="3-6">3 à 6 mois</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <label htmlFor="description" className="block text-sm font-semibold text-foreground">
                        Description du Projet *
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                        placeholder="Décrivez votre projet, vos préférences de style, vos besoins spécifiques..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? "Envoi en cours..." : "Recevoir mon Devis Gratuit"}
                    </button>
                  </form>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1 space-y-6 animate-slideInRight">
                  {/* Info Card */}
                  <div className="bg-muted rounded-xl p-8 space-y-6">
                    <h3 className="font-serif text-2xl font-bold text-foreground">Besoin d'Aide?</h3>

                    {/* Contact Options */}
                    <div className="space-y-4">
                      <a
                        href="tel:+212612345678"
                        className="flex items-center gap-4 p-4 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors group"
                      >
                        <Phone className="text-primary group-hover:scale-110 transition-transform" size={24} />
                        <div>
                          <p className="text-sm text-muted-foreground">Appelez-nous</p>
                          <p className="font-semibold text-foreground">+212 6 12 34 56 78</p>
                        </div>
                      </a>

                      <a
                        href="mailto:contact@amenagementluxe.ma"
                        className="flex items-center gap-4 p-4 bg-accent/10 hover:bg-accent/20 rounded-lg transition-colors group"
                      >
                        <Mail className="text-accent group-hover:scale-110 transition-transform" size={24} />
                        <div>
                          <p className="text-sm text-muted-foreground">Envoyez un email</p>
                          <p className="font-semibold text-foreground">contact@amenagementluxe.ma</p>
                        </div>
                      </a>

                      <div className="flex items-center gap-4 p-4 bg-secondary/10 rounded-lg">
                        <MapPin className="text-secondary" size={24} />
                        <div>
                          <p className="text-sm text-muted-foreground">Visite en Ligne</p>
                          <p className="font-semibold text-foreground">Gratuite & Sans Engagement</p>
                        </div>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="border-t border-border pt-6 space-y-3">
                      <p className="text-sm font-semibold text-foreground">Votre Devis Inclut:</p>
                      {[
                        "Consultation Gratuite",
                        "Analyse Détaillée",
                        "Recommandations Personnalisées",
                        "Estimation de Budget",
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fadeInUp">
              <p className="text-primary font-medium text-lg tracking-wide uppercase mb-4">Questions Fréquentes</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Vos Questions, Nos Réponses</h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Combien coûte un devis?",
                  a: "Notre devis est entièrement gratuit et sans engagement. Vous ne payez que si vous décidez de poursuivre avec nos services.",
                },
                {
                  q: "Quel est le délai de réponse?",
                  a: "Notre équipe vous contactera dans les 24 heures après soumission du formulaire pour discuter de votre projet en détail.",
                },
                {
                  q: "Proposez-vous des services à distance?",
                  a: "Oui! Nous offrons des consultations en ligne via visioconférence pour les clients situés dans d'autres régions.",
                },
                {
                  q: "Couvrez-vous toutes les villes du Maroc?",
                  a: "Nous intervenons principalement à Casablanca, Fès, Marrakech et Rabat. Contactez-nous pour les autres régions.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="bg-card rounded-lg p-6 border border-border hover:border-primary transition-colors animate-fadeInUp"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <p className="font-semibold text-foreground mb-2">{faq.q}</p>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
