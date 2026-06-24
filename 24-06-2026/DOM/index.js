// DOM - Document Object Model
// DOM is the bridge between HTML and JavaScript, allowing JS to read,
//  modify, add and delete elements on a webpage. 

function validateUser() {

    let username = document.getElementById("username").value;

    let message = document.getElementById("message");

    if(username === "") {
        message.textContent = "Username is required";
        console.log( "Username is required");
        
    } else {
        message.textContent = "Login Successful";
        console.log("Login Successful");
        
    }
};

// 

function addTask() {

    let task = document.getElementById("task").value;

    let li = document.createElement("li");

    li.textContent = task;

    document.getElementById("list").appendChild(li);

    document.getElementById("task").value = "";

}

// 

function togglePassword() {

    let password = document.getElementById("password");

    if(password.type === "password") {
        password.type = "text";
    }else {
        password.type = "password";
    }
}

// 

let count = 0;

function addItem() {
    count++;

    document.getElementById("cart").textContent = count;
}

// 

let c = 0;

function increase() {
    c++;

    document.getElementById("count").textContent = c;
    console.log(c);
    
}

// 

function checkAge() {

    let age = document.getElementById("age").value;

    if(age >= 18) {
        document.getElementById("output").textContent = "Eligible to Vote"

    } else {
        document.getElementById("output").textContent = "Not Eligible"
    }
}

// 

async function getUsers() {
    
    let res = await fetch("https://jsonplaceholder.typicode.com/users");

    let data = await res.json();

    data.forEach(user => {
        let li = document.createElement("li");

        li.textContent = user.name;

        document.getElementById("users").appendChild(li)
    })

}

//

let students = 0;

function markPresent() {

    students++;

    document.getElementById("Count").textContent = students;

}

// 

function checkAnswer() {

    let answer = document.getElementById("answer").value;

    document.getElementById("Result").textContent = 
    answer == 4 ? "Correct Answer" : "Wrong Answer";

}

// 

let balance = 1000;

let deposit = document.getElementById("deposit");

deposit.addEventListener("click", function () {

    let amount = Number(document.getElementById("amount").value);

    balance += amount;

    document.getElementById("balance").innerHTML = "Balance: " + balance;
});

let withdraw = document.getElementById("withdraw");

withdraw.addEventListener("dblclick", function () {
    let amount = Number(document.getElementById("amount").value);

    balance -= amount;

    document.getElementById("balance").innerHTML = "Balance: " + balance;
});

// 

let form = document.getElementById("registrationForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") {
        document.getElementById("Message").innerHTML = "Fill all Fileds";

    } else {
        document.getElementById("Message").innerHTML = "Registration Successfully Completed";
    }
});

// 






