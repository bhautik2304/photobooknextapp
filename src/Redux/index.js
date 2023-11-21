'use client'

import { configureStore } from '@reduxjs/toolkit'
import {ProductReducer,authReducer,orderReducer} from './Slice'
// import { composeWithDevTools } from 'remote-redux-devtools' 
export const store = configureStore({
  reducer: {
    product:ProductReducer,
    auth:authReducer,
    order:orderReducer,
  },
})

