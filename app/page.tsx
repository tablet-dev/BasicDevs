import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Games } from "@/components/games"
import { Invest } from "@/components/invest"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Games />
      <Invest />
      <Contact />
      <Footer />
    </main>
  )
}
