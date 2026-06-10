// Async-Await -> 
// Async - makes a function return a Promise.
// Await - pauses the execution of that function until the promise is resolved or rejected.


// with Promise
function getData() {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Received")
        }, 2000)
    });
}

getData()
    .then((result) => {
        console.log(result);
    })


// With async/await

function GetData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Fetched")
        }, 3000)
    })
}

async function fetchData() {
    let result = await GetData();
    console.log(result);
}

fetchData();

// 

function delayHello() {
    return new Promise((resolve) => {
        setTimeout(() =>
            resolve("Hello Async"),
            4000)
    })
}

async function run() {
    let res = await delayHello();
    console.log(res);
}

run();


// waiting for a task

function makeTea() {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Tea is ready")
        }, 3500)
    })
}

async function serveTea() {
    console.log("Making tea...");

    let result = await makeTea();

    console.log(result);
}

serveTea();

// 

function step1() {
    return Promise.resolve("Step1 Completed");
};

function step2() {
    return Promise.resolve("Step2 Completed");
};

async function process() {
    let result1 = await step1();
    console.log(result1);

    let result2 = await step2();
    console.log(result2);
}

process();

// 

function getUser() {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: "John", age: "22" });
        }, 2000)
    })
}

async function showUsers() {
    let user = await getUser();
    console.log(user);

}

showUsers();

// 

function loginUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Login Successful");
        }, 2000)
    })
}

async function login() {
    console.log("Logging in...");

    let message = await loginUser();

    console.log(message);

}
login();

// 

function getResult() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Pass")
        },1500)
    })
}

async function checkResult() {

    let result = await getResult();

    console.log("Status: ",result);
    
}

checkResult();

// 

function getBalance() {

    return new Promise((resolve) => {
        setTimeout(() => {

            resolve(25000);
        }, 5000);
    });
}

async function checkBalance() {

    console.log("Checking Balance....");

    let balance = await getBalance();

    console.log("Available Balance:", balance);
    
}

checkBalance();

// 

function placeOrder() {
    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Order confirmed")
        }, 500)
    })
}

function prepareFood() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Food Prepared")
        }, 2000);
    });
}

function deliverFood() {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Food Delivered")
        },4000)
    })
}

async function orderFood() {
    console.log(await placeOrder());
    console.log(await prepareFood());
    console.log(await deliverFood());

}

orderFood();

// ERROR HANDLINGS - is used to handle the errors  
// try-> checks errors
// catch-> handle the errors
// throw-> create a custom error
// finally-> always runs

try {
    console.log("Error handlings");
    
} catch(error) {
    console.log("Error");

}

// 

try {
    let x = 10;
    x();
} catch (error) {
    console.log("Type Error");
    
}

// 

try {
    console.log("Start");
    throw new Error("somethin went wrong");
    console.log("end");
} catch (error) {
    console.log(error.message);
} finally {
    console.log("finally execute");
    
}

// 

function divide(a, b) {
    try {
        if(b === 0) {
            throw new Error("Cannot divide by zero");
        }

        console.log(a/b);
        
    } catch (error) {
        console.log(error.message);
        
    }
}

divide(10, 0);

// 

function checkAge(age){
    if(age < 18){
        throw "Not eligible"
    }
    return "Eligible";
}

try {
    console.log(checkAge(16))
} catch (error) {
    console.log(error);
    
}

// 

function checkNum(num){
       if(num < 0){
        throw "Invalid Number"
       }
       return "Valid Number"
}
try {
    console.log(checkNum(4));
    console.log(checkNum(-1));
} catch (error) {
    console.log(error);
} finally {
    console.log("Execution Completed");
    
};

// 

function withDraw(balance, amount) {
    try {
        if(amount > balance) {

            throw new Error("Insufficient Balance");
        }

        console.log("Withdrawal Successful");
        
    } catch (error) {
        console.log(error.message);
    }
}

withDraw(5000, 2000);

// error handling with async/await

function fetchData() {
    return new Promise((reject) => {
        reject("Server Error");
    });
}

async function data() {
    try{
        let result = await fetchData();
        console.log(result);
        
    } catch (error) {
        console.log(error);
        
    }
}

data();

// validate password length

function checkPassword(password) {

    try {

        if(password.length < 8) {
            throw new Error("Password must be atleast 8 characters");
        }

        console.log("Password Accepted");
        
    } catch (error) {
        console.log(error.message);
        
    }
}

checkPassword("abc123");
checkPassword("1A2B3C4D5E6F");

// 

function checkArray(Arr) {
    try {
        if(Arr.length === 0) {
            throw "Array is empty"
        }

        console.log("Array has elements");
        
    } catch(error) {
        console.log(error);
    }
}

checkArray([1]);
checkArray([]);

// 

function login() {
    return Promise.resolve("User Logged in");
}

function addToCart() {
    return Promise.resolve("Product Added")
}

function payment() {
    return Promise.reject("Payment Failed")
};

async function checkOut(params) {
    
    try {
        console.log(await login());
        console.log(await addToCart());
        console.log(await payment());
        
    } catch (error) {
        console.log("Error: ", error);
        
    }

}

checkOut();

// 















