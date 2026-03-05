"use client"

import {
  BarChart3,
  TrendingUp,
  DollarSign,
  Users,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts"

const monthlyRevenue = [
  { month: "Sep", revenue: 28400, profit: 8520 },
  { month: "Oct", revenue: 32100, profit: 9630 },
  { month: "Nov", revenue: 41800, profit: 12540 },
  { month: "Dec", revenue: 52500, profit: 15750 },
  { month: "Jan", revenue: 38200, profit: 11460 },
  { month: "Feb", revenue: 44700, profit: 13410 },
  { month: "Mar", revenue: 35100, profit: 10530 },
]

const weeklyOrders = [
  { day: "Mon", orders: 42, returns: 3 },
  { day: "Tue", orders: 56, returns: 5 },
  { day: "Wed", orders: 48, returns: 2 },
  { day: "Thu", orders: 63, returns: 7 },
  { day: "Fri", orders: 71, returns: 4 },
  { day: "Sat", orders: 85, returns: 6 },
  { day: "Sun", orders: 39, returns: 2 },
]

const categoryBreakdown = [
  { name: "Electronics", value: 42, fill: "#6366f1" },
  { name: "Clothing", value: 26, fill: "#2dd4bf" },
  { name: "Furniture", value: 16, fill: "#f59e0b" },
  { name: "Food", value: 10, fill: "#ef4444" },
  { name: "Other", value: 6, fill: "#8b5cf6" },
]

const topProducts = [
  { name: "Wireless Headphones", sales: 342, revenue: 27360, growth: 12.5 },
  { name: "Mechanical Keyboard", sales: 278, revenue: 41700, growth: 8.3 },
  { name: "USB-C Hub", sales: 256, revenue: 11776, growth: -3.2 },
  { name: "Laptop Stand", sales: 198, revenue: 17820, growth: 15.7 },
  { name: "Webcam Pro", sales: 167, revenue: 21710, growth: 6.1 },
]

const customerGrowth = [
  { month: "Sep", newCustomers: 124, returning: 312 },
  { month: "Oct", newCustomers: 156, returning: 345 },
  { month: "Nov", newCustomers: 189, returning: 401 },
  { month: "Dec", newCustomers: 234, returning: 478 },
  { month: "Jan", newCustomers: 178, returning: 423 },
  { month: "Feb", newCustomers: 201, returning: 456 },
  { month: "Mar", newCustomers: 167, returning: 389 },
]

const BLUE = "#6366f1"
const TEAL = "#2dd4bf"
const AMBER = "#f59e0b"

function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-border bg-card px-3 py-2 shadow-lg">
        <p className="text-sm font-medium text-foreground">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-xs text-muted-foreground">
            {entry.name}: <span className="font-medium text-foreground">
              {typeof entry.value === "number" && (entry.name === "revenue" || entry.name === "profit")
                ? `$${entry.value.toLocaleString()}`
                : entry.value}
            </span>
          </p>
        ))}
      </div>
    )
  }
  return null
}

function PieTooltip({ active, payload }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-border bg-card px-3 py-2 shadow-lg">
        <p className="text-sm font-medium text-foreground">{payload[0].name}</p>
        <p className="text-xs text-muted-foreground">{payload[0].value}% of sales</p>
      </div>
    )
  }
  return null
}

