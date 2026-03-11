import { useDataStore } from "@/hooks/useDataStore"


export const useAppData = () => {

    const {dashboardData, inventoryData, ordersData, reportsData} = useDataStore()
    

    const updateDashboardData = (newData: any) => {
        // setData(prev => ({ ...prev, dashboardData: newData }))
    }

    const updateInventoryData = (newData: any) => {
        // setData(prev => ({ ...prev, inventoryData: newData }))
    }

    const updateOrdersData = (newData: any) => {
        // setData(prev => ({ ...prev, ordersData: newData }))
    }

    const updateReportsData = (newData: any) => {
        // setData(prev => ({ ...prev, reportsData: newData }))
    }

    return {
        dashboardData,
        inventoryData,
        ordersData,
        reportsData,
        updateDashboardData,
        updateInventoryData,
        updateOrdersData,
        updateReportsData,
    }
}
