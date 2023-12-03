import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    // cart: [
    //     {
    //         id: 1,
    //         name: "Pizza",
    //         quantity: 2,
    //         unitPrice: 16,
    //         totalPrice: 32,
    //     }
    // ]
};

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addItem: (state, action) => {
            // payload = newItem
            state.cart.push(action.payload);
        },
        deleteItem: (state, action) => {
            // payload = id
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
        increaseItemQuantity:(state, action) => {
            // payload = id
            const item = state.cart.find((item) => item.id === action.payload);
            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        decreaseItemQuantity:(state, action) => {
            // payload = id
            const item = state.cart.find((item) => item.id === action.payload);
            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice;
        },
      
        clearCart: (state) => {
            state.cart = [];
        },
    },
});

export const { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer

export const getTotalCartQuantity = (state) => state.cart.cart.reduce((sum,item)=> sum + item.quantity, 0)

export const getTotalCartPrice = (state) => state.cart.cart.reduce((sum,item)=> sum + item.totalPrice, 0)
// "reselect"