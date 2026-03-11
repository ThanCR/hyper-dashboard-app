import  { categoryData, lowStockItems, recentOrders, revenueData } from "@/mocks/dashboard-data.mock"
import  { initialInventoryMockData } from "@/mocks/inventory-data.mock"
import  { orders } from "@/mocks/orders-data.mock"
import  { monthlyRevenue, weeklyOrders, categoryBreakdown, customerGrowth, topProducts } from "@/mocks/reports-data.mock"
import type { DashboardData } from "@/types/DashboardData"
import type { ReportData } from "@/types/ReportData"

export const setInventoryMockDataToLocalStorage = () => {
    localStorage.setItem('inventory-data', JSON.stringify(initialInventoryMockData))
}
export const setDashboardMockDataToLocalStorage = () => {
    localStorage.setItem('dashboard-data', JSON.stringify({ categoryData, lowStockItems, recentOrders, revenueData } as DashboardData))
}
export const setOrdersMockDataToLocalStorage = () => {
    localStorage.setItem('orders-data', JSON.stringify(orders))
}
export const setReportsMockDataToLocalStorage = () => {
    localStorage.setItem('reports-data', JSON.stringify({ monthlyRevenue, weeklyOrders, categoryBreakdown, customerGrowth, topProducts } as unknown as ReportData))
}
export const setMockDataToLocalStorage = () => {

    localStorage.setItem('dashboard-data', JSON.stringify({ categoryData, lowStockItems, recentOrders, revenueData } as DashboardData))
    localStorage.setItem('inventory-data', JSON.stringify(initialInventoryMockData))
    localStorage.setItem('orders-data', JSON.stringify(orders))
    localStorage.setItem('reports-data', JSON.stringify({ monthlyRevenue, weeklyOrders, categoryBreakdown, customerGrowth, topProducts } as unknown as ReportData))
}
export const getDataFromLocalStorage = () => {
    return {
        dashboardData: localStorage.getItem('dashboard-data') ?? '',
        inventoryData: localStorage.getItem('inventory-data') ?? '',
        ordersData: localStorage.getItem('orders-data') ?? '',
        reportsData: localStorage.getItem('reports-data') ?? '',
    }
}
export const isInventoryLocalStoragePopulated = () => {
    const { inventoryData } = getDataFromLocalStorage()
    return Boolean(inventoryData)
}
export const isDashboardLocalStoragePopulated = () => {
    const { dashboardData } = getDataFromLocalStorage()
    return Boolean(dashboardData)
}
export const isReportsLocalStoragePopulated = () => {
    const { reportsData } = getDataFromLocalStorage()
    return Boolean(reportsData)
}
export const isOrdersLocalStoragePopulated = () => {
    const { ordersData } = getDataFromLocalStorage()
    return Boolean(ordersData)
}