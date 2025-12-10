"use client"

import { MessageCircle, Instagram } from "lucide-react"

export default function SocialButtons() {
  return (
    <div className="fixed bottom-8 right-4 sm:right-8 flex flex-col gap-4 z-40">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/212612345678?text=Bonjour,%20je%20souhaite%20demander%20un%20devis%20pour%20mon%20projet%20d'aménagement."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 hover:shadow-xl transition-all hover:scale-110 animate-fadeInUp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} className="sm:w-8 sm:h-8" />
      </a>

      {/* Instagram Button */}
      <a
        href="https://instagram.com/amenagementluxemaroc"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-pink-500 text-white shadow-lg hover:bg-pink-600 hover:shadow-xl transition-all hover:scale-110 animate-fadeInUp"
        style={{ animationDelay: "0.1s" }}
        aria-label="Follow on Instagram"
      >
        <Instagram size={28} className="sm:w-8 sm:h-8" />
      </a>
    </div>
  )
}
