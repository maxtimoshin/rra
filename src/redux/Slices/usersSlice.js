import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
  name: "TestName",
  age: 32,
  country: "Ukraine",
  },
]
export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state,userData) => {
      state.push({
        name:userData.payload.name,
        age:userData.payload.age,
        country:userData.payload.country,
      },)
    },
  },
})

export const { addUser } = usersSlice.actions

export default usersSlice.reducer