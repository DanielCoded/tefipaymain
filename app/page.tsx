import HeroGeometric from "@/components/hero-geometric"
import { Partners } from "@/components/partners"
import { Features } from "@/components/features"
import { Stats } from "@/components/stats"
import { PhotoGrid } from "@/components/photo-grid"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default async function Home() {
  // You can fetch data here if needed for SSR
  // const data = await fetchSomeData()

  return (
    <main className="bg-[#030303] min-h-screen">
      <HeroGeometric />
      <Partners />
      <Features />
      <Stats />
      <PhotoGrid />
      <Testimonials />
      <Footer />
    </main>
  )
}

