import type { DashboardData } from "@/types/DashboardData"
import type { InventoryItem } from "@/types/InventoryItem"
import type { Order } from "@/types/Order"
import type { ReportData } from "@/types/ReportData"
import {
    setInventoryMockDataToLocalStorage,
    setDashboardMockDataToLocalStorage,
    setOrdersMockDataToLocalStorage,
    setReportsMockDataToLocalStorage,
    isInventoryLocalStoragePopulated,
    isDashboardLocalStoragePopulated,
    isOrdersLocalStoragePopulated,
    isReportsLocalStoragePopulated,
    getInventoryDataFromLocalStorage,
    getDashboardDataFromLocalStorage,
    getReportsDataFromLocalStorage,
    getOrdersDataFromLocalStorage,
} from "./localStorage"
import { LOCAL_STORAGE_KEYS } from "@/constants/localStorage"

type SaveDataParameters = {
    dashboardData: DashboardData,
    inventoryData: InventoryItem[],
    ordersData: Order[],
    reportsData: ReportData
}

export const saveData = ({ dashboardData, inventoryData, ordersData, reportsData }: SaveDataParameters) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.DASHBOARD, JSON.stringify(dashboardData))
    localStorage.setItem(LOCAL_STORAGE_KEYS.INVENTORY, JSON.stringify(inventoryData))
    localStorage.setItem(LOCAL_STORAGE_KEYS.ORDERS, JSON.stringify(ordersData))
    localStorage.setItem(LOCAL_STORAGE_KEYS.REPORTS, JSON.stringify(reportsData))
}
export const initializeInventoryData = () => {
    if (!isInventoryLocalStoragePopulated())
        setInventoryMockDataToLocalStorage()
    return {
        inventoryData: JSON.parse(getInventoryDataFromLocalStorage() || '[]') as InventoryItem[]
    }
}
export const initializeDashboardData = () => {
    if (!isDashboardLocalStoragePopulated())
        setDashboardMockDataToLocalStorage()
    const { categoryData, lowStockItems, recentOrders, revenueData } = JSON.parse(getDashboardDataFromLocalStorage() || '{}') as DashboardData
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
        ordersData: JSON.parse(getOrdersDataFromLocalStorage() || '[]') as Order[]
    }
}
export const initializeReportsData = () => {
    if (!isReportsLocalStoragePopulated())
        setReportsMockDataToLocalStorage()
    const { categoryBreakdown, customerGrowth, monthlyRevenue, weeklyOrders, topProducts } = JSON.parse(getReportsDataFromLocalStorage() || '{}') as ReportData
    return {
        categoryBreakdown,
        customerGrowth,
        monthlyRevenue,
        weeklyOrders,
        topProducts,
    }
}