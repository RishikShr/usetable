import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser:(state, action)=> {
        return action.payload
        console.log('action.payload',action.payload);
    },
    removeUser(state, action) {},
    deleteUsers(state, action) {},
  },
});
console.log("userSlice", userSlice.actions);
export default userSlice.reducer;
export const {addUser,removeUser,deleteUsers} =userSlice.actions
