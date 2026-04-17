import React, { useEffect, useState } from "react";

function useFetch() {
    let [data, setData] = useState([]);
    let [error, setError] = useState("");
     let[showUser,setshowUser] = useState(false);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/Users")
            .then((res) => res.json())
            .then((d) => {
                setData(d);
                setshowUser(false)
            })
            .catch((error) => {
                setError(error)
            })

    }, [])

    return { data, error, showUser }
}

export default useFetch;





