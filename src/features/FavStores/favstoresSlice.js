import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";
import axios from "../api/axios"


const accessToken =  localStorage.getItem("access") ? localStorage.getItem("access") : null;

const initialState = {
  favstoresItems: [],
  status: null,
  user_id: accessToken ? jwtDecode(accessToken).user_id : "",
};

export const getFavStores = createAsyncThunk(
  "favstores/getFavStores",
  async (values, { rejectWithValue }) => {
    if (accessToken) {
      try {
        const response = await axios.get("/store/wishstore/items/", {
          headers: { Authorization: `JWT ${accessToken}` },
        });
        return response.data;
      } catch (err) {
        return err.response.data;
      }
    }
    return rejectWithValue("not logged in");
  }
);


export const addFavStores = createAsyncThunk(
  "favstores/addFavStores",
  async (values, { rejectWithValue }) => {
    try {
      const response = await axios.post("/store/wishstore/items/add", {
        store_id: values.sid,
        note: values.note,
      }, {
        headers: { Authorization: `JWT ${accessToken}` },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const destroyFavStores = createAsyncThunk(
  "favstores/destroyFavStores",
  async (values, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/store/wishstore/items/${values.id}/destroy`, {
        headers: { Authorization: `JWT ${accessToken}` }} ,{
        products_id: values.pid,
        note: values.note,
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


const favstoresSlice = createSlice({
  name: "favstores",
  initialState,
  reducers: {
  },extraReducers: {
    [getFavStores.pending]: (state, action) => {
      state.status = "pending";
    },
    [getFavStores.fulfilled]: (state, action) => {
      state.status = "success";
      let Favstores= [];
      state.favstoresItems = action.payload;
    },
    [getFavStores.rejected]: (state, action) => {
      state.status = "rejected";

    },
    [addFavStores.pending]: (state, action) => {
      state.status = "pending";
    },
    [addFavStores.fulfilled]: (state, action) => {
      state.status = "success";
      state.favstoresItems = action.payload;
    },
    [addFavStores.rejected]: (state, action) => {
      state.status = "rejected";

    },
    [destroyFavStores.pending]: (state, action) => {
      state.status = "pending";
    },
    [destroyFavStores.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [destroyFavStores.rejected]: (state, action) => {
      state.status = "rejected";

    },
}});


export default favstoresSlice.reducer;
