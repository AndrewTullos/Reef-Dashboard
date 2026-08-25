"use client"

import { Beaker, Droplets, Fish, Pipette, Utensils } from "lucide-react"

import { Badge } from "@/components/ui/badge"

const activity = [
  {
    id: 1,
    type: "Test",
    title: "Water parameters tested",
    detail: "ALK 8.3 · CA 410 · MG 1320 · NO₃ 25",
    time: "Today, 8:42 PM",
    icon: Beaker,
  },
  {
    id: 2,
    type: "Maintenance",
    title: "Water change",
    detail: "2.5 gallons changed",
    time: "Yesterday",
    icon: Droplets,
  },
  {
    id: 3,
    type: "Feeding",
    title: "Coral feeding logged",
    detail: "Frozen mysis + reef food",
    time: "Aug 22",
    icon: Utensils,
  },
  {
    id: 4,
    type: "Livestock",
    title: "Duncan coral added",
    detail: "10-head colony",
    time: "Aug 18",
    icon: Fish,
  },
  {
    id: 5,
    type: "Dosing",
    title: "Alkalinity adjustment",
    detail: "Small corrective dose logged",
    time: "Aug 17",
    icon: Pipette,
  },
]

export function RecentActivity() {
  return (
    <section className="px-4 lg:px-6">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
            Tank log
          </p>

          <h2 className="mt-1 text-lg font-semibold tracking-tight">
            Recent activity
          </h2>
        </div>

        <button className="text-sm font-medium text-primary transition-opacity hover:opacity-70">
          View full log
        </button>
      </div>

      <div className="overflow-hidden rounded-xl border border-border/60 bg-card/60">
        {activity.map((item, index) => {
          const Icon = item.icon

          return (
            <div
              key={item.id}
              className={`flex items-start gap-4 p-4 transition-colors hover:bg-muted/30 ${
                index !== activity.length - 1 ? "border-b border-border/60" : ""
              }`}
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/8 text-primary">
                <Icon className="size-4" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-medium">{item.title}</p>

                  <Badge
                    variant="outline"
                    className="border-border/60 px-1.5 text-[10px] font-normal text-muted-foreground"
                  >
                    {item.type}
                  </Badge>
                </div>

                <p className="mt-1 text-sm text-muted-foreground">
                  {item.detail}
                </p>
              </div>

              <span className="shrink-0 text-xs text-muted-foreground">
                {item.time}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
