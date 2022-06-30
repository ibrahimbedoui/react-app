import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./api/axios";
const DB_URL = "http://127.0.0.1:8000"
const initialState = {
  items: [],
  images:[],
  reviews:[],
  store: "",
  a_prod: [],
  id_for_cart: "",
  status: null,
};


export const productDetail = createAsyncThunk(
  "singleproduct/productDetail",
  async(id, thunkAPI) => {
    const response = await axios.get(DB_URL + `/store/products/${id}`);
    console.log(response.data)
    return response?.data;
  }
); 

export const productSize = createAsyncThunk(  
  "singleproduct/productSize",
  async(id, thunkAPI) => {
    const response = await axios.get(DB_URL + `/store/products/${id}/choix_produit`);
    return response?.data;
  }
);

export const productSizeSelected = createAsyncThunk(
  "singleproduct/productSizeSelected",
  async(values, { rejectWithValue }) => {
    const response = await axios.post(DB_URL + `/store/taille_choix_final_produit/`,
    {
      product_id: values.id,
      size: values.size
    },
    {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    return rejectWithValue(response.data);
  }
);



const singleproductSlice = createSlice({
  name: "singleproduct",
  initialState,
  reducers: {},
  extraReducers: {
    [productDetail.pending]: (state, action) => {
      state.status = "pending";
    },
    [productDetail.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
      state.images = action.payload.images;
    state.reviews = action.payload.reviews;
    state.store = action.payload.store;
    state.a_prod = action.payload.a_prod;
    },
    [productDetail.rejected]: (state, action) => {
      state.status = "rejected";

    },
  },
});

export default singleproductSlice.reducer;
