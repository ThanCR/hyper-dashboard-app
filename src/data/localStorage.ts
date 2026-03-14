import { LOCAL_STORAGE_KEYS } from "@/constants/localStorage"
import { categoryData, lowStockItems, recentOrders, revenueData } from "@/mocks/dashboard-data.mock"
import { initialInventoryMockData } from "@/mocks/inventory-data.mock"
import { orders } from "@/mocks/orders-data.mock"
import { monthlyRevenue, weeklyOrders, categoryBreakdown, customerGrowth, topProducts } from "@/mocks/reports-data.mock"
import type { DashboardData } from "@/types/DashboardData"
import type { InventoryItem } from "@/types/InventoryItem"
import type { Order } from "@/types/Order"
import type { ReportData } from "@/types/ReportData"


// Set mock Data in Local Storage on application initialization
export const setInventoryMockDataToLocalStorage = () => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.INVENTORY, JSON.stringify(initialInventoryMockData))
}
export const setDashboardMockDataToLocalStorage = () => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.DASHBOARD, JSON.stringify({ categoryData, lowStockItems, recentOrders, revenueData } as DashboardData))
}
export const setOrdersMockDataToLocalStorage = () => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.ORDERS, JSON.stringify(orders))
}
export const setReportsMockDataToLocalStorage = () => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.REPORTS, JSON.stringify({ monthlyRevenue, weeklyOrders, categoryBreakdown, customerGrowth, topProducts } as unknown as ReportData))
}

// Get Data from Local Storage
export const getDashboardDataFromLocalStorage = () => {
    return localStorage.getItem(LOCAL_STORAGE_KEYS.DASHBOARD) ?? ''
}
export const getInventoryDataFromLocalStorage = () => {
    return localStorage.getItem(LOCAL_STORAGE_KEYS.INVENTORY) ?? ''
}
export const getOrdersDataFromLocalStorage = () => {
    return localStorage.getItem(LOCAL_STORAGE_KEYS.ORDERS) ?? ''
}
export const getReportsDataFromLocalStorage = () => {
    return localStorage.getItem(LOCAL_STORAGE_KEYS.REPORTS) ?? ''
}

// Validate Data in local storage
export const isInventoryLocalStoragePopulated = () => {
    const inventoryData = getInventoryDataFromLocalStorage()
    return Boolean(inventoryData)
}
export const isDashboardLocalStoragePopulated = () => {
    const dashboardData = getDashboardDataFromLocalStorage()
    return Boolean(dashboardData)
}
export const isReportsLocalStoragePopulated = () => {
    const reportsData = getReportsDataFromLocalStorage()
    return Boolean(reportsData)
}
export const isOrdersLocalStoragePopulated = () => {
    const ordersData = getOrdersDataFromLocalStorage()
    return Boolean(ordersData)
}

// Saving data
export const saveDashboardData = (dashboardData: DashboardData) => { 
    localStorage.setItem(LOCAL_STORAGE_KEYS.DASHBOARD, JSON.stringify(dashboardData))
}
export const saveInventoryData = (inventoryData: InventoryItem[]) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.INVENTORY, JSON.stringify(inventoryData))
}
export const saveOrdersData = (ordersData: Order[]) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.ORDERS, JSON.stringify(ordersData))
}
export const saveReportsData = (reportsData: ReportData) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.REPORTS, JSON.stringify(reportsData))
}
