// callback - is a function that runs afther another function finishes its work.

console.log("Start");

setTimeout(() => {
    console.log("Asynchronous JS shows after 2 second");
}, 2000);

console.log("End");

// 

function greet(callback) {
    console.log("Hello");
    callback();
}

function sayBye() {
    console.log("Goodbye");
}

greet(sayBye);

// 

function fetchData() {
    setTimeout(() => {
        console.log("Data received");
    }, 2000);
}

fetchData((data) => {
    console.log(data);
});

console.log("Request Sent");

// 

function calculate(a, b, callback) {
    return callback(a, b);
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, multiply));

// 

function placeOrder(callback) {
    console.log("Order Placed");

    setTimeout(() => {
        callback();
    }, 3000);
}

function orderDelivered() {
    console.log("Order Delivered Successfully");

}

placeOrder(orderDelivered);

// Promises - it gives a result in the future (success or failure).

let promise = new Promise((resolve, reject) => {
    let success = false;

    if (success) {
        resolve("Task Completed")
    } else {
        resolve("Task Failed")
    }
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

// 

console.log("Begin");

let P = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Async Done")
    }, 5000)
})
P
    .then((res) => console.log(res))
    .catch((err) => console.log(err))

console.log("ENDED");

// 

let loginPromise = new Promise((resolve, reject) => {
    let isLoggedin = true;

    if (isLoggedin) {
        resolve("Login Successfully")
    } else {
        reject("Invalid Credentials")
    }
});

loginPromise
    .then((res) => console.log(res))
    .catch((err) => console.log(err))

// 

function checkResult(marks) {
    return new Promise((reslove, reject) => {
        if (marks >= 35) {
            reslove("Pass")
        } else {
            reject("Fail");
        }
    });
}

checkResult(80)
    .then((result) => console.log(result))
    .catch((error) => console.log(error))

// 

function sendEmail() {
    return new Promise((reslove) => {
        setTimeout(() => {
            reslove("Email sent Successfully")
        }, 2000)
    });
}

sendEmail()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

// 

function applyLoan(credit) {
    return new Promise((reslove, reject) => {
        if (credit >= 700) {
            reslove("Loan Approved")
        } else {
            reject("Loan Rejected")
        }
    });
}

applyLoan(750)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

// 

let num = 12;

let checkNumber = new Promise((resolve, reject) => {

    if (num % 2 == 0) {
        resolve("Even number");

    } else {
        reject("Odd number")
    }
})

checkNumber
    .then((result) => console.log(result))
    .catch((error) => console.log(error));


// Promise Methods:  

//promise.any() - it returns only the first resolve condition

let p1 = Promise.reject("Rejected");
let p2 = Promise.resolve("Resloved");

Promise.any([p1, p2])
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

// 

let A = Promise.resolve("error A");
let B = Promise.reject("error B");
let C = Promise.reject("error C");

Promise.any([A, B, C])
    .then((r) => { console.log(r) })
    .catch((e) => console.log(e))

// 

let t1 = Promise.reject("Server 1 Failed");

let t2 = new Promise(resolve => {

    setTimeout(() => {

        resolve("Data fetched from server 2");
    }, 2000);
});

let t3 = new Promise(resolve => {

    setTimeout(() => {
        resolve("Data from server 3")
    }, 3000)
});

Promise.any([t1, t2, t3])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);

    })

// 

let gPay = Promise.reject("GPay Failed");

let phonePay = Promise.resolve("Payment Success");

let payTm = Promise.resolve("Payment SUCCESS");

Promise.any([gPay, phonePay, payTm])

.then((res) => console.log(res))
.catch((err) => console.log(err))

// 

let swiggy = new Promise(resolve => 
    setTimeout(() => resolve("Swiggy Accepted Order"),3000)
);

let zomato = new Promise(reslove => 
    setTimeout(() => reslove("Zomato Accepted Order"), 2500)
);

