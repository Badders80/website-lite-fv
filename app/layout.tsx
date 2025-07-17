import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const bwGradual = localFont({
  src: [
    {
      path: "../fonts/BwGradual-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/BwGradual-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bw-gradual",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Evolution Stables",
  description: "Experience a new era of racehorse ownership",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${bwGradual.variable} antialiased`}>{children}</body>
    </html>
  )
}
