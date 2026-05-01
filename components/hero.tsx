import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <div className="mb-10">
          <Image
            src="/images/logo-transparent.png"
            alt="Basic Dev's"
            width={140}
            height={140}
            className="mx-auto"
            priority
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-balance mb-6">
          Building the Future of
          <br />
          <span className="text-muted-foreground">Roblox Gaming</span>
        </h1>

        <p className="mx-auto max-w-xl text-lg text-muted-foreground mb-12 text-pretty">
          We&apos;re a game development studio creating immersive experiences on Roblox. 
          We invest in talented developers and bring ambitious ideas to life.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Button asChild size="lg" className="min-w-[160px]">
            <Link href="#games">
              Our Games
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="min-w-[160px]">
            <Link href="#invest">Partner With Us</Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-3xl mx-auto pt-12 border-t border-border">
          {[
            { value: "3+", label: "Games in Development" },
            { value: "10+", label: "Team Members" },
            { value: "2025", label: "Founded" },
            { value: "Soon", label: "First Launch" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-semibold tracking-tight mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
