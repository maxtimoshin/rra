import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        "title": "Men's clothing",
        "isChecked": false,
        "id": 1,
    },
    {
        "title": "Women's clothing",
        "isChecked": false,
        "id": 2,
    },
    {
        "title": "Jewelery",
        "isChecked": false,
        "id": 3,
    },
    {
        "title": "Electronics",
        "isChecked": true,
        "id": 4,
    },
]

export const inputsSlice = createSlice({
    name: 'inputs',
    initialState,
    reducers: {
        setInputStatus: (state, action) => {
            state[action.payload.id - 1].isChecked ? state[action.payload.id - 1].isChecked = false : state[action.payload.id - 1].isChecked = true
        },
    }
})

export const { setInputStatus } = inputsSlice.actions

export default inputsSlice.reducer