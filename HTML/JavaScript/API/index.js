// API --> Application Programming Interfaces
// API Methods---
       // get >>> to fetch the data
       // post >>> to send the data
       // put >>> to update the full data
       // patch >>> to update the partial data    
       // delete >>> to delete the data


// get-->

fetch("https://jsonplaceholder.typicode.com/users")

.then(a => a.json())
.then(a1 => {
    console.log(a1);
})
.catch(a2 => {
    console.log(a2);
})


// 

fetch("https://jsonplaceholder.typicode.com/users")

.then(a => a.json())
.then(a1 => {
    console.log("Get Users:",a1.length);
})
.catch(a2 => {
    console.log(a2);
});

// 

fetch("https://jsonplaceholder.typicode.com/users") 
.then(response => response.json())
.then(function(users){
    users.forEach(user => {
        if(user.address.city == "South Christy"){
            console.log(user.name,user.email);
            // console.log(user.email);
        }
    });
});

// TASK

let output = document.getElementById("users");
let getbtn = document.getElementById("getbtn");
let clearbtn = document.getElementById("clearbtn");

getbtn.addEventListener("click", 
function (){
       fetch("https://jsonplaceholder.typicode.com/users")
       .then(function(response){
        return response.json();
    })
    .then(function(users){

        output.innerHTML = "";
        clearbtn.disabled = false;
        for(let user of users){
        let UserDiv = document.createElement("div");  

        let id = document.createElement("P")
        id.textContent = "ID:" + user.id;

        let name = document.createElement("p");
        name.textContent = "Name:" + user.name;

        let phone = document.createElement("p");
        phone.textContent = "Phone:" + user.phone;
        
        let email = document.createElement("p");
        email.textContent = "Email:" + user.email;
        
        let city = document.createElement("p");
        city.textContent = "City:" + user.address.city;
        
        let geo = document.createElement("p");
        geo.textContent = "Geo:" + user.address.geo.lat + " " + user.address.geo.lng;

        UserDiv.appendChild(id);
        UserDiv.appendChild(name);
        UserDiv.appendChild(phone);
        UserDiv.appendChild(email);
        UserDiv.appendChild(city);
        UserDiv.appendChild(geo);

        UserDiv.appendChild(document.createElement("hr"));

        output.appendChild(UserDiv);
        }
    })
    .catch(function(){
        output.textContent = "Error fecting data";
    });
});


clearbtn.addEventListener("click", function(){
    output.innerHTML = "";
    clearbtn.disabled = true;
});


// 

async function getPosts() {
    let b = await fetch("https://jsonplaceholder.typicode.com/posts")
let data = await b.json();
console.log("posts:", data);
};
getPosts();

// POST

let data = {
    title: "JavaScript POST",
    body: "Learning POST method",
    userId : 4
}

fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "POST",
    body: JSON.stringify(data),
    headers: {
    "Content-Type" : "application/json"
}
})

.then(res => res.json())
.then(r => console.log(r));

// 

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

// PUT

let data1 = {
    id: 1,
    title: "JavaScript PUT",
    body: "Learning PUT method",
    userId : 4
}

fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method: "PUT",
    body: JSON.stringify(data1),
    headers: {
    "Content-Type" : "application/json"
}
})
.then(res => res.json())
.then(r => console.log(r))

// 

















