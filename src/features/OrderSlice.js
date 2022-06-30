import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./api/axios";



const accessToken = localStorage.getItem('access') ? localStorage.getItem('access') : null ;


const initialState = {
  
 response:[],
 status:"",
 errors:"",
};

export const getOrders = createAsyncThunk(
  "order/getOrders",
  async () => {
    if(accessToken){
      try {
        const response = await axios.get("/store/orders/", {headers: {'Authorization' : `JWT ${accessToken}` }})
        return response.data;
      } catch (err) {
        return err.response.data;
      }
    }
    return null;
  }
);


const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrders.pending, (state, action) => {
      return { ...state, status: "pending" };
    });
    builder.addCase(getOrders.fulfilled, (state, action) => {
      if (action.payload) {
        return {
          ...state,
          response:action.payload,
          status:"success",
         
        };
      } else return state;
    });
    builder.addCase(getOrders.rejected, (state, action) => {
      return {
        ...state,
        status: "rejected",
        response:[],
        error: action.payload,
      };
    });
  },
});

export default OrderSlice.reducer;