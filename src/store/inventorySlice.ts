import { initializeInventoryData } from "@/data/applicationData";
import { createSlice } from "@reduxjs/toolkit";

export const inventorySlice = createSlice({
    name: 'inventoryData',
    initialState: initializeInventoryData(),
    reducers: {
        onDeleteInventoryItem: (state, { payload }) => {
            state.inventoryData = state.inventoryData.filter( item => item.id !== payload.inventoryItemToBeDeleted.id )
        },
        onAddNewInventoryItem: (state, {payload}) => {
            state.inventoryData.push(payload)
        }
    }
})
export const {
    onDeleteInventoryItem,
    onAddNewInventoryItem
} = inventorySlice.actions
export default inventorySlice.reducer