import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/CartSlice";
import userApi from "./api/userApi";
import orderApi from "./api/orderApi";
import bookApi from "./api/bookApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [userApi.reducerPath]: userApi.reducer,
    [bookApi.reducerPath]: bookApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      userApi.middleware,
      bookApi.middleware,
      orderApi.middleware,
    ]),
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
