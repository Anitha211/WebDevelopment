
import { useDispatch, useSelector } from "react-redux";


function ReduxA() {

    let products = useSelector((state) => state.products);
    let d = useDispatch();

    let totalAmount = products.reduce((total,product) => 
            total + product.price * product.quantity, 0);

    return(
        <div  style={{width:"900px",margin:"40px auto",padding:"25px",backgroundColor:"skyblue",borderRadius:"10px",
                         textAlign:"center"}}>

            <h1>Shopping Cart</h1>

           <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"20px",marginTop:"30px"}}>

           {products.map(product => (
            <div key={product.id}
                 style={{border:"2px solid gray",padding:"20px",
                          margin:"10px auto",width:"250px",
                          borderRadius:"10px",fontSize:"14px",backgroundColor:"lightpink"
                        }}>

                <h3><b>{product.name}</b></h3>
                <p><b>Price:</b> {product.price}</p>
                <p><b>Quantity:</b> {product.quantity}</p>

                <p><b>Total:</b> {product.price * product.quantity}</p>

                <button onClick={()=>d({type:"Increase",payload: product.id})}
                         style={{backgroundColor:"green",color:"white",padding:"8px 12px",
                               borderRadius:"5px",cursor:"pointer",marginRight:"5px"}}>Increase</button>
                <button onClick={()=>d({type:"Decrease",payload: product.id})}
                     style={{backgroundColor:"red",color:"white",padding:"8px 12px",
                               borderRadius:"5px",cursor:"pointer"}}>Decrease</button>
            </div>
           ))}
           </div> 

            <h2>Grant Total: {totalAmount}</h2>
            <button onClick={()=>d({type:"Reset"})} 
                 style={{backgroundColor:"Blue",color:"white",padding:"8px 12px",
                               borderRadius:"5px",cursor:"pointer"}}>Reset</button>
        </div>
    )
        
}

export default ReduxA;