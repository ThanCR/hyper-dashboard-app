import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "./dataSlice";
import { inventorySlice } from "./inventorySlice";
import { dashboardSlice } from "./dashboardSlice";
import { ordersSlice } from "./ordersSlice";
import { reportsSlice } from "./reportsSlice";

export const store = configureStore({
    reducer:{
        data: dataSlice.reducer,
        inventory: inventorySlice.reducer,
        dashboard: dashboardSlice.reducer,
        orders: ordersSlice.reducer,
        reports: reportsSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch