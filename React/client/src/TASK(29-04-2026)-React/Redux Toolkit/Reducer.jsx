import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./CartSlice";

function Reducer() {

    let Products = [
         {id:1, name:"Watch", price:2000},
        {id:2, name:"Shoes", price:1500},
        {id:3, name:"Books", price: 250}
    ]

    //Cart 

    let cartItems = useSelector((state) => state.cart.cartItems);
    console.log(cartItems);

    let dispatch = useDispatch();

    return (

        <div>
            <h2>Products</h2>

            {Products.map((item) => (
                <div key={item.id}>
                    <h4>{item.name}</h4>
                    <p>{item.price}</p>

                    <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
                </div>
            ))}

            <br></br>

            <h2>Cart</h2>
            {cartItems.map((item) => (
                <div key={item.id}>
                    <h4>{item.name}</h4>
                    <p>{item.quantity}</p>

                    <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                </div>
            ))};

        </div>
    )
}

export default Reducer;

