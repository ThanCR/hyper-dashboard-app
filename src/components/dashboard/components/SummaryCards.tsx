import { DollarSign, ShoppingCart, Package, TrendingUp } from "lucide-react"
import { StatCard } from "./StatCard"


export const SummaryCards = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value="$182,400"
          change="+12.5%"
          changeType="up"
          icon={<DollarSign className="size-6" />}
        />
        <StatCard
          title="Total Orders"
          value="1,392"
          change="+8.2%"
          changeType="up"
          icon={<ShoppingCart className="size-6" />}
        />
        <StatCard
          title="Inventory Items"
          value="3,847"
          change="-2.1%"
          changeType="down"
          icon={<Package className="size-6" />}
        />
        <StatCard
          title="Avg. Order Value"
          value="$131.04"
          change="+4.3%"
          changeType="up"
          icon={<TrendingUp className="size-6" />}
        />
      </div>    
  )
}
