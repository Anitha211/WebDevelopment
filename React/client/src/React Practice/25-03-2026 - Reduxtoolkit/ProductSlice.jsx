import { createSlice } from "@reduxjs/toolkit";


let ProductSlice = createSlice({
    name:"products",
    initialState: {
        products:[
            {id:1, name:"Watch", price:2000},
            {id:2, name:"Shoes", price:1500}
        ]
    },
    reducers: {

    }
})

export default ProductSlice.reducer;