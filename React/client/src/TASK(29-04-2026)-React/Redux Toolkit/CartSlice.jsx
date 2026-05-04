import { createSlice } from "@reduxjs/toolkit";

let CartSlice = createSlice({
    name:"cart",
    initialState: {cartItems: []},
    reducers: {
        addToCart :(state,action) => {
            let item = state.cartItems.find(
                (i) => i.id == action.payload.id
            );

            if(item) {
                item.quantity++;
            } else {
                state.cartItems.push({...action.payload,quantity:1})
            }
        },

        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (i) => i.id !== action.payload
            )
        }
    }
})

export let {addToCart, removeFromCart} = CartSlice.actions;

export default CartSlice.reducer;

