import { useDispatch, useSelector } from "react-redux";

import { addItem, clearItem } from "./cartSlice";

function Reducer1() {
    let dispatch = useDispatch();

    let items = useSelector((state) => state.cart.items);
    let products = [
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Phone", price: 20000 }
    ];

    return (
        <div style={{ textAlign: "center" }}>

            <h3>Products</h3>
            {products.map((p) => (
                <div key={p.id}>
                    <h3>{p.name} - {p.price}</h3>
                    <br />
                    <button onClick={() => dispatch(addItem(p))}>ADD</button>
                </div>
            ))}

            <h3>Cart</h3>
            {items.length == 0 ? (
                <p>Cart is empty</p>
            ) : (
                items.map((item) => (
                    <div key={item.id}>

                        <h3>{item.name} - {item.price} * {item.quantity}</h3>
                        <br />

                        <button onClick={() => dispatch(clearItem(item.id))}>Remove</button>

                    </div>
                ))
            )}

            <h3>Total: {items.reduce(
                (total, item) => total +
                    item.price * item.quantity,
                0
            )}
            </h3>
        </div>
    )
}

export default Reducer1;



















