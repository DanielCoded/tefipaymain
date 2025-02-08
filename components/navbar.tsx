"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Lexend } from "next/font/google"
import { MobileMenu } from "./mobile-menu"

const lexend = Lexend({ subsets: ["latin"] })

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 bg-black/5 backdrop-blur-sm border-b border-white/[0.08] ${lexend.className}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tp_2-removebg-preview-uu6epmsuyiunTcBXLGJQfCqSzIDHUr.png"
              alt="TefiPay Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white/80 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white/80 hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/features" className="text-white/80 hover:text-white transition-colors">
              Features
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-white text-black hover:bg-white/90">Join the Waitlist</Button>
          </div>

          <MobileMenu />
        </div>
      </div>
    </motion.header>
  )
}

