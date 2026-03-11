import { useAppSelector } from "./reduxHooks"

export const useDataStore = () => { 

    const {dashboardData, ordersData, reportsData, inventoryData} = useAppSelector((state) => state.data)

    return {
        dashboardData,
        ordersData,
        reportsData,
        inventoryData,
    }

}



