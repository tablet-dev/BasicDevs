import { Card, CardContent } from "@/components/ui/card"
import { Code2, Lightbulb, Users, Rocket } from "lucide-react"

const features = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We push the boundaries of what's possible on Roblox, creating unique gameplay experiences that stand out.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Our games are built with players in mind. We listen, iterate, and deliver experiences players love.",
  },
  {
    icon: Code2,
    title: "Quality Code",
    description:
      "Clean, optimized, and scalable code is at the heart of everything we build.",
  },
  {
    icon: Rocket,
    title: "Ambitious Goals",
    description:
      "We're not just building games—we're building a studio that will shape the future of Roblox.",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Who We Are
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Basic Dev&apos;s is a Roblox game development studio with a passion
            for creating memorable gaming experiences. We invest in talent and
            build games that players will love.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="bg-card border-border hover:border-primary/50 transition-colors"
            >
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
