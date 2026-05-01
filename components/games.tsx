import { Clock } from "lucide-react"

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
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="group rounded-lg border border-border bg-background overflow-hidden"
            >
              <div className="aspect-[16/10] bg-secondary flex items-center justify-center">
                <div className="text-center">
                  <Clock className="h-10 w-10 text-muted-foreground/40 mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">In Development</p>
                </div>
              </div>
              <div className="p-6">
                <div className="h-4 w-24 bg-secondary rounded mb-3" />
                <div className="h-5 w-32 bg-secondary rounded mb-3" />
                <div className="space-y-2">
                  <div className="h-3 w-full bg-secondary rounded" />
                  <div className="h-3 w-2/3 bg-secondary rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Want to be notified when we launch?{" "}
            <a href="#contact" className="text-foreground underline underline-offset-4 hover:no-underline">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
