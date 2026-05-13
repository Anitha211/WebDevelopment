import React, { useEffect, useState } from "react";

function A() {

    let [Loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, []);

    return (

        <div>
            <h1>Loading Spinner</h1>

            {Loading ?
                <h2>Loading....</h2>
                :
                <h2>Data Loaded Successfully</h2>}

        </div>

    )
}

export default A;


