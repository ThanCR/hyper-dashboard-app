import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CustomTooltip } from '@/components/ui/CustomToolTip'
import { PieToolTip } from '@/components/ui/PieToolTip'
import { useReportsStore } from '@/hooks/useReportsStore'
import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const BLUE = "#6366f1"

export const OrdersTab = () => {

  const {weeklyOrders, categoryBreakdown} = useReportsStore()

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <Card className="bg-card border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-foreground text-base">Weekly Order Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
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
            <div className="h-80 flex items-center justify-center">
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
                  <Tooltip content={<PieToolTip />} />
                  <Legend wrapperStyle={{ fontSize: 12, color: "#888" }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
