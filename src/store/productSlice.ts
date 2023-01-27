import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../lib/axios";

const initialState = {
  items: [],
  status: null,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
      const response = await api.get('/products', {
        params: {
            page: 1,
            rows: 5,
            sortBy: 'name',
            orderBy: 'DESC',
        }
    });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    //@ts-ignore
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    //@ts-ignore
    [productsFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    //@ts-ignore
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default productsSlice.reducer;