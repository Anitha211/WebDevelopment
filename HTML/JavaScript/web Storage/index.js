// web storage --> it stores the data in the form of key-values pairs
// 2 types:
// local storage >>> it stores the data permanently, 
                   // the data remains after browser is closed

//  store data
localStorage.setItem("name", "Balu")

// get data
console.log(localStorage.getItem("name"));

// 
localStorage.setItem("course", "JavaScript")

localStorage.removeItem("course");

console.log(localStorage.getItem("course"));


// session storage >>> it sortes data only for the current tab,
                    //  here the data will be remove when the browser is closed

sessionStorage.setItem("login", "true")

console.log(sessionStorage.getItem("login"));

sessionStorage.setItem("Item", "fruits")

console.log(sessionStorage.getItem("Item"));

// // //

let student = {
    name : "Abhi",
    subject : "javaScript"
}

localStorage.setItem("student", JSON.stringify(student));

let data = JSON.parse(localStorage.getItem("student"));

console.log(data.name);
console.log(data.subject);

//

localStorage.setItem("Login", "true");

if (localStorage.getItem("Login")){
    console.log("user is logged in");
} else {
    console.log("user is logged out");
    
}
// localStorage.removeItem("Login")

// 

// login by using localstorage

let text = document.getElementById("text");
let login = document.getElementById("login");
let logout = document.getElementById("logout")

function checklogin(){
   let authToken = localStorage.getItem("authToken");

   if(authToken){
    text.innerText = "Hello User";
    login.style.display = "none";
    logout.style.display = "inline"
   } else {
    text.innerText = "Please Login";
    login.style.display = "inline";
    logout.style.display = "none"
   }
}


login.addEventListener("click", function(){
    localStorage.setItem("authToken", "abcd1234");
    checklogin();
    
});

logout.addEventListener("click", function(){
    localStorage.removeItem("authToken");
    checklogin();
});
checklogin();


// login by sessionstorage

let text1 = document.getElementById("text");
let loginBtn = document.getElementById("loginBtn");
let logoutBtn = document.getElementById("logoutBtn")

function checklogins(){
   let authToken = sessionStorage.getItem("authToken");

   if(authToken){
    text.innerText = "Hello User";
    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline"
   } else {
    text.innerText = "Please Login";
    loginBtn.style.display = "inline";
    logoutBtn.style.display = "none"
   }
}


loginBtn.addEventListener("click", function(){
    sessionStorage.setItem("authToken", "abcd1234");
    checklogins();
    
});

logoutBtn.addEventListener("click", function(){
    sessionStorage.removeItem("authToken");
    checklogins();
});
checklogins();


// 

// 
let fruits = ["Apple", "Mango", "Kiwi"];

localStorage.setItem("fruits", JSON.stringify(fruits));

let storeFruits = JSON.parse(localStorage.getItem("fruits"));

console.log(storeFruits[0]);
console.log(storeFruits.length);

// 

let themeText = document.getElementById("theme");

function dark(){
    localStorage.setItem("theme", "Dark");
    showtheme();
}

function light(){
    localStorage.setItem("theme", "light");
    showtheme();
}

function showtheme(){
    themeText.textContent = "Theme: " + 

    localStorage.getItem("theme")
}

showtheme();

// 





