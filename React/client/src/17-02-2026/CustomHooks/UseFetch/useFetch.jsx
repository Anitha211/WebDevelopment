import React, { useEffect, useState } from "react";

function useFetch(){

    let[data,setData]=useState([]);
    let [error, setError] = useState("");

    let fetchData = () => {
        // fetch(props)
        // .then((res) => res.json())
        // .then((d) => setData(d))
        // .catch((error) => setError(error))
    };

    useEffect(() => {
        fetchData();
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((d) => setData(d))
        .catch((error) => setError(error))
        
    },[]);

    return {data, error};
}

export default useFetch; 