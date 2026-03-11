import { useAppSelector } from "./reduxHooks"


export const useDashboardStore = () => {

    const {categoryData,lowStockItems,recentOrders,revenueData} = useAppSelector(({dashboard}) => dashboard)

    return {
        categoryData,
        lowStockItems,
        recentOrders,
        revenueData,
    }

}

