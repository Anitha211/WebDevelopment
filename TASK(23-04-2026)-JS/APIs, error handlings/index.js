// Api -> Application Programming Interfaces
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

function postUsers(){
    fetch("https://jsonplaceholder.typicode.com/users", {
        method : "POST",
        body: JSON.stringify({
            name : "Postmethod",
            userName: "new User"
        }),
        headers: {
            "Content-Type" : "application/json"
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
}
postUsers();

// POST

function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")

    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.length);
    })
    .catch(err => console.log(err))
}

getPosts();

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

function putUsers(){
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        body: JSON.stringify({
            id: 1,
            title: "updated Title",
            body:"updated data by using api put method",
            userId: 1
        }),
        headers: {
            "Content-Type" : "application/json"
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
}
putUsers();

// 


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

async function getUsers() {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");

    let data = await res.json();

    let list = document.getElementById("userlist");
    list.innerHTML = "";

    data.forEach(user => {
        let li = document.createElement("li");
        li.innerText = user.name
        list.appendChild(li)
    });
}

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


// Error Handling --> is used to handle the errors  
// try-> checks errors
// catch-> handle the errors
// throw-> create a custom error
// finally-> always runs

try {
    let x = yield;
    x();
} catch (error) {
    console.log("Error occurred: ", error.message);

}

// 

function checkAge(age) {
    if(age < 18) {
        throw "you not eligible";
        console.log("you not eligible");
        
    }
    return "Eligible"
}

try {
    console.log(checkAge(17))
} catch (error) {
    console.log(error);

}

// 

function div(a,b){
    if (b == 0){
        throw "Cannot divided by zero"
    }
    return a / b;
}
try {
    console.log(div(12, 2));
    
} catch (error) {
    console.log(error);
    
}
// 

function checkNum(num) {
    if (num < 0) {
        throw "Invalid Number"
    }
    return "Valid Number"
}
try {
    console.log(checkNum(88));

} catch (error) {
    console.log(error);
} finally {
    console.log("Execution Completed");

};

// 

let btn = document.getElementById("loadBtn");

let Status = document.getElementById("status");

let userDiv = document.getElementById("user");

btn.addEventListener("click", function() {
    Status.innerText = "Loading User in 2seconds...";
    userDiv.innerHTML = "";

    setTimeout(() => {
        loadUser();
    }, 2000);
});

function loadUser(){
    try{
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(res => {
            if(!res.ok) {
                throw new Error("API Failed");
            }
            return res.json();
        })
        .then(data => {
            Status.innerText="User Loaded";

            userDiv.innerHTML = `<p><b>Name: </b> ${data.name} </p>
           <p><b>Email: </b> ${data.email} </p>`;
        })
        .catch(err => {
            Status.innerText = "Error Occurred!!";
        });


    } catch(error) {
        Status.textContent = "Unexpected error!!";
        console.log(error);
        
    }
}

// 




