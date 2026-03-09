import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { customerGrowth } from "@/mocks/reports-data.mock"
import { ArrowUpRight, TrendingUp, Users } from "lucide-react"
import { LineChart, CartesianGrid, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { CustomTooltip } from "../../ui/CustomToolTip"

const BLUE = "#6366f1"
const TEAL = "#2dd4bf"

export const CustomersTab = () => {
    return (
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
                    <div className="h-85">
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
    )
}
