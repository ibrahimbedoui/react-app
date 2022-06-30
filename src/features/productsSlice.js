import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./api/axios";
const DB_URL = "http://127.0.0.1:8000"
const initialState = {
  items: [],
  status: null,
  error:"",
};
export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    const response = await axios.get(DB_URL + "/store/products/");
    return response?.data;
  }
);

/*export const productsSearch = createAsyncThunk(
  "products/productsSearch",
  async(variables, thunkAPI) => {
    const response = await axios.get(`/store/products/search/?q=${variables}`);
    return response?.data;
  }

);*/

export const getFiltered = createAsyncThunk(
  "products/getFiltered",
  async (values, thunkAPI) => {
    
      try {
        const response = await axios.get(`/store/products/?collection_id=${values.collection_id}&unit_price__gt=${values.unit_price_gt}&unit_price__lt=${values.unit_price_lt}`)
        return response.data;
      } catch (err) {
        return err.response.data;
      }

  }
);


export const productByCol = createAsyncThunk(
  "products/productByCol",
  async(collection_id, thunkAPI) => {
    try{
    const response = await axios.get( `/store/products/?collection_id=${collection_id}&unit_price_gt=&unit_price_lt=`);
    return response?.data;
    }catch(err){
      return err.response.data;
    }
  }
);
export const productBySubCol = createAsyncThunk(
  "products/productBySubCol",
  async(sid, thunkAPI) => {
    try{
    const response = await axios.get( `store/subcollections/${sid}`);
    return response?.data;
    }catch(err){
      return err.response.data;
    }
  }
);

export const getFilteredSub = createAsyncThunk(
  "products/getFilteredSub",
  async (values, thunkAPI) => {
    
      try {
        const response = await axios.get(`/store/subcollections/${values.sid}?collection_id=${values.id}&unit_price__gt=${values.unit_price_gt}&unit_price__lt=${values.unit_price_lt}`)
        return response.data;
      } catch (err) {
        return err.response.data;
      }

  }
);






const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";

    },
    [productByCol.pending]: (state, action) => {
      state.status = "pending";
    },
    [productByCol.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [productByCol.rejected]: (state, action) => {
      state.status = "rejected";
      state.error= action.payload;

    },
    [getFiltered.pending]: (state, action) => {
      state.status = "pending";
    },
    [getFiltered.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [getFiltered.rejected]: (state, action) => {
      state.status = "rejected";
      state.error= action.payload;

    },
    [productBySubCol.pending]: (state, action) => {
      state.status = "pending";
    },
    [productBySubCol.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [productBySubCol.rejected]: (state, action) => {
      state.status = "rejected";
      state.error= action.payload;

    },
    [getFilteredSub.pending]: (state, action) => {
      state.status = "pending";
    },
    [getFilteredSub.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [getFilteredSub.rejected]: (state, action) => {
      state.status = "rejected";
      state.error= action.payload;

    },
    
  },
});

export default productsSlice.reducer;
