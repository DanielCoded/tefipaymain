import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Smartphone, Shield, Zap, CreditCard, Globe, Clock, BarChart, Lock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BackgroundAnimation } from "@/components/background-animation"
import Image from "next/image"

const features = [
  {
    category: "Contactless Payments",
    image:
      "https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    items: [
      {
        title: "Seamless Contactless Payments",
        description: "Experience the future of payments with our contactless solutions.",
        icon: Smartphone,
        subFeatures: [
          "NFC & QR Code Transactions",
          "Tap-to-Pay via Mobile Devices",
          "Peer-to-Peer Contactless Transfers",
        ],
      },
    ],
  },
  {
    category: "Security",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    items: [
      {
        title: "Smart AI-Powered Fraud Detection",
        description: "Advanced security measures to protect your transactions.",
        icon: Shield,
        subFeatures: [
          "Real-time transaction monitoring",
          "AI-driven anomaly detection",
          "Instant fraud alerts & prevention",
        ],
      },
      {
        title: "One-Tap Biometric Authentication",
        description: "Secure and convenient authentication methods.",
        icon: Lock,
        subFeatures: [
          "Fingerprint & Face ID security",
          "Instant transaction approvals",
          "Adaptive security for suspicious logins",
        ],
      },
    ],
  },
  {
    category: "Payment Solutions",
    image:
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    items: [
      {
        title: "Virtual & Physical Card Integration",
        description: "Flexible card management for all your needs.",
        icon: CreditCard,
        subFeatures: [
          "Link multiple debit/credit cards",
          "Virtual card generation for online payments",
          "Secure one-time-use cards for privacy",
        ],
      },
      {
        title: "Instant Multi-Currency Payments",
        description: "Seamless international transactions.",
        icon: Globe,
        subFeatures: [
          "Auto currency conversion",
          "Cross-border transactions with real-time rates",
          "Support for African & global currencies",
        ],
      },
    ],
  },
  {
    category: "Advanced Features",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80",
    items: [
      {
        title: "Secure Tokenization",
        description: "Enhanced security for every transaction.",
        icon: Zap,
        subFeatures: [
          "Dynamic CVV for every purchase",
          "No card details stored on merchants' servers",
          "End-to-end encryption for payments",
        ],
      },
      {
        title: "Smart Spending & Budgeting Tools",
        description: "Take control of your finances.",
        icon: BarChart,
        subFeatures: ["AI-based expense tracking", "Automated savings goals", "Personalized financial insights"],
      },
    ],
  },
  {
    category: "Business Solutions",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
    items: [
      {
        title: "Merchant Payment Gateway",
        description: "Complete payment solutions for businesses.",
        icon: Users,
        subFeatures: [
          "Easy POS & online store integration",
          "No-code checkout buttons",
          "Subscription & recurring payments",
        ],
      },
      {
        title: "Developer APIs & SDKs",
        description: "Build custom payment solutions.",
        icon: Clock,
        subFeatures: [
          "Open API for fintech startups",
          "Custom payment solutions",
          "White-label options for businesses",
        ],
      },
    ],
  },
]

export default async function FeaturesPage() {
  // You can fetch data here if needed for SSR
  // const data = await fetchSomeData()

  return (
    <main className="bg-[#030303] min-h-screen relative overflow-hidden">
      <BackgroundAnimation />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-6 relative z-10">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Powerful Features for Modern Payments</h1>
            <p className="text-white/60 text-lg mb-8">
              Discover the tools and capabilities that make TefiPay the leading choice for contactless payments.
            </p>
          </div>
        </div>
      </section>

      {/* Features Sections */}
      {features.map((category, index) => (
        <section
          key={index}
          className={`py-24 px-4 md:px-6 relative z-10 ${
            index % 2 === 0
              ? "bg-gradient-to-r from-black/20 to-transparent"
              : "bg-gradient-to-l from-black/20 to-transparent"
          }`}
        >
          <div className="container mx-auto">
            <div
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.category}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h2 className="text-3xl font-bold text-white mb-2">{category.category}</h2>
                    <div className="w-16 h-1 bg-indigo-500" />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="grid gap-8">
                  {category.items.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="flex items-center mb-4">
                        <feature.icon className="w-8 h-8 text-indigo-500 mr-3" />
                        <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                      </div>
                      <p className="text-white/60 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.subFeatures.map((subFeature, subIndex) => (
                          <li key={subIndex} className="flex items-center text-white/60">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2" />
                            {subFeature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Waitlist Section */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-b from-black/20 to-[#030303] relative z-10">
        <div className="container mx-auto text-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Join Our Waitlist</h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Be among the first to experience the future of contactless payments. Get exclusive benefits and early
              access to our platform.
            </p>
            <Button className="bg-white text-black hover:bg-white/90 px-8 py-3 text-lg rounded-full transition-all duration-300 transform hover:scale-105">
              Join the Waitlist
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

