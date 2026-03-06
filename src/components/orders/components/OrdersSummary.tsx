import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, PackageCheck, Clock } from "lucide-react"

interface Props{
    totalRevenue: number,
    completedOrders: number,
    pendingOrders: number,
}

export const OrdersSummary = ({totalRevenue, completedOrders, pendingOrders}:Props) => {
    return (
        < div className = "grid grid-cols-1 gap-4 sm:grid-cols-3" >
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <DollarSign className="size-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Total Revenue</p>
                <p className="text-xl font-bold text-foreground">${totalRevenue.toLocaleString("en-US", { minimumFractionDigits: 2 })}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-success/10">
                <PackageCheck className="size-5 text-success" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Completed</p>
                <p className="text-xl font-bold text-foreground">{completedOrders}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-warning/10">
                <Clock className="size-5 text-warning" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Pending</p>
                <p className="text-xl font-bold text-foreground">{pendingOrders}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div >
  )
}
