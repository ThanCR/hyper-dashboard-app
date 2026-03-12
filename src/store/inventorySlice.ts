import { initializeInventoryData } from "@/data/applicationData";
import { createSlice } from "@reduxjs/toolkit";

export const inventorySlice = createSlice({
    name: 'inventoryData',
    initialState: initializeInventoryData(),
    reducers: {
        onDeleteInventoryItem: (state, { payload }) => {
            state.inventoryData = state.inventoryData.filter( item => item.id !== payload.item.id )
        },
    }
})
export const {
    onDeleteInventoryItem
} = inventorySlice.actions
export default inventorySlice.reducer