import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./api/axios"


const accessToken = localStorage.getItem("access") ? localStorage.getItem("access") : null ;

const initialState = {
 
  num_order:"",
  date_order:"",
  slug_produit_retour:"",
  cause:"",
  status: null,
  reponse: "",
  error:"",
};
export const postRetour = createAsyncThunk(
  "retour/postRetour",
  async (values, {rejectWithValue}) => {
    const response = await axios.post( "/store/demande_retour_produit/", {

num_order: values.num_order,
date_order: values.date_order,
slug_produit_retour: values.slug_produit_retour,
cause: values.cause
    }, {
        
            headers: { Authorization: `JWT ${accessToken}` }

    });
    return response?.data;
  }
);


const retourSlice = createSlice({
  name: "retour",
  initialState,
  reducers: {},
  extraReducers: {
    [postRetour.pending]: (state, action) => {
      state.status = "pending";
    },
    [postRetour.fulfilled]: (state, action) => {
      state.status = "success";
      state.reponse = action.payload;
    },
    [postRetour.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;

    },
  },
});

export default retourSlice.reducer;


