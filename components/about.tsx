import { Lightbulb, Users, Code2, Rocket } from "lucide-react"

const features = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We push boundaries with creative game mechanics and unique experiences that stand out.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Player feedback shapes our games. We build experiences that players actually want.",
  },
  {
    icon: Code2,
    title: "Quality Code",
    description: "Clean, optimized code ensures smooth gameplay and long-term maintainability.",
  },
  {
    icon: Rocket,
    title: "Ambitious Goals",
    description: "We aim high. Every project is designed to reach millions of players on Roblox.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-widest">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Who We Are
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground text-pretty">
            Basic Dev&apos;s is a passionate team of developers, designers, and creators 
            dedicated to building memorable gaming experiences on the Roblox platform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors"
            >
              <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="font-medium mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
