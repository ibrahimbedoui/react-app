import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from '../api/axios'
import jwtDecode from "jwt-decode";

const accessToken =  localStorage.getItem("access") ? localStorage.getItem("access") : null;

const initialState = {
  wishlistItems: [],
  wishlistTotalQuantity: 0,
  wishlistTotalAmount: 0,
  user_id: accessToken ? jwtDecode(accessToken).user_id : "",
};

//get the wishlist as soon as user logs in

export const getWishlist = createAsyncThunk(
  "wishlistAuth/getWishlist",
  async (values, { rejectWithValue }) => {
    if (accessToken) {
      try {
        const response = await axios.get("/store/wishprod/items/", {
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

// add item to wishlist on click 
export const wishlistAdd = createAsyncThunk(
  "wishlistAuth/wishlistAdd",
  async (values, { rejectWithValue }) => {
    try {
      const response = await axios.post("/store/wishprod/items/add", {
        products_id: values.id,
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
//remove item from wishlist on click in wishlist 

export const wishlistDestroy = createAsyncThunk(
  "wishlistAuth/wishlistDestroy",
  async (values, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/store/wishprod/items/${values.id}/destroy`, {
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

const wishlistSlice = createSlice({
  name: "wishlistAuth",
  initialState,
  reducers: {
  },
  extraReducers: {
    [getWishlist.pending]: (state, action) => {
      state.status = "pending";
    },
    [getWishlist.fulfilled]: (state, action) => {
      state.status = "success";
      state.wishlistItems = action.payload;
    },
    [getWishlist.rejected]: (state, action) => {
      state.status = "rejected";

    },
    [wishlistAdd.pending]: (state, action) => {
      state.status = "pending";
    },
    [wishlistAdd.fulfilled]: (state, action) => {
      state.status = "success";
      state.wishlistItems = action.payload;
    },
    [wishlistAdd.rejected]: (state, action) => {
      state.status = "rejected";

    },
    [wishlistDestroy.pending]: (state, action) => {
      state.status = "pending";
    },
    [wishlistDestroy.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [wishlistDestroy.rejected]: (state, action) => {
      state.status = "rejected";

    },
}});



export default wishlistSlice.reducer;