import React, { useCallback, useState, useMemo } from "react";
import Child from "./Child";

function Parent() {

    let [product, setProduct] = useState([

        { id: 1, name: "Microwave", price: 55000 },
        { id: 2, name: "Smart TV", price: 70000 },
        { id: 3, name: "Refrigerator", price: 45000 },
        { id: 4, name: "Air Conditioner", price: 40000 },
        { id: 5, name: "Washing Machine", price: 25000 }

    ]);

    let [count, setCount] = useState(0);

    console.log("Parent Rendered");

    // useCallback

    let deleteProduct = useCallback((id) => {
        console.log("Product Deleted -", id);
        setProduct(prev => prev.filter(product => product.id !== id))
    }, []);

    let increasePrice = useCallback((id) => {
        console.log("increased price ++");

        setProduct(prev =>
            prev.map(product => product.id === id ?
                { ...product, price: product.price + 5000 } : product))
    }, []);

    let decreasePrice = useCallback((id) => {
        console.log("decreased price --");
        setProduct(prev =>
            prev.map(product => product.id === id ?
                { ...product, price: product.price - 1000 } : product))
    }, []);

    // useMemo
    let totalPrice = useMemo(() => {
        return product.reduce((sum, item) => sum + item.price, 0)
    }, [product]);

    return (

        <div style={{ padding: "20px", alignItems: "center", fontFamily: "Arial"}}>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "20px", backgroundColor: "lightgray", padding: "10px", borderRadius: "8px" }}>
                <h2>Counter: {count}</h2>

                <button style={{ margin: "10px", padding: "5px", color: "white", backgroundColor: "seagreen", borderRadius: "5px" }}
                    onClick={() => setCount(count + 10)}>Increase</button>
            </div>

            <div style={{ padding: "20px", backgroundColor: "lightblue", borderRadius: "10px", textAlign: "center",alignContent:"center" }}>

                <h1 style={{ color: "deeppink" }}>Shopping Cart</h1>


                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

                    {product.map((item) => (

                        <Child key={item.id}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            onDelect={deleteProduct}
                            increasePrice={increasePrice}
                            decreasePrice={decreasePrice}/> ))}

                    <h3 style={{ marginTop: "20px", color: "navy" }}>Total Price: {totalPrice} </h3>

                </div>
            </div>
        </div>
    )
}

export default Parent;

