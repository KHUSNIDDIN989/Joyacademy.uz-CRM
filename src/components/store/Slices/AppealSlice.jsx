import { createSlice } from "@reduxjs/toolkit";




const appealSlice = createSlice({
    name: 'appeal', 
    initialState: { count: 0 }, 
    reducers: {
        updateCount(state, action) {
            state.count = action.payload.count  
           console.log(action) 
        }
    }
})

export default appealSlice;
export const appealActions = appealSlice.actions; 