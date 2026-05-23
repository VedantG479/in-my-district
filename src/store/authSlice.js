import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuthenticated: false,
    userData: null
}

const authSlice = createSlice({
    name: 'auth', 
    initialState,
    reducers: {
        loginStore: (state, action) => {
            state.isAuthenticated = true
            state.userData = action.payload
        }, 
        logoutStore: (state) => {
            state.isAuthenticated = false
            state.userData = null
        }
    }
})

export const {loginStore, logoutStore} = authSlice.actions
export default authSlice.reducer