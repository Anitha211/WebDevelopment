import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
      addItem: (state, action) => {
       let item = state.items.find(i => 
        i.id == action.payload.id
       );

       if(item) {
        item.quantity += 1;
       } else {
        state.items.push({...action.payload, quantity: 1})
       }
    },
      clearItem: (state, action) => {
        state.items = state.items.filter(i => 
            i.id !== action.payload); 
      }
    }
});

export let {addItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;





