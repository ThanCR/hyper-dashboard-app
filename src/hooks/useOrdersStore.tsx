import type { Order } from "@/types/Order"
import { useState } from "react"
import { useAppSelector } from "./reduxHooks"

export const useOrdersStore = () => {
    const {ordersData: orders} = useAppSelector(({orders}) => orders)
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [statusFilter, setStatusFilter] = useState("all")

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
    return {
        filtered,
        totalRevenue,
        completedOrders,
        pendingOrders,
        searchQuery,
        statusFilter,
        selectedOrder,
        setSearchQuery,
        setStatusFilter,
        setSelectedOrder
    }
}