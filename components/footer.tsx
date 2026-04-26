import Image from "next/image"
import Link from "next/link"

const footerLinks = {
  navigation: [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#games", label: "Games" },
    { href: "#invest", label: "Invest" },
    { href: "#contact", label: "Contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-transparent.png"
              alt="Basic Dev's Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div>
              <p className="font-bold text-foreground">Basic Dev&apos;s</p>
              <p className="text-sm text-muted-foreground">
                Roblox Game Development Studio
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.navigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Basic Dev&apos;s. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
