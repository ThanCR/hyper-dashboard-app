import { initializeDashboardData } from "@/data/applicationData";
import { createSlice } from "@reduxjs/toolkit";


export const dashboardSlice = createSlice({
    name: 'dashboardData',
    initialState: initializeDashboardData,
    reducers:{}
})

export const {} = dashboardSlice.actions
export default dashboardSlice.reducer