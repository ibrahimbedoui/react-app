import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./api/axios";
//const DB_URL = "http://127.0.0.1:8000";
const initialState = {
  items: [],
  status: null,
};
export const categoriesFetch = createAsyncThunk(
  "categories/categoriesFetch",
  async () => {
    const response = await axios.get("/store/collections/");
    return response?.data;
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: {
    [categoriesFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [categoriesFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [categoriesFetch.rejected]: (state, action) => {
      state.status = "rejected";

    },
  },
});
export default categoriesSlice.reducer;