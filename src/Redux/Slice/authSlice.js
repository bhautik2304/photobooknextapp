'use client'

import { createSlice } from '@reduxjs/toolkit'
import {localstorageKey} from '@/constants'

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
    authStatus:authStatus || true,
    user:user || {},
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {}
});

export const {} = authSlice.actions

export default authSlice.reducer