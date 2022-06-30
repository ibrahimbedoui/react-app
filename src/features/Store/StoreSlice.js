import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../api/axios";

const initialState = {
  response: [],
  user: "",
  store_name: "",
  description: "",
  brand: "",
  StoreImage: [],
  reviews: [],
  storeStatus: "",
  storeError: "",
  storeLoaded: false,
};

export const getStore = createAsyncThunk(
  "store/getStore",
  async (sid, thunkAPI) => {
    try {
      const response = await axios.get(`/store/stores/${sid}`);
      return response.data;
    } catch (err) {
      return err.response.data;
    }
  }
);

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStore.pending, (state, action) => {
      return { ...state, storeStatus: "pending" };
    });
    builder.addCase(getStore.fulfilled, (state, action) => {
      if (action.payload) {
        return {
          ...state,
          response: action.payload,
          user: action.payload.user,
          store_name: action.payload.store_name,
          description: action.payload.description,
          brand: action.payload.brand,
          StoreImage: action.payload.StoreImage,
          reviews: action.payload.reviews,
          storeStatus: "success",
          storeLoaded: "true",
        };
      } else return state;
    });
    builder.addCase(getStore.rejected, (state, action) => {
      return {
        ...state,
        storeStatus: "rejected",
        storeError: action.payload,
      };
    });
  },
});

export default storeSlice.reducer;
