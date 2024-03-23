import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiRoutes, localstorageKey } from '@/constants'
import axios from 'axios'

export const fetchUsers = createAsyncThunk('User Slice', async () => {

    const authStatus = localStorage.getItem(localstorageKey.authStatus)
    const userKey = localStorage.getItem(localstorageKey.authKey)
    if (authStatus == "true") {
        console.log("run user slice");
        const response = await axios.post(apiRoutes.customer + 'fetch', {}, {
            headers: {
                Authorization: `${JSON.parse(userKey)}`
            },
        })
            .then(res => res.data)
        return response.data
    }
    return {}

})

/*
apiRoutes.customer + 'fetch',
headers: {
                Authorization: `${userKey}`
            },
*/

const initialState = {
    users: {}
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.fulfilled]: (state, action) => {
            state.users = action.payload
        }
    }
});

export const { } = userSlice.actions

export default userSlice.reducer