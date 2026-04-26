import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Sparkles } from "lucide-react"

const games = [
  {
    title: "Coming Soon",
    description:
      "An exciting new adventure is in development. Stay tuned for announcements!",
    status: "In Development",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Mystery Project",
    description:
      "Something big is brewing. Follow us to be the first to know when we reveal it.",
    status: "Early Concept",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export function Games() {
  return (
    <section id="games" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Coming Soon</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Games
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            We&apos;re working hard on some exciting projects. While we
            don&apos;t have live games yet, we&apos;re building something
            special for the Roblox community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {games.map((game) => (
            <Card
              key={game.title}
              className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-colors"
            >
              <div className="aspect-video bg-secondary/50 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Clock className="w-12 h-12 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground font-medium">
                      Coming Soon
                    </p>
                  </div>
                </div>
              </div>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    {game.title}
                  </h3>
                  <Badge variant="secondary">{game.status}</Badge>
                </div>
                <p className="text-muted-foreground">{game.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
