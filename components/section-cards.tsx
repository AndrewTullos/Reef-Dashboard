"use client"

import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react"

import { Card } from "@/components/ui/card"

const parameters = [
  {
    name: "Alkalinity",
    short: "ALK",
    value: "8.3",
    unit: "dKH",
    status: "Stable",
    trend: "stable",
    detail: "7-day avg 8.2",
  },
  {
    name: "Calcium",
    short: "CA",
    value: "410",
    unit: "ppm",
    status: "Stable",
    trend: "stable",
    detail: "Within target range",
  },
  {
    name: "Magnesium",
    short: "MG",
    value: "1320",
    unit: "ppm",
    status: "Stable",
    trend: "stable",
    detail: "No meaningful drift",
  },
  {
    name: "pH",
    short: "PH",
    value: "8.15",
    unit: "",
    status: "Stable",
    trend: "up",
    detail: "+0.04 this week",
  },
  {
    name: "Salinity",
    short: "SG",
    value: "1.026",
    unit: "sg",
    status: "Stable",
    trend: "stable",
    detail: "Target 1.025–1.026",
  },
  {
    name: "Temperature",
    short: "TEMP",
    value: "78.0",
    unit: "°F",
    status: "Stable",
    trend: "stable",
    detail: "Range 77.6–78.4",
  },
  {
    name: "Nitrate",
    short: "NO₃",
    value: "25",
    unit: "ppm",
    status: "Rising",
    trend: "up",
    detail: "+4 ppm this week",
  },
  {
    name: "Phosphate",
    short: "PO₄",
    value: "0.10",
    unit: "ppm",
    status: "Watch",
    trend: "up",
    detail: "+0.02 this week",
  },
]

function TrendIcon({ trend }: { trend: string }) {
  if (trend === "up") {
    return <ArrowUpRight className="size-3.5" />
  }

  if (trend === "down") {
    return <ArrowDownRight className="size-3.5" />
  }

  return <ArrowRight className="size-3.5" />
}

export function SectionCards() {
  return (
    <section className="px-4 lg:px-6">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
            Water chemistry
          </p>

          <h2 className="mt-1 text-lg font-semibold tracking-tight">
            Latest parameters
          </h2>
        </div>

        <span className="text-xs text-muted-foreground">Updated today</span>
      </div>

      <div className="grid grid-cols-2 gap-3 @3xl/main:grid-cols-4">
        {parameters.map((parameter) => (
          <Card
            key={parameter.name}
            className="group relative overflow-hidden border-border/60 bg-card/70 p-5 shadow-none backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card"
          >
            <div className="mb-8 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                  {parameter.short}
                </div>

                <div className="mt-1 text-sm text-muted-foreground">
                  {parameter.name}
                </div>
              </div>

              <div
                className={`flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-medium ${
                  parameter.status === "Stable"
                    ? "bg-primary/8 text-primary"
                    : "bg-orange-500/10 text-orange-500"
                } `}
              >
                <TrendIcon trend={parameter.trend} />
                {parameter.status}
              </div>
            </div>

            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl font-semibold tracking-[-0.04em] tabular-nums">
                {parameter.value}
              </span>

              {parameter.unit && (
                <span className="text-sm text-muted-foreground">
                  {parameter.unit}
                </span>
              )}
            </div>

            <div className="mt-2 text-xs text-muted-foreground">
              {parameter.detail}
            </div>

            <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </Card>
        ))}
      </div>
    </section>
  )
}
