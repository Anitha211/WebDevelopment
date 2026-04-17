import React from "react";
import useFetch from "./useFetch";
import useInput from "./useInput";

function Custom() {

    let { value, d, handleChange, reset } = useInput();

    let { data, error } = useFetch();

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(value);
        reset();
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Custom hook example</h1>

            <div>

                <h2>UseInput</h2>
                <h3>Length of the data = {d}</h3>
                <h3>{value}</h3>

                <form onSubmit={handleSubmit}>
                    <input type="text"
                        placeholder="Enter Name"
                        value={value}
                        onChange={handleChange}
                    />

                    <button type="submit">Submit</button>
                </form>
            </div>

            <hr></hr>

{/*  */}

            <div style={{ textAlign: "center" }}>

                <h1>UseFetch</h1>

                <h2 style={{ textAlign: "center", color: "Blue", marginBottom: "30px" }}>
                    Users Data</h2>

                <div>
                    {error ?
                        <p>Error: {error}</p>
                        :
                        <div style={{
                            display: "grid", gridTemplateColumns: "1fr 1fr",
                            gap: "10px", textAlign: "center"
                        }}>

                            {data.map((user) => {
                                return (
                                    <div key={user.id} style={{
                                        background: "skyblue", padding: "10px",
                                        borderRadius: "10px", cursor: "pointer"
                                    }}>
                                        <h2>User ID: {user.id}</h2>
                                        <h3>Name: {user.name}</h3>
                                        <h3>User Name: {user.name}</h3>

                                    </div>
                                )
                            })}

                        </div>
                        }
                </div>

            </div>

        </div>

    )
}

export default Custom;






