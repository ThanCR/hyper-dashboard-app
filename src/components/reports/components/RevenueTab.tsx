import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownRight, ArrowUpRight, BarChart3, DollarSign, TrendingUp } from "lucide-react"
import { ResponsiveContainer, CartesianGrid, XAxis, YAxis, Legend, Area, AreaChart, Tooltip } from "recharts"
import { CustomTooltip } from "../../ui/CustomToolTip"
import { useReportsStore } from "@/hooks/useReportsStore"


const BLUE = "#6366f1"
const TEAL = "#2dd4bf"

export const RevenueTab = () => {

    const {monthlyRevenue} = useReportsStore()

    return (
        <div className="flex flex-col gap-6">
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

            <Card className="bg-card border-border">
                <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-foreground text-base">Revenue vs Profit</CardTitle>
                        <Badge variant="secondary" className="bg-secondary text-secondary-foreground font-normal">Last 7 months</Badge>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="h-85">
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
    )
}
