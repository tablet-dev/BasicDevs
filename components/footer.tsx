import Image from "next/image"
import Link from "next/link"

const links = [
  { href: "#about", label: "About" },
  { href: "#games", label: "Games" },
  { href: "#invest", label: "Invest" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-transparent.png"
              alt="Basic Dev's"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="font-medium">Basic Dev&apos;s</span>
          </div>

          <nav className="flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Basic Dev&apos;s. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
