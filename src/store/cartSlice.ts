import { createSlice } from '@reduxjs/toolkit';
import { PropsProduct } from '../components/Products';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state: PropsProduct[], action) {
            state.push(action.payload);
        },
        //@ts-ignore
        remove(state: PropsProduct[], action) {
            return state.filter((item) => item.id !== action.payload);
        },
    },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;