// DOM - document object model

// Changing Text

function changeText() {
    document.getElementById("title").innerHTML = "Document Object Model"
};

// show current date & time

function showTime() {
    document.getElementById("time").innerHTML = Date();
}

// Hide text

function hidePara() {
    document.getElementById("para").style.display = "none";
}

// Input text display

function showName() {
    let name = document.getElementById("name").value

    document.getElementById("result").innerHTML = "Hello " + name;
}

// count increase

let c = 0;

function Increase() {
    c++;
    document.getElementById("count").innerHTML = c;
}
// 

let Count = 0;
let a = document.getElementById("a")

function countIncrease() {
    Count++;
    a.innerHTML = "Button Clicked:   " + Count + "times"

}

// list items 

let count = 1;

function addItem() {
    let li = document.createElement("li");

    li.innerText = "Item " + count;

    document.getElementById("list").appendChild(li);

    count++;
}

// 

function add() {

    let a = Number(document.getElementById("num1").value);

    let b = Number(document.getElementById("num2").value);

    document.getElementById("res").innerText = a + b;
}

// todo

function addTask() {
    let task = document.getElementById("task").value;

    let li = document.createElement("li");

    li.innerHTML = task;

    document.getElementById("LIST").appendChild(li);
}

// character counter

function countChar() {
    let text = document.getElementById("TEXT").value;

    document.getElementById("COUNT").innerHTML = text.length;
}

//  LOGIN FORM // 

function login() {
    let user = document.getElementById("username").value;

    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        document.getElementById("Result").innerHTML = "Login Successfully";
    } else {
        document.getElementById("Result").innerHTML = "Invalid"
    }
}

// SignUp Page //

// document.getElementById("signUpForm").addEventListener("submit", function() {

//     document.getElementById("signUpResult").innerHTML = "Account Created Sucessfully";
// });

//Password Strength Checker //

let input = document.getElementById("p");
let strength = document.getElementById("strength")

input.addEventListener("keyup", function () {
    let Password = document.getElementById("p").value;

    if (Password.length < 4) {
        strength.innerHTML = "Weak Password";
    } else if (Password.length < 8) {
        strength.innerHTML = "Medium Password"
    } else {
        strength.innerHTML = "Strong Password";
    }
});

// Registration Form //

let form = document.getElementById("registrationForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("rname").value;

    let email = document.getElementById("remail").value;

    let password = document.getElementById("rpassword").value;

    if (name === "" || email === "" || password === "") {
        document.getElementById("message").innerHTML = "Fill all Fileds";

    } else {
        document.getElementById("message").innerHTML = "Registration Successfully Completed";
    }
});

//  ATM Machine //

let b = 1000;

let deposit = document.getElementById("deposit");

deposit.addEventListener("click", function () {

    let amount = Number(document.getElementById("amount").value);

    b += amount;

    document.getElementById("balance").innerHTML = "Balance: " + b;
});

let withdraw = document.getElementById("withdraw");

withdraw.addEventListener("dblclick", function () {
    let amount = Number(document.getElementById("amount").value);

    b -= amount;

    document.getElementById("balance").innerHTML = "Balance: " + b;
});

// Timer//


let start = document.getElementById("start")

start.addEventListener("click", function() {
    let time = 5;

    let interval = setInterval(function() {

        time--;

        document.getElementById("timer").innerHTML = time;

        if(time === 0) {
            clearInterval(interval);
        }
    },1000)
});

















