// API - Application Programming Interfaces
//     -Api is a bridge that allows JavaScript applications to request or 
//      send data between different systems

// // API METHODS : GET, POST, PUT, PATCH, DELETE

// get -> to fetch the data

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })

// 

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => {
        console.log(data);
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

// post -> to create a new user

fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "New Name",
        email: "newPost@gmail.com"
    })
})
    .then((res) => res.json())
    .then((data) => console.log(data))

//

function postUsers() {
    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({
            name: "Postmethod",
            userName: "new User"
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
}
postUsers();

// Put - to update existing data

fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Updated User"
    })
})

    .then(res => res.json())
    .then(data => console.log(data));

// 

// PATCH -> update partial data

function patchPost() {
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

// Delete - 

fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "DELETE"
})
    .then(() => console.log("User Deleted"));

// async/await

async function getUser() {

    let responses = await fetch("https://jsonplaceholder.typicode.com/users");

    let user = await responses.json();

    console.log(user);

}

getUser();

// error handling

async function fetchUser() {

    try {

        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        let data = await response.json();

        console.log(data);

    } catch (error) {
        console.log("Error: ", error.message);

    }
}

fetchUser();

// 

async function getUsers() {

    let response = await fetch("https://jsonplaceholder.typicode.com/users");

    let users = await response.json();

    let output = "";

    users.forEach(user => {
        output += `<li>${user.name}</li>`
    });

    document.getElementById("users").innerHTML = output;
}

// 

async function searchUser() {

    let id = document.getElementById("userId").value;

    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    let user = await response.json();

    document.getElementById("result").textContent = user.name;
}

// 

async function loadUsers() {

    document.getElementById("loading").textContent = "Loading...";

    let response = await fetch("https://jsonplaceholder.typicode.com/users");

    let users = await response.json();

    document.getElementById("loading").textContent = "Data Loaded";

    document.getElementById("user").innerHTML = users.map(u => `<p>${u.name}</p>`).join("");

};

// 

async function loadUser() {

    let response = await fetch("https://jsonplaceholder.typicode.com/users");

    let users = await response.json();

    let cards = "";

    users.forEach(user => {
        cards += `<div>
        <h3>${user.name}</h3>
        <p>${user.email}</p>
        <p>${user.phone}</p>
        </div>`
    });

    document.getElementById("container").innerHTML = cards;
}

// 

async function deletePosts() {

    let id = document.getElementById("postId").value;

    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {

        method: "DELETE"
    });

    document.getElementById("msg").textContent = `Post ${id} Deleted Successfully`;

};

// 

async function loadPosts() {

    let response = await fetch("https://jsonplaceholder.typicode.com/posts");

    let post = await response.json();

    console.log(post);
    

    document.getElementById("posts").innerHTML = post.slice(0, 5)
        .map(post => `<h3>${post.title}</h3>`).join("");

}

// 

function createUsers() {
    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },

        body : JSON.stringify({
            name: "Update post",
            email: "postapi@gmail.com"
        })
    })
    .then(res => res.json())
    .then(user => {
        document.getElementById("output").innerHTML = `<h3>User Created</h3>
        
        <p>Name: ${user.name}</p>
        <p>Email: ${user.email}</p>`
    })
    .catch(err => console.log(err))
}

// Get

function getUSERS() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => {
        let result = "<h3>Users</h3>";

        users.forEach(user => {
            result += `<p>${user.name}</p>`
        });

        document.getElementById("output").innerHTML = result;
    })
    .catch(err => console.log(err))
}

// put 

function updateUser() {
    fetch("https://jsonplaceholder.typicode.com/users/1", {
        method: "PUT",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            name: "Updated User"
        })
    })
    .then(res => res.json())
    .then(user => {
        document.getElementById("output")
        .innerHTML = `<h3>User Updated</h3>
                      <p>Name: ${user.name}</p>`

    })
    .catch(err => console.log(err))
}

// delete

function DeleteUsers() {
    fetch("https://jsonplaceholder.typicode.com/users/`${id}", {
        method: "DELETE"
    })
    .then(() => {
        document.getElementById("output")
        .innerHTML = `<h3>User Deleted Successfully</h3>`
    })
    .catch(err => console.log(err))
}











