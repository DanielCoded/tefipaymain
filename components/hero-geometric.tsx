"use client"

import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import { cn } from "@/lib/utils"
import { Navbar } from "./navbar"
import Image from "next/image"
import { Particles } from "./particles"
import { GradientMesh } from "./gradient-mesh"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

const ElegantShape = ({
  width,
  height,
  rotate,
  delay,
  gradient,
  className,
}: {
  width: number
  height: number
  rotate: number
  delay: number
  gradient: string
  className: string
}) => {
  return (
    <motion.svg
      width={width}
      height={height}
      className={cn("absolute", className, "fill-none stroke-[#ffffff10] stroke-2", "origin-center")}
      initial={{ rotate: 0, opacity: 0 }}
      animate={{
        rotate: rotate,
        opacity: 1,
        transition: {
          duration: 1,
          delay: delay,
          ease: [0.25, 0.4, 0.25, 1],
        },
      }}
    >
      <motion.path
        d={`M0,0 L${width},0 L${width},${height} L0,${height} Z`}
        fill={`url(#gradient-${className})`}
        stroke={`url(#gradient-stroke-${className})`}
        strokeWidth={2}
      />
      <defs>
        <linearGradient id={`gradient-${className}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="#ffffff10" offset="0%" />
          <stop stopColor={gradient} offset="100%" />
        </linearGradient>
        <linearGradient id={`gradient-stroke-${className}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="#ffffff10" offset="0%" />
          <stop stopColor="#ffffff20" offset="100%" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}

export default function HeroGeometric() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
        <GradientMesh />
        <Particles />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.1] via-transparent to-rose-500/[0.1] blur-3xl" />

        <div className="absolute inset-0 overflow-hidden">
          <ElegantShape
            delay={0.3}
            width={600}
            height={140}
            rotate={12}
            gradient="from-indigo-500/[0.15]"
            className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
          />
          <ElegantShape
            delay={0.5}
            width={400}
            height={100}
            rotate={-8}
            gradient="from-rose-500/[0.15]"
            className="right-[-10%] md:right-[-5%] bottom-[15%] md:bottom-[20%]"
          />
          <ElegantShape
            delay={0.7}
            width={300}
            height={80}
            rotate={20}
            gradient="from-indigo-500/[0.15]"
            className="left-[10%] md:left-[5%] bottom-[5%] md:bottom-[10%]"
          />
          <ElegantShape
            delay={0.9}
            width={500}
            height={120}
            rotate={-15}
            gradient="from-rose-500/[0.15]"
            className="right-[10%] md:right-[5%] top-[5%] md:top-[10%]"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tp_2-removebg-preview-uu6epmsuyiunTcBXLGJQfCqSzIDHUr.png"
                alt="TefiPay"
                width={20}
                height={20}
                priority
              />
              <span className="text-sm text-white/60 tracking-wide">TefiPay</span>
            </motion.div>

            <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 leading-tight">
                  The Future of
                </span>
                <br />
                <span
                  className={cn(
                    "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300",
                    pacifico.className,
                  )}
                >
                  Contactless Pay
                </span>
              </h1>
            </motion.div>

            <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
              <p className="text-base sm:text-lg md:text-xl text-white/60 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
                Experience seamless, secure, and instant payments with our revolutionary contactless payment solution.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/50 pointer-events-none" />
      </div>
    </>
  )
}

