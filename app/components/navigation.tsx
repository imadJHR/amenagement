"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { label: "Accueil", href: "/" },
    { label: "À Propos", href: "/apropos" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Devis", href: "/devis" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-primary-foreground font-serif text-2xl font-bold">A</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-serif font-bold text-lg text-foreground">Aménagement</span>
              <span className="text-xs text-muted-foreground">Luxe Maroc</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-foreground hover:text-primary transition-colors duration-300 font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden sm:block">
            <Link
              href="/devis"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
            >
              Devis Gratuit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-slideUp">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-foreground hover:text-primary transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
