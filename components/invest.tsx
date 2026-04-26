import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TrendingUp, Handshake, DollarSign, ArrowRight } from "lucide-react"

const benefits = [
  {
    icon: DollarSign,
    title: "Funding Support",
    description:
      "We provide financial backing to help talented developers bring their visions to life.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "Join our network of creators and gain access to resources, mentorship, and collaboration opportunities.",
  },
  {
    icon: TrendingUp,
    title: "Growth Potential",
    description:
      "We help promising projects scale with marketing support and strategic guidance.",
  },
]

export function Invest() {
  return (
    <section id="invest" className="py-20 px-4 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Invest With Us
            </h2>
            <p className="text-muted-foreground text-lg mb-8 text-pretty">
              We&apos;re actively investing in talented Roblox developers and
              promising game concepts. If you have a great idea or are looking
              for support to take your project to the next level, we want to
              hear from you.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" asChild className="gap-2">
              <Link href="#contact">
                Submit Your Pitch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                What We Look For
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-sm font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      Innovative Concepts
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Fresh ideas that bring something new to Roblox
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-sm font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      Passionate Teams
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Developers who are committed to their craft
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-sm font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      Scalable Potential
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Projects with room to grow and engage large audiences
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-sm font-bold">4</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      Quality Focus
                    </p>
                    <p className="text-muted-foreground text-sm">
                      A commitment to delivering polished experiences
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
