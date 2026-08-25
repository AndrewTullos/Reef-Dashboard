"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export const description = "Reef parameter trend chart"

const chartData = [
  { date: "2026-06-01", value: 8.0 },
  { date: "2026-06-05", value: 8.1 },
  { date: "2026-06-09", value: 8.15 },
  { date: "2026-06-13", value: 8.1 },
  { date: "2026-06-17", value: 8.2 },
  { date: "2026-06-21", value: 8.25 },
  { date: "2026-06-25", value: 8.2 },
  { date: "2026-06-29", value: 8.3 },
  { date: "2026-07-03", value: 8.35 },
  { date: "2026-07-07", value: 8.3 },
  { date: "2026-07-11", value: 8.25 },
  { date: "2026-07-15", value: 8.35 },
  { date: "2026-07-19", value: 8.4 },
  { date: "2026-07-23", value: 8.35 },
  { date: "2026-07-27", value: 8.3 },
  { date: "2026-07-31", value: 8.25 },
  { date: "2026-08-04", value: 8.3 },
  { date: "2026-08-08", value: 8.4 },
  { date: "2026-08-12", value: 8.35 },
  { date: "2026-08-16", value: 8.3 },
  { date: "2026-08-20", value: 8.35 },
  { date: "2026-08-24", value: 8.3 },
]

const chartConfig = {
  value: {
    label: "Alkalinity",
    color: "var(--primary)",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState("90d")

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d")
    }
  }, [isMobile])

  const filteredData = React.useMemo(() => {
    const referenceDate = new Date("2026-08-24")

    let daysToSubtract = 90

    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }

    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)

    return chartData.filter((item) => {
      return new Date(item.date) >= startDate
    })
  }, [timeRange])

  return (
    <Card className="@container/card border-border/60 bg-card/70 shadow-none">
      <CardHeader>
        <div>
          <CardTitle>Parameter trends</CardTitle>

          <CardDescription>
            Track stability, drift, and changes over time.
          </CardDescription>
        </div>

        <CardAction className="flex items-center gap-2">
          <Select defaultValue="alkalinity">
            <SelectTrigger
              className="hidden w-[145px] @[600px]/card:flex"
              size="sm"
              aria-label="Select parameter"
            >
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="alkalinity">Alkalinity</SelectItem>
              <SelectItem value="calcium">Calcium</SelectItem>
              <SelectItem value="magnesium">Magnesium</SelectItem>
              <SelectItem value="ph">pH</SelectItem>
              <SelectItem value="salinity">Salinity</SelectItem>
              <SelectItem value="temperature">Temperature</SelectItem>
              <SelectItem value="nitrate">Nitrate</SelectItem>
              <SelectItem value="phosphate">Phosphate</SelectItem>
            </SelectContent>
          </Select>

          <ToggleGroup
            multiple={false}
            value={timeRange ? [timeRange] : []}
            onValueChange={(value) => {
              setTimeRange(value[0] ?? "90d")
            }}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:px-3! @[767px]/card:flex"
          >
            <ToggleGroupItem value="7d">7D</ToggleGroupItem>
            <ToggleGroupItem value="30d">30D</ToggleGroupItem>
            <ToggleGroupItem value="90d">90D</ToggleGroupItem>
          </ToggleGroup>

          <Select
            value={timeRange}
            onValueChange={(value) => {
              if (value !== null) {
                setTimeRange(value)
              }
            }}
          >
            <SelectTrigger
              className="flex w-[90px] @[767px]/card:hidden"
              size="sm"
              aria-label="Select time range"
            >
              <SelectValue />
            </SelectTrigger>

            <SelectContent className="rounded-xl">
              <SelectItem value="7d">7 days</SelectItem>
              <SelectItem value="30d">30 days</SelectItem>
              <SelectItem value="90d">90 days</SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>

      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <div className="mb-4 flex items-center justify-between px-2">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-semibold tracking-tight tabular-nums">
                8.3
              </span>

              <span className="text-sm text-muted-foreground">dKH</span>
            </div>

            <p className="mt-1 text-xs text-muted-foreground">
              Target range 7.5–9.0 dKH
            </p>
          </div>

          <div className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
            Stable
          </div>
        </div>

        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[260px] w-full"
        >
          <AreaChart
            data={filteredData}
            margin={{
              left: 0,
              right: 12,
              top: 10,
            }}
          >
            <defs>
              <linearGradient id="fillValue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-value)"
                  stopOpacity={0.28}
                />

                <stop
                  offset="95%"
                  stopColor="var(--color-value)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} strokeDasharray="3 3" />

            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              minTickGap={32}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />

            <YAxis
              domain={[7.5, 9]}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              width={32}
            />

            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />

            <Area
              dataKey="value"
              type="natural"
              fill="url(#fillValue)"
              stroke="var(--color-value)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
