// import { createStore } from 'redux';

// const reducerFunc = (state={counter: 0}, action) =>{
//     if(action.type==="INCREMENT"){
//         return {counter: state.counter + 1}
//     }
//     if(action.type==="DECREMENT"){
//         return {counter: state.counter - 1}
//     }
//     if(action.type==="ADDBY"){
//         return {counter: state.counter + action.payload}
//     }
//     return state;
// }
//  const store = createStore(reducerFunc)
// export default store;
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import numberSlice from './numberSlice';

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        num: numberSlice.reducer
    },
})
export default store;