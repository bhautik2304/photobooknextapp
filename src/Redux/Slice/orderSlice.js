'use client'

import { zonePrice } from '@/utils'
import { createSlice } from '@reduxjs/toolkit'

const orderDataScemma = {
  // costomer Detaild
  costomer_id: null,
  shipping_address: null,
  customText: null,

  // product detaild
  product_id: null,
  sheet_id: null,
  page_qty: 0,
  productSize: null,
  productOrientation: null,
  productSheet: null,
  paperType: null,
  productcover: null,
  productcoveroption: null,
  productprintOption: null,
  productboxSleev: null,
  productcolor: null,

  // order value
  sheetTotale: 0,
  paperTypeTotalevalue: 0,
  paperTypeTotale: 0,
  coverTotale: 0,
  printoptionTotale: 0,
  boxSleevTotale: 0,
  orderTotale: 0,
  shippingcost: 0,
}

const errorSchima = {
  product: null,
  product_orientation: null,
  product_size: null,
  product_sheet: null,
  product_page: null,
  product_cover: null,
  product_cover_option: null,
  product_boxsleev: null,
  product_color: null,
  product_paper_type: null,
}

const initialState = {
  orderData: orderDataScemma,
  formStep: 0,
  formError: errorSchima,
  product: {},
  productSize: [],
  productOrientation: [],
  productSheet: [],
  productcover: [],
  productcoveroption: [],
  productpaperType: [],
  productprintOption: [],
  productboxSleev: [],
  productcolor: [],
}

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    selectProduct: (state, action) => {
      state.product = action.payload.product
      state.orderData.product_id = action.payload.product.id
      state.orderData.page_qty = action.payload.product.minPage
      state.productpaperType = action.payload.product.paperType
    },
    changeOrientation: (state, action) => {
      state.orderData.productOrientation = action.payload.product.id
      const sizeData = state.product.size.filter(e => e.orientation_id == state.orderData.productOrientation)
      state.productSize = sizeData
    },
    changeOrientationSize: (state, action) => {
      state.orderData.productSize = action.payload.size.id
      state.productSheet = action.payload.size.SheetType
      state.productcover = state.product.cover.filter(data => data.size_id == state.orderData.productSize)
      state.productboxSleev = state.product.boxSleev.filter(data => data.size_id == state.orderData.productSize)
    },
    changeSheet: (state, action) => {
      state.orderData.productSheet = action.payload.sheet.id
      state.orderData.sheetTotale = ((zonePrice(action.payload.sheet.price).price * 0) / 100 + zonePrice(action.payload.sheet.price).price);
      // state.orderData.paperTypeTotale=
      state.orderData.orderTotale = state.orderData.sheetTotale * state.orderData.page_qty
    },
    changePageCount: (state, action) => {
      state.orderData.page_qty = action.payload
      state.orderData.orderTotale = (((state.orderData.sheetTotale * state.orderData.page_qty) * state.orderData.paperTypeTotalevalue) / 100 + (state.orderData.sheetTotale * state.orderData.page_qty))
    },
    changeCover: (state, action) => {
      state.orderData.productcover = action.payload.cover.id
      state.productcoveroption = action.payload.cover.coverOption
      state.orderData.coverTotale = zonePrice(action.payload.cover.price).price
      state.orderData.orderTotale = state.orderData.orderTotale += state.orderData.coverTotale
    },
    selectCoverOption: (state, action) => {
      state.orderData.productcoveroption = action.payload.coveroption.id
    },
    changePapertypeOption: (state, action) => {
      state.orderData.paperType=action.payload.papertype.id
      state.orderData.paperTypeTotalevalue=action.payload.papertype.value
      state.orderData.paperTypeTotale=(((state.orderData.sheetTotale * state.orderData.page_qty) * action.payload.papertype.value) / 100 + (state.orderData.page_qty * state.orderData.sheetTotale))
      state.orderData.orderTotale=state.orderData.paperTypeTotale
    },
    changeBoxSleev: (state, action) => {
      state.orderData.productboxSleev = action.payload.boxSleev.id
      state.orderData.boxSleevTotale = zonePrice(action.payload.boxSleev.price).price
      state.orderData.orderTotale = state.orderData.orderTotale += state.orderData.boxSleevTotale
    },
    changeColor: (state, action) => {

    },
    formBack: (state, action) => {
      if (state.formStep != 0) {
        state.formStep = (state.formStep - 1)
      }
    },
    formNext: (state, action) => {
      if (state.formStep != 7) {

        state.formStep = ++state.formStep
      }
    },
    formError: (state, action) => {
      state.formError[action.payload.key] = action.payload.error
    },
  }
});

export const { changePageCount, changeSheet, changeOrientation, changeOrientationSize, changeCover, selectCoverOption, changePapertypeOption, changeBoxSleev, changeColor, selectProduct, changeOrderData, formBack, formNext, formError } = orderSlice.actions

export default orderSlice.reducer

