import type { Category } from "./Category"
import type { InventoryItem } from "./InventoryItem"
import type { MonthRevenue } from "./MonthRevenue"
import type { Order } from "./Order"

export type DashboardData = {
    categoryData: Category[],
    lowStockItems: InventoryItem[],
    recentOrders: Order[],
    revenueData: MonthRevenue[]
}