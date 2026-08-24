"use client"

import { useState, useEffect, useRef } from "react"
import { Copy, Check } from "lucide-react"

const codeExamples = [
  {
    label: "Clone",
    code: `git clone https://github.com/AndrewTullos/Reef-Dashboard.git

cd Reef-Dashboard
npm install`,
  },
  {
    label: "Run",
    code: `npm run dev

# Open
http://localhost:3000`,
  },
  {
    label: "Stack",
    code: `Next.js
React
TypeScript
Supabase
Recharts`,
  },
]

const features = [
  {
    title: "Next.js + React",
    description: "Modern frontend architecture built for speed and iteration.",
  },
  {
    title: "TypeScript",
    description: "Typed components and predictable application logic.",
  },
  {
    title: "Supabase",
    description: "Persistent storage for reef data and tank history.",
  },
  {
    title: "Open source",
    description:
      "Explore the code, follow development, or contribute on GitHub.",
  },
]

const codeAnimationStyles = `
  .dev-code-line {
    opacity: 0;
    transform: translateX(-8px);
    animation: devLineReveal 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  
  @keyframes devLineReveal {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .dev-code-char {
    opacity: 0;
    filter: blur(8px);
    animation: devCharReveal 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  
  @keyframes devCharReveal {
    to {
      opacity: 1;
      filter: blur(0);
    }
  }
`

export function DevelopersSection() {
  const [activeTab, setActiveTab] = useState(0)
  const [copied, setCopied] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeTab].code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="developers"
      ref={sectionRef}
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <style dangerouslySetInnerHTML={{ __html: codeAnimationStyles }} />
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <span className="mb-6 inline-flex items-center gap-3 font-mono text-sm text-muted-foreground">
              <span className="h-px w-8 bg-foreground/30" />
              Under the hood
            </span>

            <h2 className="font-display mb-8 text-4xl tracking-tight lg:text-6xl">
              Built in the open.
              <br />
              <span className="text-muted-foreground">Made to evolve.</span>
            </h2>

            <p className="mb-12 text-xl leading-relaxed text-muted-foreground">
              ReefPilot is built with a modern TypeScript stack and developed
              openly on GitHub. Explore the code, follow the roadmap, or see how
              the platform works behind the scenes.
            </p>
            {/* Features */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`transition-all duration-500 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 50 + 200}ms` }}
                >
                  <h3 className="mb-1 font-medium">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Code block */}
          <div
            className={`transition-all delay-200 duration-700 lg:sticky lg:top-32 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-8 opacity-0"
            }`}
          >
            <div className="border border-foreground/10">
              {/* Tabs */}
              <div className="flex items-center border-b border-foreground/10">
                {codeExamples.map((example, idx) => (
                  <button
                    key={example.label}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`relative px-6 py-4 font-mono text-sm transition-colors ${
                      activeTab === idx
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {example.label}
                    {activeTab === idx && (
                      <span className="absolute right-0 bottom-0 left-0 h-px bg-foreground" />
                    )}
                  </button>
                ))}
                <div className="flex-1" />
                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-4 py-4 text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Copy code"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Code content */}
              <div className="min-h-[220px] bg-foreground/[0.01] p-8 font-mono text-sm">
                <pre className="text-foreground/80">
                  {codeExamples[activeTab].code
                    .split("\n")
                    .map((line, lineIndex) => (
                      <div
                        key={`${activeTab}-${lineIndex}`}
                        className="dev-code-line leading-loose"
                        style={{ animationDelay: `${lineIndex * 80}ms` }}
                      >
                        <span className="inline-flex">
                          {line.split("").map((char, charIndex) => (
                            <span
                              key={`${activeTab}-${lineIndex}-${charIndex}`}
                              className="dev-code-char"
                              style={{
                                animationDelay: `${lineIndex * 80 + charIndex * 15}ms`,
                              }}
                            >
                              {char === " " ? "\u00A0" : char}
                            </span>
                          ))}
                        </span>
                      </div>
                    ))}
                </pre>
              </div>
            </div>

            {/* Links */}
            <div className="mt-6 flex items-center gap-6 text-sm">
              <a
                href="https://github.com/AndrewTullos/Reef-Dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline-offset-4 hover:underline"
              >
                View source
              </a>

              <span className="text-foreground/20">|</span>

              <a
                href="https://github.com/AndrewTullos/Reef-Dashboard#readme"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                Read the README
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
