import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Gamepad2 } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4"
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <Image
            src="/images/logo-transparent.png"
            alt="Basic Dev's Logo"
            width={200}
            height={200}
            className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
          Building the Future of{" "}
          <span className="text-primary">Roblox Gaming</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
          We&apos;re a passionate game development studio investing in talented
          creators and building innovative experiences on the Roblox platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="gap-2">
            <Link href="#games">
              <Gamepad2 className="w-5 h-5" />
              Our Games
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="gap-2">
            <Link href="#invest">
              Partner With Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary">2+</p>
            <p className="text-muted-foreground text-sm mt-1">
              Games In Development
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary">10+</p>
            <p className="text-muted-foreground text-sm mt-1">Team Members</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary">5+</p>
            <p className="text-muted-foreground text-sm mt-1">Investments</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-accent">2026</p>
            <p className="text-muted-foreground text-sm mt-1">Launch Year</p>
          </div>
        </div>
      </div>
    </section>
  )
}
