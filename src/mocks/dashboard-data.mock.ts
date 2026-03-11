import type { Category } from "@/types/Category"
import type { InventoryItem } from "@/types/InventoryItem"
import type { MonthRevenue } from "@/types/MonthRevenue"
import type { Order } from "@/types/Order"

export const revenueData: MonthRevenue[] = [
  { month: "Jan", revenue: 15000, orders: 145 },
  { month: "Feb", revenue: 22100, orders: 172 },
  { month: "Mar", revenue: 19800, orders: 158 },
  { month: "Apr", revenue: 26500, orders: 201 },
  { month: "May", revenue: 31200, orders: 234 },
  { month: "Jun", revenue: 28700, orders: 215 },
  { month: "Jul", revenue: 35100, orders: 267 },
]

export const categoryData: Category[] = [
  { name: "Electronics", value: 42500 },
  { name: "Clothing", value: 31200 },
  { name: "Furniture", value: 18900 },
  { name: "Food", value: 15600 },
  { name: "Other", value: 9800 },
]

export const recentOrders: Order[] = [
  { id: "ORD-7291", customer: "Sarah Chen", email: "sarah@email.com", items: 3, total: 1240.00, status: "Completed", paymentMethod: "Credit Card", date: "Mar 5, 2026" },
  { id: "ORD-7290", customer: "Marcus Webb", email: "marcus@email.com", items: 1, total: 890.50, status: "Processing", paymentMethod: "PayPal", date: "Mar 5, 2026" },
  { id: "ORD-7289", customer: "Aisha Patel", email: "aisha@email.com", items: 5, total: 2150.00, status: "Completed", paymentMethod: "Credit Card", date: "Mar 4, 2026" },
  { id: "ORD-7288", customer: "Tom Rogers", email: "tom@email.com", items: 2, total: 445.00, status: "Shipped", paymentMethod: "Debit Card", date: "Mar 4, 2026" },
  { id: "ORD-7287", customer: "Lisa Kim", email: "lisa@email.com", items: 4, total: 3200.00, status: "Completed", paymentMethod: "Wire Transfer", date: "Mar 3, 2026" },
]

export const lowStockItems: InventoryItem[] = [

  { id: "8", name: "Standing Desk Mat", sku: "SDM-223", category: "Furniture", price: 59.99, stock: 3, status: "Low Stock", lastUpdated: "2 days ago", threshold: 10 },
  { id: "4", name: "HD Webcam Pro", sku: "HWP-890", category: "Electronics", price: 129.99, stock: 7, status: "Low Stock", lastUpdated: "5 hours ago", threshold: 10 },
]
