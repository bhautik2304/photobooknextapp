'use client'

import { createSlice } from '@reduxjs/toolkit'
import { localstorageKey } from '@/constants'

// Function to check if localStorage is available
const isLocalStorageAvailable = () => {
  try {
    const testKey = '__test_key__';
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
};

// Use localStorage conditionally
const user = isLocalStorageAvailable() ? JSON.parse(localStorage.getItem(localstorageKey.user)) : null;
const authStatus = isLocalStorageAvailable() ? JSON.parse(localStorage.getItem(localstorageKey.authStatus)) : null;

const initialState = {
  authStatus: authStatus || false,
  user: {},
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authLogin: (state, action) => {
      console.log(action.payload?.user.zone.id);
      localStorage.setItem(localstorageKey.authKey, action.payload.token)
      localStorage.setItem(localstorageKey.authStatus, true)
      localStorage.setItem(localstorageKey.zone, action.payload?.user.zone.id)
      state.authStatus = true
      state.user = action.payload.user
    },
    authLogout: (state, action) => {
      localStorage.removeItem(localstorageKey.authKey)
      localStorage.removeItem(localstorageKey.authStatus)
      localStorage.removeItem(localstorageKey.zone)
      state.authStatus = false
      state.user = {}
      // location.reload()
    }
  }
});

export const { authLogin, authLogout } = authSlice.actions

export default authSlice.reducer