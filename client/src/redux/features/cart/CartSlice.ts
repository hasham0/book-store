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
    Number(JSON.parse(localStorage.getItem("totalAmount")!)) || Number(0),
};

// TODO: check quantity measure function
const quantityMeasure = (
  cartItems: CartItemTS[],
  id: number,
  type: "INC" | "DEC",
): CartItemTS[] => {
  return cartItems.map((item) => {
    if (item._id === id) {
      switch (type) {
        case "INC":
          return { ...item, quantity: item.quantity + 1 };
        case "DEC":
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        default:
          return item;
      }
    }
    return item;
  });
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
        toast.error("item already exist");
      }
      localStorage.setItem("cartData", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state: CartState, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload,
      );
      localStorage.setItem("cartData", JSON.stringify(state.cartItems));
    },
    increaseQuantity: (state: CartState, action: PayloadAction<number>) => {
      state.cartItems = quantityMeasure(state.cartItems, action.payload, "INC");
      localStorage.setItem("cartData", JSON.stringify(state.cartItems));
    },

    decreaseQuantity: (state: CartState, action: PayloadAction<number>) => {
      state.cartItems = quantityMeasure(state.cartItems, action.payload, "DEC");
      localStorage.setItem("cartData", JSON.stringify(state.cartItems));
    },

    totalProductsAmountInCart: (
      state: CartState,
      action: PayloadAction<number>,
    ) => {
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

export const {
  addToCart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
  totalProductsAmountInCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
