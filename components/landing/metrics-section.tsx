"use client"

import { useEffect, useState, useRef } from "react"

function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
}: {
  end: number
  suffix?: string
  prefix?: string
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const duration = 2000
          const startTime = performance.now()

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * end))

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, hasAnimated])

  return (
    <div ref={ref} className="font-display text-6xl tracking-tight lg:text-8xl">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}

const metrics = [
  {
    value: 8,
    suffix: ".3 dKH",
    prefix: "",
    label: "Current alkalinity",
  },
  {
    value: 14,
    suffix: " ppm",
    prefix: "",
    label: "Current nitrate",
  },
  {
    value: 78,
    suffix: "°F",
    prefix: "",
    label: "Tank temperature",
  },
  {
    value: 7,
    suffix: " days",
    prefix: "",
    label: "Recent trend window",
  },
]

export function MetricsSection() {
  const [time, setTime] = useState(new Date())
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

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
      id="studio"
      ref={sectionRef}
      className="relative border-y border-foreground/10 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-8 lg:mb-24 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mb-6 inline-flex items-center gap-3 font-mono text-sm text-muted-foreground">
              <span className="h-px w-8 bg-foreground/30" />
              Tank snapshot{" "}
            </span>
            <h2
              className={`font-display text-4xl tracking-tight transition-all duration-700 lg:text-6xl ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              Your reef,
              <br />
              at a glance.{" "}
            </h2>
          </div>
          <div className="flex items-center gap-4 font-mono text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              Monitoring
            </span>
            <span className="text-foreground/30">|</span>
            <span>{time.toLocaleTimeString()}</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 gap-px bg-foreground/10 md:grid-cols-2">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`bg-background p-8 transition-all duration-700 lg:p-12 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <AnimatedCounter
                end={typeof metric.value === "number" ? metric.value : 0}
                suffix={metric.suffix}
                prefix={metric.prefix}
              />
              <div className="mt-4 text-lg text-muted-foreground">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
