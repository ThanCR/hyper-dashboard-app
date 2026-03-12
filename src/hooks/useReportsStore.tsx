import { useAppSelector } from "./reduxHooks"

export const useReportsStore = () => {

    const {
        categoryBreakdown,
        customerGrowth,
        monthlyRevenue,
        weeklyOrders,
        topProducts,
    } = useAppSelector(({ reports }) => reports)

    return{
        categoryBreakdown,
        customerGrowth,
        monthlyRevenue,
        weeklyOrders,
        topProducts,
    }

}