Promise.any([swiggy, zomato])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
})

// 

// Promise.all() -  if any promise is rejected then the entire result will rejects

let user = Promise.resolve("User Details");
let cart = Promise.resolve("Cart Items");
let payment = Promise.reject("payment status");

Promise.all([user, cart, payment])

.then((a) => {
    console.log(a);
    
})
.catch((b) => {
    console.log(b);
    
})

// 

let otp1 = Promise.resolve("OTP1 from Provider 1");
let otp2 = Promise.resolve("OTP1 from Provider 2");
let otp3 = Promise.resolve("OTP1 from Provider 3");

Promise.all([otp1, otp2, otp3])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error)
})

// 

let step1 = new Promise(function (resolve) {
    setTimeout(function () {
        console.log("Step 1");
        resolve(100);
    }, 5000)
});

let step2 = new Promise(function (resolve) {
    setTimeout(function () {
        console.log("Step 2");
        resolve(20);
    }, 2000)
});

Promise.all([step1, step2])
.then(function ([a, b]) {   
    console.log("Total:", a + b);
})
.catch((error) => {
    console.log(error);    
});

// 

let seatBooking = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Seat Booked")
    }, 500)
})

let Payment = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Payment Completed")
    }, 1000);
})

let ticket = new Promise((reslove) => {
    setTimeout(() => {
        reslove("Ticket Generated")
    }, 2500);
})

Promise.all([seatBooking, Payment, ticket])

.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error)
})

// Promise.race() - it returns the first settled promise 

let pro1 = Promise.resolve("Fail race")
let pro2 = Promise.resolve("Resolve")

Promise.race([pro1, pro2])
.then(function (res) {
    console.log(res);
})    
.catch(function (err) {
    console.log(err)
});

// 

let r1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Server Error")
    },3500)
})

let r2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Success")
    },2000)
})

Promise.race([r1, r2])

.then((r) => console.log(r))
.catch((e) => console.log(e));

// 

function fast() {
    return new Promise(function (resolve) {
        return new Promise(function () {
            resolve("Fast")
        }, 1000);
    });
}

function slow() {
    return new Promise(function (resolve) {
        return new Promise(function () {
            resolve("slow")
        }, 2000);
    });
}

Promise.race([fast(), slow()])
.then(function (a) {
    console.log(a);
})
.catch(function (b) {
    console.log(b)
});

// Promise.allSettled() - it returns both resolve and reject

let a1 = Promise.resolve("Sucesss");
let a2 = Promise.reject("Error");

Promise.allSettled([a1, a2])
.then((result) =>
    console.log("allSettled: ", result)
)
.catch((error) =>
    console.log(error)
);

// 

let email = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Email Login Success")
    }, 1000);
});

let google = new Promise((reject) => {
    setTimeout(() => {
        reject("Google login Success")
    }, 2000);
});

let facebook = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Facebook Login Failed")
    },3000)
});

Promise.allSettled([email, google, facebook])
.then((res) => {
    console.log(res);
})

.catch((err) => {
    console.log(err);
});

// Async/Await =>  async makes a function to return a promise
                // await makes a function to wait for a promise

async function a() {
    return "Async/Await";
}
a()
.then(function(b){
    console.log(b);
});


// 

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

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Loaded")
        },2000)
    })
}

async function fetchData() {
    let result = await getData();
    console.log(result);
}

fetchData();

// 

function getValues(num){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num)
        },2000)
    })
}

async function printNum() {
    for(let i = 1; i <= 7; i++){
        console.log(await getValues(i));
        
    }
};
printNum();

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

function getProfile() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Profile Loaded")
        }, 1000);
    })
}

function getSalary() {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Salary Loaded")
        }, 2000);
    })
}

async function employeeDetails() {
    let Profile = await getProfile();
    console.log(Profile);

    let Salary = await getSalary();
    console.log(Salary);
}

employeeDetails();

// 







