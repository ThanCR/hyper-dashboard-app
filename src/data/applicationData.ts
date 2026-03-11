import type { DashboardData } from "@/types/DashboardData"
import type { InventoryItem } from "@/types/InventoryItem"
import type { Order } from "@/types/Order"
import type { ReportData } from "@/types/ReportData"
import {
    setInventoryMockDataToLocalStorage,
    setDashboardMockDataToLocalStorage,
    setOrdersMockDataToLocalStorage,
    setReportsMockDataToLocalStorage,
    setMockDataToLocalStorage,
    getDataFromLocalStorage,
    isLocalStoragePopulated
} from "./localStorage"

export const initializeData = () => {
    console.log('Initializing data...')
    if (!isLocalStoragePopulated())
        setMockDataToLocalStorage()

    const { dashboardData, inventoryData, ordersData, reportsData } = getDataFromLocalStorage()
    return {
        dashboardData: JSON.parse(dashboardData || '{}'),
        inventoryData: JSON.parse(inventoryData || '{}') as InventoryItem[],
        ordersData: JSON.parse(ordersData || '{}'),
        reportsData: JSON.parse(reportsData || '{}')
    }

}
export const saveData = ({ dashboardData, inventoryData, ordersData, reportsData }: any) => {
    console.log('Local storage data saved!')
    localStorage.setItem('dashboard-data', JSON.stringify(dashboardData))
    localStorage.setItem('inventory-data', JSON.stringify(inventoryData))
    localStorage.setItem('orders-data', JSON.stringify(ordersData))
    localStorage.setItem('reports-data', JSON.stringify(reportsData))
}
export const initializeInventoryData = () => {
    if (getDataFromLocalStorage().inventoryData)
        setInventoryMockDataToLocalStorage()
    return {
        inventoryData: JSON.parse(getDataFromLocalStorage().inventoryData || '{}') as InventoryItem[]
    }
}
export const initializeDashboardData = () => {
    if (getDataFromLocalStorage().dashboardData)
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
    if (getDataFromLocalStorage().ordersData)
        setOrdersMockDataToLocalStorage()
    return {
        ordersData: JSON.parse(getDataFromLocalStorage().ordersData || '{}') as Order[]
    }
}
export const initializeReportsData = () => {
    if (getDataFromLocalStorage().ordersData)
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