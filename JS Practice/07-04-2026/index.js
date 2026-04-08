// API - Application Programming Interfaces

// GET -> fetch the data

fetch("https://jsonplaceholder.typicode.com/users")

.then(response => response.json())

.then(users => {
    users.forEach(user => {
        console.log(user.name + ", " + user.username);
    });
})

// 

function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")

    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.length);
    })
    .catch(err => console.log(err))
}

getUsers();

// 

// POST - to create new data

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

function posts() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: "new post",
            boby: "Learning API",
            userId: 1
        }),
        headers: {
            "Content-Type" : "application/json"
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

posts();

// 

// PUT -> to update the entire data

function updatePost() {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        body: JSON.stringify({
            id: 1,
            title: "Updated Title",
            body: "Updated Body",
            userId: 1
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

updatePost();

//

// PATCH -> update partial data

function patchPost(){
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PATCH",
        body: JSON.stringify({
            id: 1,
            title: "Updated Title...........",
            userId: 1
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(d => console.log(d))
    .catch(err => console.log(err))
}

patchPost();

// 

fetch("https://jsonplaceholder.typicode.com/users")
.then(r => r.json())
.then(users => {
    let list = document.getElementById("userlist");

    for(let user of users) {
        let li = document.createElement("li");
        li.textContent = user.name;
        list.appendChild(li)
    }
})

// 

let btn = document.getElementById("btn");
let List = document.getElementById("list")

btn.addEventListener("click", function() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        List.innerHTML = "";

        for(let user of users){

        let id = document.createElement("h2")
        id.textContent = "ID:" + user.id;

        let name = document.createElement("h3");
        name.textContent = "Name:" + user.name;

        let email = document.createElement("p")
        email.textContent = "Email:" + user.email;

            List.appendChild(id);
            List.appendChild(name);
            List.appendChild(email);             
        }
    })

    .catch(err => console.log(err))
})


// 

let title = document.getElementById("title")
let body = document.getElementById("body")
let submitBtn = document.getElementById("submitBtn")
let msg = document.getElementById("msg")

submitBtn.addEventListener("click", function() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: title,
            body: body,
            userId: 1
        }),
        headers: {
            "Content-type" : "application/json"
        }
    })
    .then(a => a.json())
    .then(data => {
        msg.textContent = "Post added with ID: " + data.id;
    }) 
})


// 


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

        UserDiv.appendChild(id);
        UserDiv.appendChild(name);
        UserDiv.appendChild(phone);
        UserDiv.appendChild(email);
        UserDiv.appendChild(city);

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

let visible = false;

let Btn = document.getElementById("Btn");
let L  = document.getElementById("LIST")

Btn.addEventListener("click", function() {
    if(!visible){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res =>res.json())
        .then(posts => {
            L.innerHTML = "";

            for(let i=0; i<5; i++) {
                let li = document.createElement("li");
                li.textContent = posts[i].title;
                L.appendChild(li);
            }

            visible = true;
            this.textContent = "Hide Posts";
        });
    } else {
        L.innerHTML  = "";
        visible = false;
        this.textContent = "Show Posts";
    }
})


// 

let button = document.getElementById("button");
let MSG = document.getElementById("delete");

button.addEventListener("click", function() {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE"
    })
    .then(res => 
        res.json())

    .then(() => {
        MSG.textContent = "Post Deleted"
    })

    .catch(err => {
      MSG.textContent = err.message   
    })
    
});























