import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { CustomTooltip } from "@/components/ui/CustomToolTip"
import { useDashboardStore } from "@/hooks/useDashboardStore"
import { ResponsiveContainer, CartesianGrid, XAxis, YAxis, Area, Bar, AreaChart, BarChart, Tooltip } from "recharts"

const BLUE = "#6366f1"
const TEAL = "#2dd4bf"

export const DashboardCharts = () => {

    const { revenueData, categoryData } = useDashboardStore()

    return (
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-7">
            <Card className="bg-card border-border xl:col-span-4">
                <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-foreground text-base">Revenue Overview</CardTitle>
                        <Badge variant="secondary" className="bg-secondary text-secondary-foreground font-normal">Last 7 months</Badge>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="h-70">
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
                    <div className="h-70">
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
    )
}
