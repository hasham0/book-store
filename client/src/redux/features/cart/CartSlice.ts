import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { BookTS } from "../../../types";
import toast from "react-hot-toast";

type CartItemTS = BookTS & {
  quantity: number;
};

interface CartState {
  cartItems: Array<CartItemTS>;
  totalAmount: number;
}

const initialState: CartState = {
  cartItems: JSON.parse(localStorage.getItem("cartData")!) || [],
  totalAmount:
    Number(JSON.parse(localStorage.getItem("cartData")!)) || Number(0),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<BookTS>) => {
      const isBookExist = state.cartItems.find(
        (item) => item._id === action.payload._id,
      );
      if (!isBookExist) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        toast.success("item added successfully");
      } else {
        toast("item already exist");
      }
      localStorage.setItem("cartData", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state: CartState, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload,
      );
      localStorage.setItem("cartData", JSON.stringify(state.cartItems));
    },
    incQty: (state: CartState, action: PayloadAction<number>) => {
      const cartitem = state.cartItems.find(
        (item) => item._id === action.payload,
      );
      if (cartitem) {
        cartitem.quantity += 1;
        localStorage.setItem("cartData", JSON.stringify(state.cartItems));
      }
    },
    decQty: (state, action: PayloadAction<number>) => {
      const cartItem = state.cartItems.find(
        (item) => item._id === action.payload,
      );
      if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity -= 1;
        localStorage.setItem("cartData", JSON.stringify(state.cartItems));
      }
    },

    amount: (state: CartState, action: PayloadAction<number>) => {
      state.totalAmount = action.payload;
      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
    },
    clearCart: (state: CartState) => {
      state.cartItems = [];
      state.totalAmount = 0;
      localStorage.setItem("cartData", JSON.stringify(state.cartItems));
      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
    },
  },
});

export const { addToCart, removeFromCart, incQty, decQty, amount, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
