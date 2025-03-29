import { configureStore } from "@reduxjs/toolkit";
import appointmentSlice from "@/redux/appointmentSlice.ts";
import customerSlice from "@/redux/customerSlice.ts";
import ServiceSlice from "@/redux/ServiceSlice.ts";
import authSlice from "@/redux/authSlice.ts";


export const store = configureStore({
    reducer: {
        service:ServiceSlice,
        customer:customerSlice,
        appointment:appointmentSlice,
        auth: authSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
