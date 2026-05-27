import React, { useEffect, useState } from "react";

function Photogallary() {


    let [photos, setPhotos] = useState([]);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
        .then((res) => res.json())
        .then((data) => setPhotos(data))

    },[])
   
    return(

        <div>

            <h1>Photo Gallery</h1>

            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", 
                gap:"20px", border:"3px solid lightblue",padding:"20px"}}>

                {photos.map((photo) => (
                    <div key={photo.id} style={{border:"1px solid pink",borderRadius:"10px"}}>
                        <img 
                         src={photo.thumbnailUrl}
                         alt={photo.title}
                        />

                        <p>{photo.titlr}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Photogallary;

// https://jsonplaceholder.typicode.com/photos