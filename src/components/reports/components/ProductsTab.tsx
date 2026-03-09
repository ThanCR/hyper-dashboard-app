import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { topProducts } from "@/mocks/reports-data.mock"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"


export const ProductsTab = () => {
  return (
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
  )
}
