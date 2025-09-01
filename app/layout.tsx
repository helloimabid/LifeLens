import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "Healthline Connect - AI-Powered Health Triage",
  description: "Your AI-powered first step to better healthcare. Get instant symptom analysis and health guidance.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} flex flex-col min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} storageKey="healthline-theme">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
