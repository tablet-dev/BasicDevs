import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  "Funding for your game development",
  "Access to experienced developers",
  "Marketing and growth support",
  "Revenue sharing opportunities",
  "Technical guidance and mentorship",
  "Publishing and launch support",
]

export function Invest() {
  return (
    <section id="invest" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-widest">
              Investment Program
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Partner With Basic Dev&apos;s
            </h2>
            <p className="text-muted-foreground mb-8 text-pretty leading-relaxed">
              Have a great game idea? We invest in talented developers and help bring 
              ambitious projects to life. Join our network and let&apos;s build something 
              amazing together.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-background" />
                  </div>
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button asChild size="lg">
              <Link href="#contact">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-lg bg-secondary border border-border flex items-center justify-center">
              <div className="text-center px-8">
                <div className="text-5xl md:text-6xl font-semibold tracking-tight mb-3">$$$</div>
                <p className="text-muted-foreground text-sm">Investment Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
