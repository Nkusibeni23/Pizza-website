/* eslint-disable react-hooks/rules-of-hooks */
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
        increaseItemQuantity: (state, action) => {
            const { id } = action.payload;
            const item = state.cart.find((item) => item.id === id);
            if (item) {
              item.quantity++;
              item.totalPrice = item.quantity * item.unitPrice;
            }
          },

          decreaseItemQuantity: (state, action) => {
            const { id } = action.payload;
            const item = state.cart.find((item) => item.id === id);
            if (item) {
                item.quantity--;
                item.totalPrice = item.quantity * item.unitPrice;
            }
            // if (item.quantity === 0) {
            //     dispatch(deleteItem(id)); // Use dispatch to trigger the deleteItem action
            // }

            if(item.quantity === 0) cartSlice.caseReducers.deleteItem(state.action);
        },
        
        clearCart: (state) => {
            state.cart = [];
        },
    },
});

export const { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart

export const getTotalCartQuantity = (state) => state.cart.cart.reduce((sum,item)=> sum + item.quantity, 0)

export const getTotalCartPrice = (state) => state.cart.cart.reduce((sum,item)=> sum + item.totalPrice, 0)
// "reselect"

export const getCurrentQuantityById = id => state => state.cart.cart.find(item=>item.id === id)?.quantity ?? 0;