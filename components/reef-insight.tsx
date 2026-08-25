import { ArrowRight, Sparkles, TrendingUp } from "lucide-react"

import { Card } from "@/components/ui/card"

export function ReefInsight() {
  return (
    <section className="px-4 lg:px-6">
      <Card className="relative overflow-hidden border-primary/15 bg-primary/[0.025] p-6 shadow-none">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Sparkles className="size-4" />
            </div>

            <div>
              <div className="mb-1 flex items-center gap-2">
                <p className="text-xs font-medium tracking-[0.16em] text-primary uppercase">
                  ReefPilot insight
                </p>

                <TrendingUp className="size-3 text-orange-500" />
              </div>

              <h3 className="text-base font-semibold">
                Nitrate is trending upward
              </h3>

              <p className="mt-1 max-w-2xl text-sm leading-6 text-muted-foreground">
                Nitrate has increased 22% over the last 14 days. Feeding
                frequency also increased during this period. No immediate action
                is required, but the trend is worth watching.
              </p>
            </div>
          </div>

          <button className="flex shrink-0 items-center gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-70">
            View details
            <ArrowRight className="size-4" />
          </button>
        </div>
      </Card>
    </section>
  )
}
