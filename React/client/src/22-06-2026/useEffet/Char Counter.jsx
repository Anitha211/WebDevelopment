import React, { useEffect, useState } from "react";

function CharacterCount() {

    let [ text, setText] = useState("");

    useEffect(() => {
        document.title = `characters: ${text.length}`
    }, [text]);

    return (

        <div>

            <input type="text" 
                   onChange={(e) => setText(e.target.value)}
            />

            <h2>Count CharacterS :  {text.length}</h2>


        </div>
    )
}

export default CharacterCount;