import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let productExist = state.cartItems.find(product => product.id === action.payload.id);
            if(productExist) {
                productExist.quantity += 1;
            }
            else {
                state.cartItems.push({...action.payload, quantity: 1});
            }
        },
        decreaceQuantity: (state, action) => {
            let tempCart = [];
            let itemToDecreace = state.cartItems.find(product => product.id === action.payload);
            let index = state.cartItems.indexOf(itemToDecreace);
            if(itemToDecreace.quantity === 1) {
                tempCart = state.cartItems.toSpliced(index, 1);
                state.cartItems = tempCart;
            }
            else {
                itemToDecreace.quantity -= 1;
            }
        },
        increaceQuantity: (state, action) => {
            let itemToIncreace = state.cartItems.find(product => product.id === action.payload);
            itemToIncreace.quantity += 1;
        },
        removeItem: (state, action) => {
            let tempCart = [];
            let itemToDelete = state.cartItems.find(item => item.id === action.payload);
            let index = state.cartItems.indexOf(itemToDelete);
            tempCart = state.cartItems.toSpliced(index, 1);
            state.cartItems = tempCart;
        },
        deleteCart: (state) => {
            state.cartItems = [];
        }
    }  
});


export const {addToCart, decreaceQuantity, increaceQuantity, removeItem, deleteCart} = CartSlice.actions;
export default CartSlice.reducer;