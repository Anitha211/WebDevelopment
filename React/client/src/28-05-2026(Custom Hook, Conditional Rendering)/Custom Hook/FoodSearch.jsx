import React from "react";
import useSearch from "./useSearch";

function FoodSearch() {
    
    let Foods = ["Pizza", "Burger", "Cake", "Pasta"];

    let {search, setSearch, filterItems}  = useSearch();

    let filterFood = filterItems(Foods);
    
    return(

        <div style={{padding:"20px",textAlign:"center"}}>

            <h1>Food Search</h1>

            <input type="text"
                   placeholder="Search..."
                   value={search} 
                   onChange={(e) => setSearch(e.target.value)}

                   style={{padding:"10px", width:"250px", marginBottom:"20px"}}
            />

            {
                filterFood.length > 0 ? 

                filterFood.map((food, i) => (
                
                <div key={i} >
                    
                    <h3>{food}</h3>

                </div> )) : <h2>No Food found</h2>
            }

        </div>
    )
}

export default FoodSearch;



