import { createSlice } from '@reduxjs/toolkit';

const numberSlice = createSlice({
    name: 'num',
    initialState: {num: 0},
    reducers: {
        newValue: (state, actions) => {
            const value = actions.payload;
            state.num = value;
        },
    }
})
export const numberActions = numberSlice.actions;
export default numberSlice;