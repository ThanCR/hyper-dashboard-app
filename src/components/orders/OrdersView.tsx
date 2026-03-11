import { OrdersSummary } from "./components/OrdersSummary"
import { OrdersFilters } from "./components/OrdersFilters"
import { OrdersTable } from "./components/OrdersTable"
import { OrderDetailDialog } from "./components/OrderDetailDialog"
import { useOrdersStore } from "@/hooks/useOrdersStore"


export function OrdersView() {
  
  const {
    filtered,
    completedOrders,
    totalRevenue,
    pendingOrders,
    searchQuery,
    selectedOrder,
    statusFilter,
    setSearchQuery,
    setStatusFilter,
    setSelectedOrder
   } = useOrdersStore()

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
