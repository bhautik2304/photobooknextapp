import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiRoutes, localstorageKey } from '@/constants'
import axios from 'axios'

export const fetchUsers = createAsyncThunk('User Slice', async () => {

    const authStatus = localStorage.getItem(localstorageKey.authStatus)
    const userKey = localStorage.getItem(localstorageKey.authKey)
    if (authStatus == "true") {
        console.log(userKey);
        const response = await axios.post(apiRoutes.token, {}, {
            headers: {
                Authorization: `${userKey}`
            },
        })
            .then(res => {
                console.log(res);
                return res.data
            }).catch((er) => {
                console.log(er);
            })
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
    reducers: {
        addUsers: (state, action) => {
            state.users = action.payload
        }
    },
    extraReducers: {
        [fetchUsers.fulfilled]: (state, action) => {
            state.users = action.payload.user
        }
    }
});

export const { addUsers } = userSlice.actions

export default userSlice.reducer