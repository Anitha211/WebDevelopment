let postbtn = document.getElementById("postbtn");
let Output = document.getElementById("output");

postbtn.addEventListener("click", function(){

    fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "POST",
        headers: {"Content-Type": "application.json"},
        body: JSON.stringify({
            title: "New Post",
            body: "Created using POST method",
            userID : 1
        })
    })
    .then(response => response.json())
    .then(d => {
        Output.innerHTML = " ";

        let heading = document.createElement("h3")
        heading.textContent = "Post Created";

        let idPara = document.createElement("p");
        idPara.textContent = "ID:" + d.id;

        let titlePara = document.createElement("p");
        titlePara.textContent = "Title:" + d.title;

        let userId = document.createElement("p")
        userId.textContent = "UserId:" + d.userId;

        Output.appendChild(heading);
        Output.appendChild(idPara);
        Output.appendChild(titlePara);
        Output.appendChild(userId)
    })

});










// 
// function checkPasswordStrength(password) {
//     if(password.length < 5){
//         return "Password is invalid"
//     } 

//     if ()
// }