import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuthenticated: false,
    userId: null
}

const authSlice = createSlice({
    name: 'auth', 
    initialState,
    reducers: {
        loginStore: (state, action) => {
            state.isAuthenticated = true
            state.userId = action.payload
        }, 
        logoutStore: (state) => {
            state.isAuthenticated = false
            state.userId = null
        }
    }
})

export const {loginStore, logoutStore} = authSlice.actions
export default authSlice.reducers