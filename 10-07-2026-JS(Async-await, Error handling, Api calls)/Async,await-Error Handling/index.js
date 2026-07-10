// ASYNC/AWAIT -
// async makes a function to return a promise
// await makes a function to wait for a promise

console.log("start");

async function test(){
    console.log("Inside");
    return "Done"
}
test()
.then(function(result){
    console.log(result);
});

console.log("End");

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

function welcome() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("welcome to javascript");
        }, 2000);
    });
};

async function displayMessage() {
    console.log("Loading...");
    
    let message = await welcome();
    console.log(message);
}

displayMessage();

// 

function loginUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Login Successful");
        }, 2500)
    })
}

async function login() {
    console.log("Logging in...");

    let message = await loginUser();

    console.log(message);

}

login();

// 

function markAttendance() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Attendance marked successfully")
        }, 3000)
    });
};

async function attendance() {
    console.log("Marking attendance..");
    
    let result = await markAttendance();

    console.log(result);
    
}

attendance();

// 

function wait(ms) {
    return new Promise(resolve => 
        setTimeout(() => {
            resolve("Loop")
        }, 3000)
    )
}

async function loop() {
    for(let i = 1;i <= 5 ; i++){
        await wait(1000);
        console.log(i,"( - after 1s)");
        
    }
}
loop();

// 

function deliverFood() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Food delivered successfully")
        }, 2000);
    });
};

async function order() {
    console.log("Waiting for order..");
    
    let result = await deliverFood();

    console.log(result);
    
};

order();

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

let EmailBtn = document.getElementById("emailBtn");
let EmailStatus = document.getElementById("emailStatus");

function sendEmail() {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Email sent Successfully.")
        }, 1500)
    });
};

EmailBtn.addEventListener("click", async () => {

    EmailStatus.textContent = "Sending email...";

    let result = await sendEmail();

    EmailStatus.textContent = result;
});

// 

let resultBtn = document.getElementById("resultBtn");
let resultStatus = document.getElementById("resultStatus");

function checkResult() {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Result: Pass");
        },4000)
    });
};

resultBtn.addEventListener("click", async () => {

    resultStatus.textContent = "Checking Result...";

    let result = await checkResult();
    resultStatus.textContent = result;
});

// 

let resetBtn = document.getElementById("resetBtn");

let status = document.getElementById("status");

let email = document.getElementById("email");

function resetPassword() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Password reset link has been sent ti your email")
        }, 3000);
    });
};

resetBtn.addEventListener("click", async () => {
    if(email.value === "") {
        status.textContent = "Please enter your email";
        return;
    };

    status.textContent = "Sending password reset link...";

    let result = await resetPassword();

    status.textContent = result;
});

// ERROR HANDLING - is used to handle the errors  
// try-> checks errors
// catch-> handle the errors
// throw-> create a custom error
// finally-> always runs

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

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Invalid username or password");
        }, 500)
    });
}

async function checkLogin() {
    try {
        let result = await login();
    } catch (error) {
        console.log(error);
        
    }
}

checkLogin();

// 

let balanceBtn = document.getElementById("balanceBtn");
let Status = document.getElementById("status1");

function checkBalance() {
    return new Promise((rsolve, reject) => {
        setTimeout(() => {
            reject("Sever Error! Please try again later")
        }, 3000);
    });
};

balanceBtn.addEventListener("click", async () => {
    Status.textContent = "Checking Balance...";

    try{

        let result = await checkBalance();

        Status.textContent = result;
    } catch(error) {
        Status.textContent = error;
    } finally {
        console.log("Balance request completed");
        
    }
});

// 







