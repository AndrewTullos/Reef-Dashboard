import { Activity, CheckCircle2, Clock3, TriangleAlert } from "lucide-react"

export function ReefOverview() {
  return (
    <section className="px-4 lg:px-6">
      <div className="grid overflow-hidden rounded-xl border border-border/60 bg-card/60 md:grid-cols-3">
        <div className="flex items-center gap-4 p-5 md:border-r md:border-border/60">
          <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Activity className="size-4" />
          </div>

          <div>
            <p className="text-xs text-muted-foreground">Reef health</p>

            <div className="mt-0.5 flex items-center gap-2">
              <span className="text-xl font-semibold tabular-nums">92</span>

              <span className="flex items-center gap-1 text-xs text-primary">
                <CheckCircle2 className="size-3" />
                Stable
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 border-t border-border/60 p-5 md:border-t-0 md:border-r">
          <div className="flex size-10 items-center justify-center rounded-lg bg-muted text-muted-foreground">
            <Clock3 className="size-4" />
          </div>

          <div>
            <p className="text-xs text-muted-foreground">Last tested</p>

            <div className="mt-0.5 text-sm font-medium">Today, 8:42 PM</div>

            <div className="text-xs text-muted-foreground">
              6 parameters logged
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 border-t border-border/60 p-5 md:border-t-0">
          <div className="flex size-10 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
            <TriangleAlert className="size-4" />
          </div>

          <div>
            <p className="text-xs text-muted-foreground">Needs attention</p>

            <div className="mt-0.5 text-sm font-medium">Nitrate rising</div>

            <div className="text-xs text-muted-foreground">
              +4 ppm over 7 days
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
