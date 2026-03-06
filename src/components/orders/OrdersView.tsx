import { useState } from "react"
import type { Order } from "@/types/Order"
import { orders } from "@/mocks/orders-data.mock"
import { OrdersSummary } from "./components/OrdersSummary"
import { OrdersFilters } from "./components/OrdersFilters"
import { OrdersTable } from "./components/OrdersTable"
import { OrderDetailDialog } from "./components/OrderDetailDialog"


export function OrdersView() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  const filtered = orders.filter((order) => {
    const matchesSearch =
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.id.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || order.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0)
  const completedOrders = orders.filter((o) => o.status === "Completed").length
  const pendingOrders = orders.filter((o) => o.status === "Processing" || o.status === "Pending").length

  return (
    <div className="flex flex-col gap-6">

      <OrdersSummary
        totalRevenue={totalRevenue}
        completedOrders={completedOrders}
        pendingOrders={pendingOrders}
      />

      <OrdersFilters 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <OrdersTable 
        filtered={filtered}
        setSelectedOrder={setSelectedOrder}
      />

      <OrderDetailDialog 
        selectedOrder={selectedOrder}
        setSelectedOrder={setSelectedOrder}
      />
    </div>
  )
}