export function ReportsView() {
  return (
    <div className="flex flex-col gap-6">
      <Tabs defaultValue="revenue" className="w-full">
        <TabsList className="bg-secondary border border-border">
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
        </TabsList>

        {/* Revenue Tab */}
        <TabsContent value="revenue" className="mt-6">
          <div className="flex flex-col gap-6">
            {/* Summary */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Card className="bg-card border-border">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">Total Revenue</p>
                      <p className="text-2xl font-bold text-foreground">$272,800</p>
                      <p className="text-xs text-success flex items-center gap-1 mt-1">
                        <ArrowUpRight className="size-3" /> +14.2% from last period
                      </p>
                    </div>
                    <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
                      <DollarSign className="size-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">Total Profit</p>
                      <p className="text-2xl font-bold text-foreground">$81,840</p>
                      <p className="text-xs text-success flex items-center gap-1 mt-1">
                        <ArrowUpRight className="size-3" /> +11.8% from last period
                      </p>
                    </div>
                    <div className="flex size-12 items-center justify-center rounded-xl bg-success/10">
                      <TrendingUp className="size-6 text-success" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">Profit Margin</p>
                      <p className="text-2xl font-bold text-foreground">30.0%</p>
                      <p className="text-xs text-destructive flex items-center gap-1 mt-1">
                        <ArrowDownRight className="size-3" /> -1.3% from last period
                      </p>
                    </div>
                    <div className="flex size-12 items-center justify-center rounded-xl bg-warning/10">
                      <BarChart3 className="size-6 text-warning" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Revenue Chart */}
            <Card className="bg-card border-border">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-foreground text-base">Revenue vs Profit</CardTitle>
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground font-normal">Last 7 months</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-[340px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={monthlyRevenue} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
                      <defs>
                        <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={BLUE} stopOpacity={0.3} />
                          <stop offset="95%" stopColor={BLUE} stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="profGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={TEAL} stopOpacity={0.3} />
                          <stop offset="95%" stopColor={TEAL} stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                      <XAxis dataKey="month" tick={{ fill: "#888", fontSize: 12 }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fill: "#888", fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend wrapperStyle={{ fontSize: 12, color: "#888" }} />
                      <Area type="monotone" dataKey="revenue" stroke={BLUE} fill="url(#revGrad)" strokeWidth={2} name="revenue" />
                      <Area type="monotone" dataKey="profit" stroke={TEAL} fill="url(#profGrad)" strokeWidth={2} name="profit" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Orders Tab */}
        <TabsContent value="orders" className="mt-6">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
              <Card className="bg-card border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-foreground text-base">Weekly Order Volume</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[320px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={weeklyOrders} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                        <XAxis dataKey="day" tick={{ fill: "#888", fontSize: 12 }} axisLine={false} tickLine={false} />
                        <YAxis tick={{ fill: "#888", fontSize: 12 }} axisLine={false} tickLine={false} />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend wrapperStyle={{ fontSize: 12, color: "#888" }} />
                        <Bar dataKey="orders" fill={BLUE} radius={[4, 4, 0, 0]} name="orders" />
                        <Bar dataKey="returns" fill="#ef4444" radius={[4, 4, 0, 0]} name="returns" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-foreground text-base">Sales by Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[320px] flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={categoryBreakdown}
                          cx="50%"
                          cy="50%"
                          innerRadius={70}
                          outerRadius={110}
                          paddingAngle={3}
                          dataKey="value"
                          stroke="none"
                        >
                          {categoryBreakdown.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                        <Tooltip content={<PieTooltip />} />
                        <Legend wrapperStyle={{ fontSize: 12, color: "#888" }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Products Tab */}
        <TabsContent value="products" className="mt-6">
          <Card className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-foreground text-base">Top Selling Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                {topProducts.map((product, index) => (
                  <div key={product.name} className="flex items-center justify-between rounded-lg bg-secondary/50 px-4 py-3">
                    <div className="flex items-center gap-4">
                      <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                        {index + 1}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">{product.name}</span>
                        <span className="text-xs text-muted-foreground">{product.sales} units sold</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="flex flex-col items-end">
                        <span className="text-sm font-semibold text-foreground">${product.revenue.toLocaleString()}</span>
                        <span className={`text-xs flex items-center gap-0.5 ${product.growth > 0 ? "text-success" : "text-destructive"}`}>
                          {product.growth > 0 ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}
                          {Math.abs(product.growth)}%
                        </span>
                      </div>
                      {/* Mini progress bar */}
                      <div className="hidden w-24 sm:block">
                        <div className="h-2 rounded-full bg-secondary">
                          <div
                            className="h-2 rounded-full bg-primary"
                            style={{ width: `${(product.sales / 342) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Customers Tab */}
        <TabsContent value="customers" className="mt-6">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Card className="bg-card border-border">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">Total Customers</p>
                      <p className="text-2xl font-bold text-foreground">3,053</p>
                      <p className="text-xs text-success flex items-center gap-1 mt-1">
                        <ArrowUpRight className="size-3" /> +9.5% growth
                      </p>
                    </div>
                    <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
                      <Users className="size-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">Retention Rate</p>
                      <p className="text-2xl font-bold text-foreground">72.4%</p>
                      <p className="text-xs text-success flex items-center gap-1 mt-1">
                        <ArrowUpRight className="size-3" /> +2.1% from last month
                      </p>
                    </div>
                    <div className="flex size-12 items-center justify-center rounded-xl bg-success/10">
                      <TrendingUp className="size-6 text-success" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-foreground text-base">Customer Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[340px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={customerGrowth} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                      <XAxis dataKey="month" tick={{ fill: "#888", fontSize: 12 }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fill: "#888", fontSize: 12 }} axisLine={false} tickLine={false} />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend wrapperStyle={{ fontSize: 12, color: "#888" }} />
                      <Line type="monotone" dataKey="newCustomers" stroke={BLUE} strokeWidth={2} dot={{ r: 4, fill: BLUE }} name="newCustomers" />
                      <Line type="monotone" dataKey="returning" stroke={TEAL} strokeWidth={2} dot={{ r: 4, fill: TEAL }} name="returning" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
