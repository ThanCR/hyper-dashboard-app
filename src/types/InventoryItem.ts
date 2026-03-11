export type InventoryItem = {
  id: string
  name: string
  sku: string
  category: string
  price: number
  stock: number
  threshold: number
  status: "In Stock" | "Low Stock" | "Out of Stock"
  lastUpdated: string
}