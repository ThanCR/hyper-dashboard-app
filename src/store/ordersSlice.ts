import { initializeOrdersData } from "@/data/applicationData";
import { createSlice } from "@reduxjs/toolkit";


export const ordersSlice = createSlice({
    name: 'ordersData',
    initialState: initializeOrdersData,
    reducers: {}
})

export const {} = ordersSlice.actions
export default ordersSlice.reducer