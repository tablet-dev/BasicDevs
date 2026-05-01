import { Gamepad2 } from "lucide-react"

const upcomingGames = [
  {
    title: "Project Alpha",
    genre: "Action RPG",
    status: "In Development",
    description: "An epic adventure awaits in this action-packed RPG experience.",
  },
  {
    title: "Project Beta",
    genre: "Simulator",
    status: "Early Stage",
    description: "A unique simulation game with innovative mechanics.",
  },
  {
    title: "Project Gamma",
    genre: "Adventure",
    status: "Concept",
    description: "An immersive world filled with mysteries to uncover.",
  },
]

export function Games() {
  return (
    <section id="games" className="py-24 md:py-32 bg-secondary/50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-widest">
            Our Games
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Coming Soon
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground text-pretty">
            We&apos;re working on exciting new games. Stay tuned for announcements 
            and early access opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {upcomingGames.map((game) => (
            <div
              key={game.title}
              className="group rounded-lg border border-border bg-background overflow-hidden hover:border-foreground/20 transition-colors"
            >
              <div className="aspect-[16/10] bg-secondary flex items-center justify-center">
                <Gamepad2 className="h-10 w-10 text-muted-foreground/30" />
              </div>
              <div className="p-6">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{game.status}</p>
                <h3 className="font-medium mb-1">{game.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{game.genre}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{game.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
