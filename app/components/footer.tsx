import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold">A</span>
              </div>
              <div>
                <p className="font-serif font-bold">Aménagement</p>
                <p className="text-xs opacity-75">Luxe Maroc</p>
              </div>
            </div>
            <p className="text-sm opacity-80">Transformez vos espaces en lieux de vie exceptionnels depuis 2010.</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Navigation</h3>
            <ul className="space-y-2">
              {[
                { label: "Accueil", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Portfolio", href: "/#portfolio" },
                { label: "Devis", href: "/devis" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="opacity-80 hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-2">
              {["Design Intérieur", "Aménagement Complet", "Rénovation", "Consultation"].map((service, i) => (
                <li key={i} className="opacity-80 hover:opacity-100 transition-opacity">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <Phone size={18} />
                <a href="tel:+212612345678">+212 6 12 34 56 78</a>
              </li>
              <li className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <Mail size={18} />
                <a href="mailto:contact@amenagementluxe.ma">contact@amenagementluxe.ma</a>
              </li>
              <li className="flex items-start gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <MapPin size={18} className="mt-0.5" />
                <span>Casablanca, Maroc</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/20 py-8 space-y-6">
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {[
              { icon: Facebook, label: "Facebook", href: "#" },
              { icon: Instagram, label: "Instagram", href: "#" },
              { icon: Linkedin, label: "LinkedIn", href: "#" },
            ].map((social, i) => {
              const Icon = social.icon
              return (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/40 transition-colors"
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </div>

          {/* Bottom Text */}
          <div className="text-center space-y-2 text-sm opacity-75">
            <p>&copy; {currentYear} Aménagement Luxe Maroc. Tous droits réservés.</p>
            <div className="flex justify-center gap-4">
              <Link href="#" className="hover:opacity-100">
                Politique de Confidentialité
              </Link>
              <span>•</span>
              <Link href="#" className="hover:opacity-100">
                Mentions Légales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
