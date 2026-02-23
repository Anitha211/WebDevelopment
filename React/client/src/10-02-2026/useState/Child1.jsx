function B({getA, geta, set}){
    // console.log(getA);
    
    return(
        <div style={{textAlign:"center"}}> 
            <button onClick={getA}>Send text</button>
            <button onClick={geta}>click</button>
            <button onClick={set}>Update</button>
        </div>
    )
}

export default B; 