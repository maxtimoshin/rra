import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authStatus : false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthStatus: (state, action) => {
           
        },
    }
})

export const { setAuthStatus } = authSlice.actions

export default authSlice.reducer