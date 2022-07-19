import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    filter: "All"   
}

export const filtersSlice = createSlice ({
    name:'filters',
    initialState,
    reducers:{
        changeFilterTo: (state, filterState) => {
           state.filter = filterState.payload
        }
    }
})

export const { changeFilterTo } = filtersSlice.actions

export default filtersSlice.reducer