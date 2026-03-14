import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Kelly Soto Photography",
  description:
    "Capturing light. Telling stories. Portrait, event, and family photography by Kelly Soto.",
  openGraph: {
    title: "Kelly Soto Photography",
    description: "Capturing light. Telling stories.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body
        className="min-h-screen"
        style={{
          backgroundColor: "#fafaf8",
          color: "#2c2c2c",
          fontFamily: "var(--font-lato), system-ui, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  )
}
