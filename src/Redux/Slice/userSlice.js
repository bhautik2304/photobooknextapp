import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiRoutes, localstorageKey } from '@/constants'
import axios from 'axios'

export const fetchUsers = createAsyncThunk('Product', async () => {

    const authStatus = localStorage.getItem(localstorageKey.authStatus)
    const userKey = localStorage.getItem(localstorageKey.authKey)
    if (authStatus == "true") {
        console.log("run user slice");
        const response = await axios.post('https://api.sascube.ltd/api/costomer/' + 'fetch', {}, {
            headers: {
                Authorization: `${JSON.parse(userKey)}`
            },
        })
            .then(res => {
                console.log(res);
                res.data
            })
        return response.costomer
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