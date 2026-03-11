export type ReportData = {
    monthlyRevenue: {
        month: string;
        revenue: number;
        profit: number;
    }[],
    weeklyOrders: {
        day: string;
        orders: number;
        returns: number;
    }[],
    categoryBreakdown: {
        name: string;
        value: number;
        fill: string;
    }[],
    topProducts: {
    name: string;
    sales: number;
    revenue: number;
    growth: number;
} [],
    customerGrowth: {
    month: string;
    newCustomers: number;
    returning: number;
} []
}