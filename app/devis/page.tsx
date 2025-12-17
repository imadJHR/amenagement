"use client"

import type React from "react"
import { Suspense } from "react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { useState } from "react"
import { Mail, Phone, MapPin, CheckCircle, Building, Home, Truck, Package, Boxes, Shuffle, FileText } from "lucide-react"
import Link from "next/link"

// Composant principal qui utilise useSearchParams
function DevisContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    serviceType: "",
    propertyType: "",
    surface: "",
    budget: "",
    timeline: "",
    description: "",
    isProfessional: "particulier",
    companyName: "",
    contactPerson: "",
    storageDuration: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isProfessional, setIsProfessional] = useState(false)

  const services = [
    {
      id: "professionnel",
      title: "Déménagement Professionnel",
      icon: <Building className="w-6 h-6" />,
    },
    {
      id: "particuliers",
      title: "Déménagement Particuliers",
      icon: <Home className="w-6 h-6" />,
    },
    {
      id: "transport",
      title: "Transport Spécialisé",
      icon: <Truck className="w-6 h-6" />,
    },
    {
      id: "emballage",
      title: "Emballage & Protection",
      icon: <Package className="w-6 h-6" />,
    },
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (name === "isProfessional") {
      setIsProfessional(value === "entreprise")
    }
  }

  const handleServiceSelect = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      serviceType: serviceId
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
      setIsLoading(false)
      // Reset form but keep service type
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        serviceType: formData.serviceType,
        propertyType: "",
        surface: "",
        budget: "",
        timeline: "",
        description: "",
        isProfessional: "particulier",
        companyName: "",
        contactPerson: "",
        storageDuration: "",
      })
      setIsProfessional(false)
    }, 1500)
  }

  const selectedServiceInfo = services.find(s => s.id === formData.serviceType)

  return (
    <main>
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted mt-20">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fadeInUp">
          <p className="text-primary font-medium text-lg tracking-wide uppercase">Votre Devis Gratuit</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground">
            Demandez Votre <span className="gradient-text">Devis Déménagement</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Partagez les détails de votre projet de déménagement et recevez une proposition personnalisée
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          {submitted ? (
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary rounded-2xl p-12 text-center space-y-6 animate-scaleIn">
              <div className="flex justify-center">
                <CheckCircle className="w-16 h-16 text-primary animate-shimmer" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-foreground">Merci pour Votre Demande!</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nous avons bien reçu votre demande de devis. Notre équipe vous contactera dans les 24 heures pour discuter de votre projet en détail.
              </p>
              <div className="pt-6 space-y-2">
                <p className="font-semibold text-foreground">Pendant ce temps :</p>
                <ul className="text-muted-foreground space-y-1">
                  <li>✓ Consultez notre page de services</li>
                  <li>✓ Explorez notre processus de déménagement</li>
                  <li>✓ Préparez vos questions pour notre appel</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <button
                  onClick={() => setSubmitted(false)}
                  className="inline-flex px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
                >
                  Envoyer un Autre Devis
                </button>
                <Link
                  href="/services"
                  className="inline-flex px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors duration-300"
                >
                  Voir Tous Nos Services
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2 space-y-8 animate-fadeInUp">
                {/* Services Selection */}
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">1. Sélectionnez Votre Service</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => handleServiceSelect(service.id)}
                        className={`p-4 rounded-lg border-2 transition-all duration-300 flex flex-col items-center gap-2 ${
                          formData.serviceType === service.id
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border hover:border-primary/50 hover:bg-primary/5"
                        }`}
                      >
                        {service.icon}
                        <span className="text-sm font-medium text-center">{service.title}</span>
                      </button>
                    ))}
                  </div>
                  {formData.serviceType && (
                    <div className="mt-4 p-3 bg-primary/5 rounded-lg border border-primary/20">
                      <p className="text-sm text-foreground">
                        <span className="font-semibold">Service sélectionné:</span> {services.find(s => s.id === formData.serviceType)?.title}
                      </p>
                    </div>
                  )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Client Type */}
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-4">2. Type de Client</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => {
                          setIsProfessional(false)
                          setFormData(prev => ({ ...prev, isProfessional: "particulier" }))
                        }}
                        className={`p-4 rounded-lg border-2 transition-all duration-300 flex items-center gap-3 ${
                          !isProfessional
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border hover:border-primary/50 hover:bg-primary/5"
                        }`}
                      >
                        <Home className="w-5 h-5" />
                        <div className="text-left">
                          <p className="font-semibold">Particulier</p>
                          <p className="text-sm text-muted-foreground">Maison/Appartement</p>
                        </div>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setIsProfessional(true)
                          setFormData(prev => ({ ...prev, isProfessional: "entreprise" }))
                        }}
                        className={`p-4 rounded-lg border-2 transition-all duration-300 flex items-center gap-3 ${
                          isProfessional
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border hover:border-primary/50 hover:bg-primary/5"
                        }`}
                      >
                        <Building className="w-5 h-5" />
                        <div className="text-left">
                          <p className="font-semibold">Entreprise</p>
                          <p className="text-sm text-muted-foreground">Bureau/Commerce</p>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-6">3. Informations de Contact</h3>
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

                      {/* Professional Fields */}
                      {isProfessional && (
                        <>
                          <div className="space-y-2">
                            <label htmlFor="companyName" className="block text-sm font-semibold text-foreground">
                              Nom de l'Entreprise *
                            </label>
                            <input
                              type="text"
                              id="companyName"
                              name="companyName"
                              value={formData.companyName}
                              onChange={handleChange}
                              required={isProfessional}
                              className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                              placeholder="Nom de votre entreprise"
                            />
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="contactPerson" className="block text-sm font-semibold text-foreground">
                              Personne de Contact *
                            </label>
                            <input
                              type="text"
                              id="contactPerson"
                              name="contactPerson"
                              value={formData.contactPerson}
                              onChange={handleChange}
                              required={isProfessional}
                              className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                              placeholder="Personne responsable"
                            />
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-6">4. Détails du Déménagement</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Property Type */}
                      <div className="space-y-2">
                        <label htmlFor="propertyType" className="block text-sm font-semibold text-foreground">
                          {isProfessional ? "Type d'entreprise" : "Type de logement"} *
                        </label>
                        <select
                          id="propertyType"
                          name="propertyType"
                          value={formData.propertyType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        >
                          <option value="">Sélectionner</option>
                          {isProfessional ? (
                            <>
                              <option value="bureau">Bureau / Administration</option>
                              <option value="commerce">Commerce</option>
                              <option value="entrepot">Entrepôt</option>
                              <option value="autre">Autre</option>
                            </>
                          ) : (
                            <>
                              <option value="studio">Studio</option>
                              <option value="appartement">Appartement</option>
                              <option value="maison">Maison</option>
                            </>
                          )}
                        </select>
                      </div>

                      {/* Surface */}
                      <div className="space-y-2">
                        <label htmlFor="surface" className="block text-sm font-semibold text-foreground">
                          Surface (m²) *
                        </label>
                        <select
                          id="surface"
                          name="surface"
                          value={formData.surface}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        >
                          <option value="">Sélectionner</option>
                          {isProfessional ? (
                            <>
                              <option value="<50">Moins de 50 m²</option>
                              <option value="50-100">50 – 100 m²</option>
                              <option value="100-200">100 – 200 m²</option>
                              <option value=">200">Plus de 200 m²</option>
                            </>
                          ) : (
                            <>
                              <option value="<30">Moins de 30 m²</option>
                              <option value="30-50">30 – 50 m²</option>
                              <option value="50-80">50 – 80 m²</option>
                              <option value="80-120">80 – 120 m²</option>
                              <option value=">120">Plus de 120 m²</option>
                            </>
                          )}
                        </select>
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
                          <option value="">Sélectionner</option>
                          <option value="1000-3000">1 000 - 3 000 DH</option>
                          <option value="3000-5000">3 000 - 5 000 DH</option>
                          <option value="5000-10000">5 000 - 10 000 DH</option>
                          <option value="10000-20000">10 000 - 20 000 DH</option>
                          <option value="20000+">Plus de 20 000 DH</option>
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
                          <option value="">Sélectionner</option>
                          <option value="urgent">Urgent (moins d'1 semaine)</option>
                          <option value="1-2">1 à 2 semaines</option>
                          <option value="2-4">2 à 4 semaines</option>
                          <option value="1-3">1 à 3 mois</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>

                      {/* Storage Duration */}
                      {(formData.serviceType === "stockage" || formData.serviceType === "cle-en-main") && (
                        <div className="space-y-2">
                          <label htmlFor="storageDuration" className="block text-sm font-semibold text-foreground">
                            Durée de stockage
                          </label>
                          <select
                            id="storageDuration"
                            name="storageDuration"
                            value={formData.storageDuration}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          >
                            <option value="">Sélectionner</option>
                            <option value="1-week">1 semaine</option>
                            <option value="1-month">1 mois</option>
                            <option value="3-months">3 mois</option>
                            <option value="6-months">6 mois</option>
                            <option value="1-year">1 an</option>
                          </select>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <div className="space-y-2 mt-6">
                      <label htmlFor="description" className="block text-sm font-semibold text-foreground">
                        Informations complémentaires
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                        placeholder={
                          isProfessional 
                            ? "Contraintes particulières (horaires, accès, continuité d'activité, etc.)"
                            : "Objets fragiles, piano, électroménager, accès difficile, étage, ascenseur, etc."
                        }
                      />
                    </div>

                    {/* Terms */}
                    <div className="mt-6 flex items-start gap-2">
                      <input
                        type="checkbox"
                        id="terms"
                        required
                        className="mt-1"
                      />
                      <label htmlFor="terms" className="text-sm text-muted-foreground">
                        J'accepte d'être contacté pour recevoir mon devis personnalisé. Vos données sont traitées conformément à notre politique de confidentialité.
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading || !formData.serviceType}
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
                      href="mailto:contact@demenagement.ma"
                      className="flex items-center gap-4 p-4 bg-accent/10 hover:bg-accent/20 rounded-lg transition-colors group"
                    >
                      <Mail className="text-accent group-hover:scale-110 transition-transform" size={24} />
                      <div>
                        <p className="text-sm text-muted-foreground">Envoyez un email</p>
                        <p className="font-semibold text-foreground">contact@demenagement.ma</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 p-4 bg-secondary/10 rounded-lg">
                      <MapPin className="text-secondary" size={24} />
                      <div>
                        <p className="text-sm text-muted-foreground">Devis en Ligne</p>
                        <p className="font-semibold text-foreground">Gratuit & Sans Engagement</p>
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="border-t border-border pt-6 space-y-3">
                    <p className="text-sm font-semibold text-foreground">Votre Devis Inclut:</p>
                    {[
                      "Évaluation gratuite",
                      "Analyse détaillée de vos besoins",
                      "Proposition personnalisée",
                      "Estimation transparente",
                      "Recommandations d'experts",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Selected Service Card */}
                {formData.serviceType && (
                  <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border border-primary/20">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-4">Service Sélectionné</h3>
                    <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
                      {selectedServiceInfo?.icon}
                      <span className="font-semibold text-foreground">{selectedServiceInfo?.title}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">
                      Vous pouvez modifier votre choix à tout moment en sélectionnant un autre service ci-dessus.
                    </p>
                  </div>
                )}

                {/* Quick Links */}
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">Services Populaires</h3>
                  <div className="space-y-3">
                    {services.slice(0, 3).map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => handleServiceSelect(service.id)}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors text-left ${
                          formData.serviceType === service.id
                            ? "bg-primary/10 text-primary"
                            : "hover:bg-muted"
                        }`}
                      >
                        {service.icon}
                        <span className="font-medium text-sm">{service.title}</span>
                      </button>
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
                a: "Notre devis est entièrement gratuit et sans engagement. Vous ne payez que si vous décidez de poursuivre avec nos services de déménagement.",
              },
              {
                q: "Quel est le délai de réponse?",
                a: "Notre équipe vous contactera dans les 24 heures après soumission du formulaire pour discuter de votre projet en détail et vous fournir un devis personnalisé.",
              },
              {
                q: "Couvrez-vous toutes les villes du Maroc?",
                a: "Nous intervenons dans toutes les grandes villes du Maroc : Casablanca, Fès, Marrakech, Rabat, Tanger, Agadir, Meknès, et leurs régions.",
              },
              {
                q: "Proposez-vous des services d'urgence?",
                a: "Oui! Nous proposons des services de déménagement urgent avec une intervention sous 48h dans la plupart des cas.",
              },
              {
                q: "Les emballages sont-ils inclus?",
                a: "Tous nos devis incluent le coût des matériaux d'emballage professionnels adaptés à vos biens.",
              },
              {
                q: "Assurez-vous les objets transportés?",
                a: "Oui, tous vos biens sont assurés pendant le transport et le stockage avec notre assurance partenaire.",
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
  )
}

// Version alternative avec paramètres d'URL (optionnel)
function DevisContentWithParams() {
  // Pour une version avec paramètres d'URL, utilisez cette approche
  // Vous pouvez ajouter un useEffect pour lire les paramètres d'URL si nécessaire
  // Mais comme nous n'avons plus useSearchParams, on laisse l'utilisateur sélectionner manuellement

  return <DevisContent />
}

// Composant principal avec Suspense
export default function DevisPage() {
  return (
    <>
      <Navigation />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground">Chargement du formulaire...</p>
          </div>
        </div>
      }>
        <DevisContentWithParams />
      </Suspense>
      <Footer />
    </>
  )
}