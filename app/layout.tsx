import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import "./globals.css"
import { ScrollToTopProvider } from "../app/components/scroll-to-top-provider"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Aménagement Luxe Maroc | Design Intérieur Moderne & Haut de Gamme",
  description:
    "Transformez votre appartement avec nos services d'aménagement intérieur haut de gamme au Maroc. Design moderne, luxe et créatif pour vos espaces.",
  keywords:
    "aménagement appartement Maroc, décoration intérieur luxe, design moderne Casablanca, aménagement Fès, décoration haut de gamme",
  authors: [{ name: "Aménagement Luxe Maroc" }],
  openGraph: {
    title: "Aménagement Luxe Maroc | Design Intérieur Premium",
    description: "Services d'aménagement intérieur luxe et modernes pour votre appartement au Maroc",
    url: "https://amenagement-luxe-maroc.ma",
    siteName: "Aménagement Luxe Maroc",
    locale: "fr_FR",
    type: "website",
  },
  robots: "index, follow",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#D4A574",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="#D4A574" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta property="og:title" content="Aménagement Luxe Maroc | Design Intérieur Moderne & Haut de Gamme" />
        <meta
          property="og:description"
          content="Transformez votre appartement avec nos services d'aménagement intérieur haut de gamme au Maroc."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body className={`${lato.variable} ${playfair.variable} font-sans antialiased`}>
        <ScrollToTopProvider>{children}</ScrollToTopProvider>
      </body>
    </html>
  )
}
