"use client"

import { ArrowUpRight } from "lucide-react"
import { AnimatedWave } from "./animated-wave"

const footerLinks = {
  Product: [
    { name: "Features", href: "#features" },
    { name: "How it works", href: "#how-it-works" },
    // { name: "Pricing", href: "#pricing" },
    { name: "Integrations", href: "#integrations" },
  ],
  Developers: [
    { name: "Documentation", href: "#developers" },
    { name: "Github", href: "https://github.com/AndrewTullos/Reef-Dashboard" },
    // { name: "Roadmap", href: "#" },
    // { name: "SDK", href: "#developers" },
    // { name: "Status", href: "#" },
  ],
  Company: [
    { name: "About ReefPilot", href: "#" },
    { name: "Blog", href: "#" },
    // { name: "Careers", href: "#", badge: "Hiring" },
    { name: "Contact", href: "#" },
  ],
  Legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    // { name: "Security", href: "#security" },
  ],
}

const socialLinks = [
  { name: "Twitter", href: "#" },
  { name: "GitHub", href: "https://github.com/AndrewTullos/Reef-Dashboard" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/andrewtullos/" },
]

export function FooterSection() {
  return (
    <footer className="relative border-t border-foreground/10">
      {/* Animated wave background */}
      <div className="pointer-events-none absolute inset-0 h-64 overflow-hidden opacity-20">
        <AnimatedWave />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 gap-12 md:grid-cols-6 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#" className="mb-6 inline-flex items-center gap-2">
                <span className="font-display text-2xl">ReefPilot</span>
                <span className="font-mono text-xs text-muted-foreground">
                  BETA
                </span>
              </a>

              <p className="mb-8 max-w-xs leading-relaxed text-muted-foreground">
                Reef analytics for people who want to understand their tank, not
                just log it.
              </p>

              {/* Social Links */}
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="group flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="mb-6 text-sm font-medium">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                  {/* {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.name}
                        {"badge" in link &&
                          typeof link.badge === "string" &&
                          link.badge && (
                            <span className="rounded-full bg-foreground px-2 py-0.5 text-xs ...">
                              {link.badge}
                            </span>
                          )}
                      </a>
                    </li>
                  ))} */}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-foreground/10 py-8 md:flex-row">
          <p className="text-sm text-muted-foreground">© 2026 ReefPilot.</p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2 font-mono">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              System stable
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
