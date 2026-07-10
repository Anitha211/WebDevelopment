// API - Application Programming Interfaces
//     - it is bridge between two applications to communicate each other

// get--> to fetch the data
 
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

async function getData() {

    let response = await fetch("https://jsonplaceholder.typicode.com/users")

    let users = await response.json();

    console.log(users);
    
};

getData();

// 

async function addUser() {
    
    let response = await fetch("https://jsonplaceholder.typicode.com/users", {

    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        name:"new post",
        email:"post123@gmail.com"
    })

});

let result = await response.json();

console.log(result );

};

addUser();

// 

async function updateUser() {
    
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1", {

    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        name:"update name",
        email:"put123@gmail.com"
    })

});

let result = await response.json();

console.log(result );

};

updateUser();

// 

async function deleteUser() {

    let response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
        method: "DELETE"
    });

    console.log("User Deleted");
    
}

deleteUser();

// 

let btn = document.getElementById("btn");
let users = document.getElementById("users");

btn.addEventListener("dblclick", async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");

    let data = await response.json();

    users.innerHTML = "";

    data.forEach(user => {

        users.innerHTML += `<li>${user.title}</li>`;
    });
});

// 

let visible = false;

let Btn = document.getElementById("Btn");
let list  = document.getElementById("list")

Btn.addEventListener("click", function() {
    if(!visible){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res =>res.json())
        .then(posts => {
            list.innerHTML = "";

            for(let i=0; i<5; i++) {
                let li = document.createElement("li");
                li.textContent = posts[i].title;
                list.appendChild(li);
            }

            visible = true;
            this.textContent = "Hide Posts";
        });
    } else {
        list.innerHTML  = "";
        visible = false;
        this.textContent = "Show Posts";
    }
});

// product list

let loadBtn = document.getElementById("loadBtn");

let products = document.getElementById("products");

loadBtn.addEventListener("click", async () => {

    products.innerHTML = "Loading Products....";

    try {

        let response = await fetch("https://fakestoreapi.com/products");

        let data = await response.json();

        products.innerHTML = "";

        data.forEach((product) => {

            products.innerHTML += `<div class="card">

                 <img src="${product.image} height="150px" width="250px" ">
                 <h3>${product.title}</h3>

                 <p>${product.price}</p>
            </div>`;
        });

    } catch (error) {

        products.innerHTML = "<h3>Pailed to load products.</h3>";

    }

});

// 


