import { Badge } from "@/components/ui/badge"
import  { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useDashboardStore } from "@/hooks/useDashboardStore"
import { ArrowUpRight } from "lucide-react"

export const DashboardRecentOrders = () => {

  const {recentOrders} = useDashboardStore()

  return (
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
                    <span className="text-xs text-muted-foreground">{order.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-foreground">$ {order.total}</span>
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
  )
}
