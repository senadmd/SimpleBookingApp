import { configureStore } from "@reduxjs/toolkit";
import bookingSliceReducer from "./booking/bookingSlice";
import loginSliceReducer from "./login/loginSlice";
import { createLogger } from 'redux-logger';
import { bookingApi } from "./booking/bookingApi";


const useLogging =import.meta.env.VITE_USE_REDUX_LOGGING === 'true';
const store = configureStore({
    reducer: { bookingSlice: bookingSliceReducer, loginSlice: loginSliceReducer, bookingApi: bookingApi.reducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat( (useLogging) ? [createLogger()] : []).concat(bookingApi.middleware)
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
