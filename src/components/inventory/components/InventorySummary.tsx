import { Card, CardContent } from "@/components/ui/card"
import { Package } from "lucide-react"

interface Props{
    totalItems: number,
    inStockCount: number,
    lowStockCount: number,
    outOfStockCount: number
}

export const InventorySummary = ({totalItems, inStockCount, lowStockCount, outOfStockCount}: Props) => {
  return (
    <div>
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                <Card className="bg-card border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                        <Package className="size-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Total Items</p>
                        <p className="text-xl font-bold text-foreground">{totalItems}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-success/10">
                        <Package className="size-5 text-success" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">In Stock</p>
                        <p className="text-xl font-bold text-foreground">{inStockCount}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-warning/10">
                        <Package className="size-5 text-warning" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Low Stock</p>
                        <p className="text-xl font-bold text-foreground">{lowStockCount}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-destructive/10">
                        <Package className="size-5 text-destructive" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Out of Stock</p>
                        <p className="text-xl font-bold text-foreground">{outOfStockCount}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
        
    </div>
  )
}
