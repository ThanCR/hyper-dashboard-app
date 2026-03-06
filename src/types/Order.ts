export type Order = {
  id: string
  customer: string
  email: string
  items: number
  total: number
  status: "Completed" | "Processing" | "Shipped" | "Cancelled" | "Pending"
  paymentMethod: string
  date: string
}