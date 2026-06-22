import React, { useEffect, useState } from "react";

function useFetch() {

    let [data, setData] = useState(null);

    let [loading, setLoading] = useState(true);

    let [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((result) => {
            setData(result);
            setLoading(false);
        })
        .catch((err) => {
            setError(err)
            setLoading(false)
        });

    },[])

    return {data, loading, error};
}

export default useFetch;

