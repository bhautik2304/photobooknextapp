'use client'
/* Core */
import { Provider, useDispatch } from 'react-redux'

/* Instruments */
import { store } from './index'
import { useEffect } from 'react'

export const Providers = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}
