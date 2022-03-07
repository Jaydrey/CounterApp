import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0 },
    reducers: {
        increment: (state) => {
            state.counter += 1;
        },
        decrement: (state) => {
            state.counter -= 1;
        },
        addBy: (state, action) => {
            state.counter += Number(action.payload)
        }
    }
})
export const counterActions = counterSlice.actions;
export default counterSlice;