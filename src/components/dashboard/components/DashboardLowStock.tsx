import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { useDashboardStore } from '@/hooks/useDashboardStore'
import { AlertTriangle } from 'lucide-react'


export const DashboardLowStock = () => {

  const {lowStockItems} = useDashboardStore()

  return (
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
  )
}
