import { initializeReportsData } from "@/data/applicationData";
import { createSlice } from "@reduxjs/toolkit";


export const reportsSlice = createSlice({
    name: 'reportData',
    initialState: initializeReportsData,
    reducers: {

    }
})

export const {} = reportsSlice.actions
export default reportsSlice.reducer