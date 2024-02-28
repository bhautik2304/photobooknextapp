'use client'

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { apiRoutes } from '@/constants'


export const fetchProduct = createAsyncThunk('Product', async () => {
  const response = await axios(apiRoutes.products).then(res => res.data)
  return response.data
  // return response.data
})

const initialState = {
  product: []
}

const ProductSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProduct.fulfilled]: (state, action) => {
      state.product = action.payload || []
    },
  }
});

export const { } = ProductSlice.actions

export default ProductSlice.reducer



