import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const DB_URL = "http://127.0.0.1:8000"
const initialState = {
  items: [],
  status: null,
};
export const imagesFetch = createAsyncThunk(
  "slider/imagesFetch",
  async () => {
    const response = await axios.get(DB_URL + "/store/slide/", {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    return response?.data;
  }
);

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: {
    [imagesFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [imagesFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [imagesFetch.rejected]: (state, action) => {
      state.status = "rejected";

    },
  },
});

export default imagesSlice.reducer;
