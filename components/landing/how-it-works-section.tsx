"use client"

import { useEffect, useRef, useState } from "react"

const steps = [
  {
    number: "I",
    title: "Log your reef",
    description:
      "Add water parameters, maintenance, livestock, and notable tank changes as they happen.",
    code: `parameter: "alkalinity"
value: 8.4
unit: "dKH"
measured_at: "today"

maintenance:
  - water_change
  - glass_cleaned`,
  },
  {
    number: "II",
    title: "See the pattern",
    description:
      "ReefPilot turns individual readings into trends so you can see what is stable, drifting, or unusual.",
    code: `alkalinity:
  current: 8.4 dKH
  7_day_avg: 8.2 dKH
  trend: stable

nitrate:
  current: 14 ppm
  trend: rising`,
  },
  {
    number: "III",
    title: "Act with context",
    description:
      "Use your tank history to connect changes, understand what may be driving them, and make better decisions.",
    code: `insight:
  nitrate increased 22%

possible_context:
  - feeding increased
  - water_change interval longer

status: "watch trend"`,
  },
]
const panelLabels = [
  "reef-log.yaml",
  "trend-analysis.yaml",
  "reef-insight.yaml",
]

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative overflow-hidden bg-foreground py-24 text-background lg:py-32"
    >
      {/* Diagonal lines pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            currentColor 40px,
            currentColor 41px
          )`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="mb-6 inline-flex items-center gap-3 font-mono text-sm text-background/50">
            <span className="h-px w-8 bg-background/30" />
            How it works
          </span>
          <h2
            className={`font-display text-4xl tracking-tight transition-all duration-700 lg:text-6xl ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            Three steps.
            <br />
            {/* <span className="text-background/50">Infinite possibilities.</span> */}
            <span className="text-background/50">A clearer reef.</span>
          </h2>
        </div>

        {/* Main content */}
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Steps */}
          <div className="space-y-0">
            {steps.map((step, index) => (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`group w-full border-b border-background/10 py-8 text-left transition-all duration-500 ${
                  activeStep === index
                    ? "opacity-100"
                    : "opacity-40 hover:opacity-70"
                }`}
              >
                <div className="flex items-start gap-6">
                  <span className="font-display text-3xl text-background/30">
                    {step.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display mb-3 text-2xl transition-transform duration-300 group-hover:translate-x-2 lg:text-3xl">
                      {step.title}
                    </h3>
                    <p className="leading-relaxed text-background/60">
                      {step.description}
                    </p>

                    {/* Progress indicator */}
                    {activeStep === index && (
                      <div className="mt-4 h-px overflow-hidden bg-background/20">
                        <div
                          className="h-full w-0 bg-background"
                          style={{
                            animation: "progress 5s linear forwards",
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Code display */}
          <div className="self-start lg:sticky lg:top-32">
            <div className="overflow-hidden border border-background/10">
              {/* Window header */}
              <div className="flex items-center justify-between border-b border-background/10 px-6 py-4">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-background/20" />
                  <div className="h-3 w-3 rounded-full bg-background/20" />
                  <div className="h-3 w-3 rounded-full bg-background/20" />
                </div>
                <span className="font-mono text-xs text-background/40">
                  {/* workflow.ts */}
                  <span className="font-mono text-xs text-background/40">
                    {panelLabels[activeStep]}
                  </span>
                </span>
              </div>

              {/* Code content */}
              <div className="min-h-[280px] p-8 font-mono text-sm">
                <pre className="text-background/70">
                  {steps[activeStep].code.split("\n").map((line, lineIndex) => (
                    <div
                      key={`${activeStep}-${lineIndex}`}
                      className="code-line-reveal leading-loose"
                      style={{
                        animationDelay: `${lineIndex * 80}ms`,
                      }}
                    >
                      <span className="inline-block w-8 text-background/20 select-none">
                        {lineIndex + 1}
                      </span>
                      <span className="inline-flex">
                        {line.split("").map((char, charIndex) => (
                          <span
                            key={`${activeStep}-${lineIndex}-${charIndex}`}
                            className="code-char-reveal"
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

              {/* Status */}
              <div className="flex items-center gap-3 border-t border-background/10 px-6 py-4">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                <span className="font-mono text-xs text-background/40">
                  Tank data synced
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        .code-line-reveal {
          opacity: 0;
          transform: translateX(-8px);
          animation: lineReveal 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes lineReveal {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .code-char-reveal {
          opacity: 0;
          filter: blur(8px);
          animation: charReveal 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes charReveal {
          to {
            opacity: 1;
            filter: blur(0);
          }
        }
      `}</style>
    </section>
  )
}
