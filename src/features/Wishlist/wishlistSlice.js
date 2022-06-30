import { createSlice } from "@reduxjs/toolkit";
import axios from '../api/axios'

const initialState = {
  wishlistItems: localStorage.getItem("wishlistItems")
    ? JSON.parse(localStorage.getItem("wishlistItems"))
    : [],
  wishlistTotalQuantity: 0,
  wishlistTotalAmount: 0,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      const itemIndex = state.wishlistItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.wishlistItems[itemIndex].wishlistQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, wishlistQuantity: 1 };
        state.wishlistItems.push(tempProduct);
      }
      localStorage.setItem(
        "wishlistItems",
        JSON.stringify(state.wishlistItems)
      );
    },
    removeFromWishlist(state, action) {
      const nextWishlistItems = state.wishlistItems.filter(
        /*filter is an array method, returns the items that don't have
        the id of the item we want removed*/
        (wishlistItem) => wishlistItem.id !== action.payload.id
      );
      /*after receiving the new array without the item id
      we change the state of the wishlistItems, and we save the new
      state to the local storage  */

      state.wishlistItems = nextWishlistItems;
      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));

    },
    clearwishlist(state, action) {
      /*to clear the wishlist all you have to do is to set the wishlistitems
to an empty array */
      state.wishlistItems = [];
      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
    },
    getTotals1(state, action) {
      /*here we use a reduce function that takes two parameters
an array function as a callback method and an initial value */
      let { total, quantity } = state.wishlistItems.reduce(
        (wishlistTotal, wishlistItem) => {
          /*we are destructuring the callback objects */
          const { store_price, wishlistQuantity } = wishlistItem;
          const itemTotal = store_price * wishlistQuantity;
          wishlistTotal.total += itemTotal;
          wishlistTotal.quantity += wishlistQuantity;

          return wishlistTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.wishlistTotalQuantity = quantity;
      state.wishlistTotalAmount = total;
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearwishlist, getTotals1 } = wishlistSlice.actions;

export default wishlistSlice.reducer;
