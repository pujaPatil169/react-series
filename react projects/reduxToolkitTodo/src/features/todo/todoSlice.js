import { createSlice,nanoid } from "@reduxjs/toolkit";
initialState({
    counter:0
})
export const todoSlice = createSlice({
    name:counter,
    initialState,
    reducers:{
        increment:(state,action)=>(state.counter.value += 1);

    }
})