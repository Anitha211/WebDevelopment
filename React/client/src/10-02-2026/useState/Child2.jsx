function C({text,a}){
    // console.log(text);
    // console.log(a);
return(
        <div style={{textAlign:"center"}}>
          <h3>Text:{text}</h3>
          <p>Name: {a.name}</p>
          <p>ID: {a.Id}</p>
          <p>City: {a.city}</p>
          <p>Email: {a.email}</p>
        </div>
    )
}

export default C;