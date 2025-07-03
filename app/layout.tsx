import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "TechForWeb - Desenvolvimento Web Profissional | Sites, E-commerce e Sistemas",
  description:
    "Desenvolvimento de sites profissionais, lojas virtuais e sistemas web personalizados. Especialistas em React, Next.js e tecnologias modernas. Orçamento gratuito!",
  keywords: [
    "desenvolvimento web",
    "criação de sites",
    "loja virtual",
    "e-commerce",
    "sistema web",
    "React",
    "Next.js",
    "TechForWeb",
    "desenvolvimento profissional",
    "site responsivo",
    "landing page",
    "Tech Loja",
  ],
  authors: [{ name: "TechForWeb" }],
  creator: "TechForWeb",
  publisher: "TechForWeb",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://techforweb.com.br",
    siteName: "TechForWeb",
    title: "TechForWeb - Desenvolvimento Web Profissional",
    description:
      "Desenvolvimento de sites profissionais, lojas virtuais e sistemas web personalizados. Especialistas em React, Next.js e tecnologias modernas.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TechForWeb - Desenvolvimento Web Profissional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechForWeb - Desenvolvimento Web Profissional",
    description: "Desenvolvimento de sites profissionais, lojas virtuais e sistemas web personalizados.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://techforweb.com.br",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  )
}
