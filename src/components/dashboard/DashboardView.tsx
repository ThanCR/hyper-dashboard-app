import {
  Package,
  ShoppingCart,
  DollarSign,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  AlertTriangle,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts"

const revenueData = [
  { month: "Jan", revenue: 18400, orders: 145 },
  { month: "Feb", revenue: 22100, orders: 172 },
  { month: "Mar", revenue: 19800, orders: 158 },
  { month: "Apr", revenue: 26500, orders: 201 },
  { month: "May", revenue: 31200, orders: 234 },
  { month: "Jun", revenue: 28700, orders: 215 },
  { month: "Jul", revenue: 35100, orders: 267 },
]

const categoryData = [
  { name: "Electronics", value: 42500 },
  { name: "Clothing", value: 31200 },
  { name: "Furniture", value: 18900 },
  { name: "Food", value: 15600 },
  { name: "Other", value: 9800 },
]

const recentOrders = [
  { id: "ORD-7291", customer: "Sarah Chen", amount: "$1,240.00", status: "Completed", time: "12 min ago" },
  { id: "ORD-7290", customer: "Marcus Webb", amount: "$890.50", status: "Processing", time: "25 min ago" },
  { id: "ORD-7289", customer: "Aisha Patel", amount: "$2,150.00", status: "Completed", time: "1 hr ago" },
  { id: "ORD-7288", customer: "Tom Rogers", amount: "$445.00", status: "Shipped", time: "2 hr ago" },
  { id: "ORD-7287", customer: "Lisa Kim", amount: "$3,200.00", status: "Completed", time: "3 hr ago" },
]

const lowStockItems = [
  { name: "Wireless Headphones", sku: "WH-201", stock: 3, threshold: 10 },
  { name: "USB-C Hub", sku: "UC-445", stock: 5, threshold: 15 },
  { name: "Laptop Stand", sku: "LS-112", stock: 2, threshold: 8 },
  { name: "Webcam HD", sku: "WC-890", stock: 7, threshold: 20 },
]

const BLUE = "#6366f1"
const TEAL = "#2dd4bf"

function StatCard({
  title,
  value,
  change,
  changeType,
  icon,
}: {
  title: string
  value: string
  change: string
  changeType: "up" | "down"
  icon: React.ReactNode
}) {
  return (
    <Card className="bg-card border-border">
      <CardContent className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-sm text-muted-foreground">{title}</span>
            <span className="text-2xl font-bold text-foreground">{value}</span>
            <div className="flex items-center gap-1 text-xs">
              {changeType === "up" ? (
                <TrendingUp className="size-3 text-success" />
              ) : (
                <TrendingDown className="size-3 text-destructive" />
              )}
              <span className={changeType === "up" ? "text-success" : "text-destructive"}>
                {change}
              </span>
              <span className="text-muted-foreground">vs last month</span>
            </div>
          </div>
          <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-border bg-card px-3 py-2 shadow-lg">
        <p className="text-sm font-medium text-foreground">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-xs text-muted-foreground">
            {entry.name}: <span className="font-medium text-foreground">{typeof entry.value === "number" && entry.name === "revenue" ? `$${entry.value.toLocaleString()}` : entry.value}</span>
          </p>
        ))}
      </div>
    )
  }
  return null
}

export function DashboardView() {
  return (
    <div className="flex flex-col gap-6">
      {/* Stat Cards */}
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

      {/* Charts Row */}
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-7">
        <Card className="bg-card border-border xl:col-span-4">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-foreground text-base">Revenue Overview</CardTitle>
              <Badge variant="secondary" className="bg-secondary text-secondary-foreground font-normal">Last 7 months</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={BLUE} stopOpacity={0.3} />
                      <stop offset="95%" stopColor={BLUE} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                  <XAxis dataKey="month" tick={{ fill: "#888", fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "#888", fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" dataKey="revenue" stroke={BLUE} fill="url(#revenueGradient)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border xl:col-span-3">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-foreground text-base">Sales by Category</CardTitle>
              <Badge variant="secondary" className="bg-secondary text-secondary-foreground font-normal">This month</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                  <XAxis dataKey="name" tick={{ fill: "#888", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "#888", fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="value" fill={TEAL} radius={[4, 4, 0, 0]} name="revenue" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        {/* Recent Orders */}
        <Card className="bg-card border-border">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-foreground text-base">Recent Orders</CardTitle>
              <button className="flex items-center gap-1 text-xs text-primary hover:underline">
                View all <ArrowUpRight className="size-3" />
              </button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between rounded-lg bg-secondary/50 px-3 py-2.5">
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-foreground">{order.customer}</span>
                      <span className="text-xs font-mono text-muted-foreground">{order.id}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{order.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-foreground">{order.amount}</span>
                    <Badge
                      variant="secondary"
                      className={
                        order.status === "Completed"
                          ? "bg-success/15 text-success border-0"
                          : order.status === "Processing"
                          ? "bg-warning/15 text-warning border-0"
                          : "bg-primary/15 text-primary border-0"
                      }
                    >
                      {order.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Low Stock Alerts */}
        <Card className="bg-card border-border">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-foreground text-base flex items-center gap-2">
                <AlertTriangle className="size-4 text-warning" />
                Low Stock Alerts
              </CardTitle>
              <Badge variant="destructive" className="bg-destructive/15 text-destructive border-0">
                {lowStockItems.length} items
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              {lowStockItems.map((item) => (
                <div key={item.sku} className="flex items-center justify-between rounded-lg bg-secondary/50 px-3 py-2.5">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium text-foreground">{item.name}</span>
                    <span className="text-xs font-mono text-muted-foreground">{item.sku}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col items-end gap-0.5">
                      <span className="text-sm font-semibold text-destructive">{item.stock} left</span>
                      <span className="text-xs text-muted-foreground">Min: {item.threshold}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
