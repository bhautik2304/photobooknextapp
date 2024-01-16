'use client'

import { zonePrice } from '@/utils'
import { createSlice } from '@reduxjs/toolkit'

const orderDetaild = {
  eventType: "",
  eventDate: "",
  eventName: "",
  printing: "",
  customizeMessage: "",
}

const orderDataScemma = {
  // costomer Detaild
  costomer_id: null,
  shipping_address: null,
  customText: null,

  // product detaild
  product_id: null,
  sheet_id: null,
  productSize: null,
  productOrientation: null,
  productSheet: null,
  paperType: null,
  productcover: null,
  coverType: null,
  productcoveroption: null,
  productprintOption: null,
  productboxSleev: null,
  productcolor: null,

  // product cost
  page_qty: 0,
  sheetValue: 0,
  paperValue: 0,
  coverValue: 0,
  boxSleeveValue: 0,
  orderTotale: 0,
  shippingcost: 0,
  discount: 0,
  orderDiscountAmount: 0,
  orderAfterDiscount: 0,

  isSample: false,
  isPhotoBookCopy: false,
  photoBookCopy: 0,

  // order detaild
  orderDetaild: orderDetaild,

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
      state.orderData.page_qty = action.payload.product.min_page
      state.productpaperType = action.payload.product.paperType
    },
    changeOrientation: (state, action) => {
      state.orderData.productOrientation = action.payload.product.id
      state.productSize = action.payload.product.size
    },
    changeOrientationSize: (state, action) => {
      state.orderData.productSize = action.payload.size.id
      state.productSheet = action.payload.size.sheet
      state.productcover = action.payload.size.cover
      state.productboxSleev = action.payload.size.boxsleeve
      state.productpaperType = action.payload.size.papers
    },
    changeSheet: (state, action) => {
      state.orderData.productSheet = action.payload.sheet.id
      state.orderData.sheetValue = zonePrice(action.payload.sheet.sheetprice).price
      // state.orderData.paperTypeTotale=
      // state.orderData.orderTotale = state.orderData.sheetTotale * state.orderData.page_qty
    },
    changePageCount: (state, action) => {
      state.orderData.page_qty = action.payload
      // state.orderData.orderTotale = (((state.orderData.sheetTotale * state.orderData.page_qty) * state.orderData.paperTypeTotalevalue) / 100 + (state.orderData.sheetTotale * state.orderData.page_qty))
    },
    changeCover: (state, action) => {
      state.orderData.productcover = action.payload.cover.id
      state.productcoveroption = action.payload.cover.cover.coverupgrades
      state.orderData.coverValue = zonePrice(action.payload.cover.coverprice).price
      state.orderData.coverType = action.payload.cover.cover.type
    },
    selectCoverOption: (state, action) => {
      state.orderData.productcoveroption = action.payload.coveroption.id
      state.productcolor = action.payload.coveroption.coversupgradecolors
    },
    changePapertypeOption: (state, action) => {
      state.orderData.paperType = action.payload.papertype.id
      state.orderData.paperValue = action.payload.papertype.paper.value
      // state.orderData.paperTypeTotale = (((state.orderData.sheetTotale * state.orderData.page_qty) * action.payload.papertype.value) / 100 + (state.orderData.page_qty * state.orderData.sheetTotale))
      // state.orderData.orderTotale = state.orderData.paperTypeTotale
    },
    changeBoxSleev: (state, action) => {
      state.orderData.productboxSleev = action.payload.boxSleev.id
      state.orderData.boxSleeveValue = zonePrice(action.payload.boxSleev.boxsleeveprice).price
      // state.orderData.orderTotale = state.orderData.orderTotale += state.orderData.boxSleevTotale
    },
    setTotale: (state, action) => {
      let paperTotale = ((state.orderData.sheetValue * state.orderData.paperValue / 100) + state.orderData.sheetValue) * state.orderData.page_qty
      let coverTotale = state.orderData.coverValue
      let boxSleevTotale = state.orderData.boxSleeveValue
      state.orderData.orderTotale = paperTotale + coverTotale + boxSleevTotale
    },
    changeColor: (state, action) => {
      state.orderData.productcolor = action.payload.color.id
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
    addOrderDetail: (state, action) => {
      state.orderData.orderDetaild = action.payload
    },
    addCoverphoto: (state, action) => {
      state.orderData.coverphoto = action.payload.coverphoto
    },
    addphotoszip: (state, action) => {
      state.orderData.photoszip = action.payload.photoszip
    },
    changeOrderDetaildData: (state, action) => {
      state.orderData.orderDetaild[action.payload.key] = action.payload.value
    },
    changeOrderData: (state, action) => {
      state.orderData[action.payload.key] = action.payload.value
    },
  }
});

export const { addphotoszip, changeOrderDetaildData, addOrderDetail, addCoverphoto, changePageCount, setTotale, changeSheet, changeOrientation, changeOrientationSize, changeCover, selectCoverOption, changePapertypeOption, changeBoxSleev, changeColor, selectProduct, changeOrderData, formBack, formNext, formError } = orderSlice.actions

export default orderSlice.reducer

