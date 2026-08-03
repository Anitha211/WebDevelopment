// Async/Await - 
// async makes a function to return a promise
// await makes a function to wait for a promise

function greet() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello welcome")
        }, 2000)
    })
}

async function displayMessage() {
    let msg = await greet();
    console.log(msg);
}

displayMessage();

// 

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Received");
        }, 2000)
    });
};

async function displayData(params) {
    console.log("Fetching...");
    
    let result = await fetchData();
    console.log(result);
    
}

displayData();

// 

function getResult() {
    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(85)
        }, 1500);
    })
}

async function checkResult() {
    
    let marks = await getResult();

    if(marks >= 35) {
        console.log("Pass");
        
    } else {
        console.log("Fail");
        
    }
}

checkResult();

// 

function check(value){
    return Promise.resolve(value);
}
async function greaterVal(num){
    if (num > 5){
        let x = await check("Greater")
        console.log(x);
} else {
    let y = await check("Lesser")
        console.log(y);
    }
};
greaterVal(2);

// 

function getEven(num){
    return Promise.resolve(num % 2 == 0);
}

async function checkNumbers(){
    let even = await getEven(6);
    if(even){
        console.log("Even");
    } else {
        console.log("Odd");
        
    }
}

checkNumbers();

// 

function delay(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Finished after 2 seconds")
        }, 2000)
    })
}

async function run() {
    console.log("START");

    let Result = await delay();

    console.log(Result);
    console.log("END");
}
run();

// ERROR HANDLING - is used to handle the errors  
// try-> checks errors
// catch-> handle the errors
// throw-> create a custom error
// finally-> always runs

function div(a, b) {

    try {
        if(b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        console.log(a / b);
        
    } catch (error) {
        console.log(error.message);
        
    }
}

div(10, 0);
div(10, 2);

// 

function dataFetch() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Network error");
        }, 6000)
    })

}

async function getData() {
    
    try{
        let result = await dataFetch();
        console.log(result);

    } catch(error) {
        console.log("Error: ", error);
        
    }
};

dataFetch();

// 

function checkAge() {

    try{
        if(age <= 18) {
            throw new Error("You are not eligible to vote");
        }
        console.log("Eligible to vote");
        
    } catch(error) {
        console.log(error.message);
        
    }
}

checkAge(18);

// 

function withDraw(balance, amount) {

    try{
        if(amount > balance) {
            throw new Error("Insufficient balance")
        }

        console.log("Withdrawal successful: ", amount);
        
    } catch(error) {
        console.log(error.message);
        
    }

}

withDraw(5000, 700);

// 

function uploadFile(filesize) {
    try {
        if(filesize > 5) {
            throw new Error("File size exceeds 5MB limit");
        }
        console.log("File uploaded successfully");
        
    } catch (error) {
        console.log(error.message);
        
    }
}

uploadFile(8);

// 

function login(username, password) {
    try{
        if(username !== "admin") {
            throw new Error("Invalid username");
        }
        console.log("Login successfully");
        
    } catch (error) {
        console.log(error.message);
        
    } finally {
        console.log("Login process completed");
        
    }
}

login("user");

// 

function fetchuser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Server is unavailable")
        }, 3000)
    })
}

async function Getusers() {
    
    try{
        let user = await fetchuser();
        console.log(user);
        
    } catch(error) {
        console.log("API Error: ", error);
        
    }
}

Getusers();

// 

function Login(username, password) {
    return new Promise((resolve, reject) => {
        if(username === "admin" && password === "1234") {
            resolve("Login Successfully")
        } else {
            reject("Invalid credentials")
        }
    })
}

async function userLogin() {
    
    try {
        let message = await Login("admin", "1111");
        console.log(message);
        
    } catch (error) {
        console.log("Login failed: ", error);
        
    }
}

userLogin();


