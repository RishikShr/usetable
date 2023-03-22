import {createSlice} from '@reduxjs/toolkit'

const usersSlice = createSlice({
    name:'user',
    initialState:[],
    reducers:{
        addUser(state,action){},
        removeUser(state,action){},
        deleteUsers(state,action){}
    }
})

export {usersSlice}