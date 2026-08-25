import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { RecentActivity } from "@/components/RecentActivity"
import { SectionCards } from "@/components/section-cards"
import { ReefOverview } from "@/components/reef-overview"
import { ReefInsight } from "@/components/reef-insight"
import { SiteHeader } from "@/components/site-header"

import data from "./data.json"

export default function Page() {
  return (
    <>
      <SiteHeader />

      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col">
          <div className="flex flex-col gap-6 py-6">
            <ReefOverview />

            <SectionCards />

            <div className="px-4 lg:px-6">
              <ChartAreaInteractive />
            </div>

            <ReefInsight />

            <RecentActivity data={data} />
          </div>
        </div>
      </div>
    </>
  )
}
