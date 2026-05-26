import { createSlice } from "@reduxjs/toolkit";


let cartSlice = createSlice({
    name: "cart",

    initialState:{
        cartItems: [],
        totalAmount: 0
    },

    reducers: {

        addToCart:(state,action) => {
            let itemIndex = state.cartItems.findIndex((item) =>
            item.id === action.payload.id);

            if(itemIndex >= 0){
                state.cartItems[itemIndex].quantity += 1;
            } else {
                state.cartItems.push({
                    ...action.payload, quantity:1
                });
            }

            state.totalAmount += action.payload.price
        },

        removeCart:(state,action) => {
            let item = state.cartItems.find((item) => 
            item.id === action.payload);

            if(!item) return;

            state.totalAmount -= item.price;

            if(item.quantity === 1) {
                state.cartItems = state.cartItems.filter((item) => 
                item.id !== action.payload);
            } else {
                item.quantity -= 1;
            }
        },
    },
});

export let {addToCart, removeCart} = cartSlice.actions;

export default cartSlice.reducer;