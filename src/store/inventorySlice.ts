import { initializeInventoryData } from "@/data/applicationData";
import { createSlice } from "@reduxjs/toolkit";

export const inventorySlice = createSlice({
    name: 'inventoryData',
    initialState: initializeInventoryData,
    reducers: {

    }
})
export const {} = inventorySlice.actions
export default inventorySlice.reducer