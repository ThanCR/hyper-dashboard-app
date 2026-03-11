import { initializeData } from "@/data/applicationData";
import { createSlice } from "@reduxjs/toolkit";


export const dataSlice = createSlice({
    name: 'mockData',
    initialState: initializeData,
    reducers: {
        
    }
})

export const {} = dataSlice.actions

export default dataSlice.reducer