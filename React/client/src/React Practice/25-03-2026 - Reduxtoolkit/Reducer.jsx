import { useDispatch, useSelector } from "react-redux";
import { Decrease, Increase } from "./CountSlice";
import { Theme } from "./ThemeSlice";
import { addToCart, removeFromCart } from "./CartSlice";
import { useState } from "react";
import { login, logout } from "./AuthSlice";


function Reducer() {

    let d = useDispatch();

    // // COUNTER // // 
    let count = useSelector((state) => state.count.value);
    console.log(count);

    // // Theme // //

    let theme = useSelector((state) => state.theme.theme);
    console.log(theme);


    // // Products // //

    let pro = useSelector((state) => state.products.products)
    console.log(pro);

    let dispatch = useDispatch();

    // // Cart // // 

    let cartItems = useSelector((state) => state.cart.cartItems);
    console.log(cartItems);

    //  // AUTH // //

    let [name, setName] = useState("");
    let user = useSelector((state) => state.auth.user);
    // console.log(user);
    // 

    return (

        <div style={{ textAlign: "center" }}>
            {/* Counter */}

            <h1 style={{ color: "blue" }}>Counter</h1>
            <h2 style={{ color: "green" }}>COUNT: {count}</h2>
            <button onClick={() => d(Increase())}
                style={{
                    padding: "5px 10px",
                    background: "blue",
                    color: "white",
                    borderRadius: "5px",
                    cursor: "pointer",
                    margin: "5px"
                }}>INCREASE</button>
            <button onClick={() => d(Decrease())}
                style={{
                    padding: "5px 10px",
                    background: "blue",
                    color: "white",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}>DECREASE</button>

            <hr></hr>
            {/* THEME */}


            <div style={{ padding: "40px", textAlign: "center", margin: "0 90px" }}>

                <h1 style={{
                    background: theme == "light" ? "white" : "black",
                    color: theme == "light" ? "black" : "white",
                    padding: "10px",
                    border: "1px solid blue",
                    borderRadius: "10px"
                }} >{theme}MODE</h1>

                <button onClick={() => d(Theme())}
                    style={{
                        background: theme == "light" ? "black" : "white",
                        color: theme == "light" ? "white" : "black",
                        padding: "10px 20px",
                        cursor: "pointer",
                        borderRadius: "10px"
                    }}>
                    Toggel Theme
                </button>

            </div>

            <hr></hr>

            {/* Products */}

            <h2 style={{ color: "blue", textAlign: "center" }}>Products</h2>

            {pro.map((item) => (
                <div key={item.id}
                    style={{
                        border: "1px solid black",
                        padding: "10px",
                        margin: "10px",
                        borderRadius: "8px",
                        backgroundColor: "#f5f2f2"
                    }}
                >
                    <h4 style={{ margin: "5px 0" }}>{item.name}</h4>
                    <p style={{ margin: "5px 0", color: "green" }}>{item.price}</p>

                    <button onClick={() => dispatch(addToCart(item))}
                        style={{
                            padding: "5px 10px",
                            background: "blue",
                            color: "white",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}
                    >Add to Cart</button>
                </div>
            ))}



            <br></br>

            {/* CART */}


            <h2 style={{ color: "purple", marginTop: "20px" }}>Cart</h2>
            {cartItems.map((item) => (
                <div key={item.id}
                    style={{
                        border: "1px solid black",
                        padding: "10px",
                        margin: "10px",
                        borderRadius: "8px",
                        backgroundColor: "#fdf1ce"
                    }}
                >
                    <h4>{item.name}</h4>
                    <p>{item.quantity}</p>

                    <button onClick={() => dispatch(removeFromCart(item.id))}
                        style={{
                            padding: "5px 10px",
                            background: "red",
                            color: "white",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}
                    >Remove</button>
                </div>
            ))};


            <br></br><hr></hr>

            {/* Auth */}
            
            {!user && <div style={{ marginTop: "20px" }}>
                <h2>Login</h2>
                <input type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                        padding: "8px",
                        width: "200px",
                        border: "1px solid #fae0e0",
                        borderRadius: "5px",

                    }} />

                <br></br>
                <br></br>

                <button onClick={() => dispatch(login(name))}
                    style={{
                        padding: "8px 15px",
                        background: "green",
                        color: "white",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}>Login</button>
            </div>
            }

            {user && <div style={{ marginTop: "20px" }}>
                <h2 style={{ color: "Green" }}>Welcome {user}</h2>
                <button onClick={() => dispatch(logout())}
                    style={{
                        padding: "8px 15px",
                        background: "black",
                        color: "white",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}>Logout</button>
            </div>
            }

        </div>
    )
}

export default Reducer;