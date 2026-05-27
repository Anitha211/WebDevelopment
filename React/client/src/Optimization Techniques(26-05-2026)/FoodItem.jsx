import React from "react";

let FoodItem = React.memo(({ food, addToCart }) => {

    console.log("Food ITems Render");

    return (

        <div>

            <h3>{food.item}</h3>

            <p>Price: {food.price}</p>

            <button onClick={() => addToCart(food)}>
                Add to Cart
            </button>

        </div>
    )
});

export default FoodItem;




