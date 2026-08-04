// API -  Application Programming Interface
// it is bridge between two applications to communicate each other
// used to send requests and receive data fram a server.

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

// post 

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

// Put 

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

// GET - Read/fetch data

function getUser() {

    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => response.json())
        .then(function (user) {
            console.log(user);

            document.getElementById("output").innerHTML =
                "<h3>" + user.name + "</h3>" +
                "<p>" + user.email + "</p>";


        })

        .catch(function (error) {
            console.log(error);

        });

};

// 

function getUsers() {

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
            return response.json()
        })
        .then(function (users) {
            console.log(users);

            let list = document.getElementById("list");
            list.innerHTML = "";

            users.forEach(function (user) {
                let li = document.createElement("li");
                li.textContent = user.name;
                list.append(li);
            })

        })
}

// Post - create a new post

function createUser() {

    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: "POST",
            email: "newPost@g.com"
        })
    })

        .then(response => response.json())
        .then(data => {
            console.log(data);

            document.getElementById("result").innerHTML =
                "User Created: " + data.name;

        })

        .catch(error => console.log(error))
}

// put - to update existing data

function updateUser() {

    fetch("https://jsonplaceholder.typicode.com/users/1", {

        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: "new name update",
            username: "put"
        })
    })

        .then(response => response.json())
        .then(user => {
            console.log(user);

            document.getElementById("Output").innerHTML =
                "Updated User: " + user.name

        })
}

// Patch - update partial data

function updateEmail() {

    fetch("https://jsonplaceholder.typicode.com/users/1", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: "upadeted@gmail.com"
        })
    })

        .then(response => response.json())
        .then(data => {
            console.log(data);

            document.getElementById("Res").innerHTML =
                "<h3>Email Updated successfully</h3>" +
                "<p>New Email:" + data.email + "</p>";

        })

        .catch(error => console.log(error))

};

// delete

function deleteUser() {

    fetch("https://jsonplaceholder.typicode.com/users/1", {
        method: "DELETE",
    })

        .then(response => {
            response.json();

            console.log("User Deleted Successfully");

            document.getElementById("status").innerHTML =
                "User Deleted Successfully";

        });

}

// 

async function getUser() {

    let responses = await fetch("https://jsonplaceholder.typicode.com/posts");

    let user = await responses.json();

    console.log(user);

}

getUser();

// error handling

async function fetchUser() {

    try {

        let response = await fetch("https://jsonplaceholder.typicode.com/posts");

        let data = await response.json();

        console.log(data);

    } catch (error) {
        console.log("Error: ", error.message);

    }
}

fetchUser();

// 

async function searchUser() {

    let id = document.getElementById("userId").value;

    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    let user = await response.json();

    document.getElementById("result1").textContent = user.name;
}

// 

let title = document.getElementById("title");

let body = document.getElementById("body");

let submitBtn = document.getElementById("submitBtn");
let msg = document.getElementById("msg");

submitBtn.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: title,
            body: body,
            userId: 1
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
        .then(a => a.json())
        .then(data => {
            msg.textContent = "Post added with ID: " + data.id;
        })
});

// 








