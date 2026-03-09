import { SummaryCards } from "./components/SummaryCards"
import { DashboardRecentOrders } from "./components/DashboardRecentOrders"
import { DashboardCharts } from "./components/DashboardCharts"
import { DashboardLowStock } from "./components/DashboardLowStock"

export function DashboardView() {
  return (
    <div className="flex flex-col gap-6">
      <SummaryCards />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <DashboardRecentOrders />
        <DashboardCharts/>
        <DashboardLowStock/>
      </div>
    </div>
  )
}
