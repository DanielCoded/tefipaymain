import { Lexend } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"
import type React from "react" // Import React

const lexend = Lexend({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TefiPay - The Future of Contactless Payments",
  description: "Experience seamless, secure, and instant payments with our revolutionary contactless payment solution.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lexend.className}>{children}</body>
    </html>
  )
}

