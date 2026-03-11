import type { DashboardData } from "@/types/DashboardData"
import type { InventoryItem } from "@/types/InventoryItem"
import type { Order } from "@/types/Order"
import type { ReportData } from "@/types/ReportData"
import {
    setInventoryMockDataToLocalStorage,
    setDashboardMockDataToLocalStorage,
    setOrdersMockDataToLocalStorage,
    setReportsMockDataToLocalStorage,
    getDataFromLocalStorage,
    isInventoryLocalStoragePopulated,
    isDashboardLocalStoragePopulated,
    isOrdersLocalStoragePopulated,
    isReportsLocalStoragePopulated,
} from "./localStorage"

export const saveData = ({ dashboardData, inventoryData, ordersData, reportsData }: any) => {
    console.log('Local storage data saved!')
    localStorage.setItem('dashboard-data', JSON.stringify(dashboardData))
    localStorage.setItem('inventory-data', JSON.stringify(inventoryData))
    localStorage.setItem('orders-data', JSON.stringify(ordersData))
    localStorage.setItem('reports-data', JSON.stringify(reportsData))
}
export const initializeInventoryData = () => {
    if (!isInventoryLocalStoragePopulated())
        setInventoryMockDataToLocalStorage()
    return {
        inventoryData: JSON.parse(getDataFromLocalStorage().inventoryData || '{}') as InventoryItem[]
    }
}
export const initializeDashboardData = () => {
    if (!isDashboardLocalStoragePopulated())
        setDashboardMockDataToLocalStorage()
    const { categoryData, lowStockItems, recentOrders, revenueData } = JSON.parse(getDataFromLocalStorage().dashboardData || '{}') as DashboardData
    return {
        categoryData,
        lowStockItems,
        recentOrders,
        revenueData
    }
}
export const initializeOrdersData = () => {
    if (!isOrdersLocalStoragePopulated())
        setOrdersMockDataToLocalStorage()
    return {
        ordersData: JSON.parse(getDataFromLocalStorage().ordersData || '{}') as Order[]
    }
}
export const initializeReportsData = () => {
    if (!isReportsLocalStoragePopulated())
        setReportsMockDataToLocalStorage()
    const { categoryBreakdown, customerGrowth, monthlyRevenue, weeklyOrders, topProducts } = JSON.parse(getDataFromLocalStorage().reportsData || '{}') as ReportData
    return {
        categoryBreakdown,
        customerGrowth,
        monthlyRevenue,
        weeklyOrders,
        topProducts,
    }
}