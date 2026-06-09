// Asynchronous JavaScript - is a way of running time consuming tasks in the 
// background so that the rest of the code can continue executing without waiting.
// Asynchronous js allows to perform like Api calls, timers without blocking the execution of other code.

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

function getData(callback) {
    setTimeout(() => {
        console.log("Data fetched data");
        callback();
    }, 2000)
}

function processData() {
    console.log("Processing data....");

}
getData(processData);

// Login System

function loginUser(callback) {
    console.log("Checking Cerdentials...");

    setTimeout(() => {
        console.log("Login Successful");
        callback();
    }, 3000)
}

function showDashboard() {
    console.log("Welcome to Dashboard");
}

loginUser(showDashboard);

// food order

function prepareFood(food) {
    console.log("Preparing food...........");

    setTimeout(() => {
        console.log("Food Ready");
        food();
    }, 4000)

}

function serveFood() {
    console.log("Serving Food");
}

prepareFood(serveFood);

// 

let btn = document.getElementById("btn");

let result = document.getElementById("result");

btn.addEventListener("click", function () {
    result.textContent = "Downloading....";

    setTimeout(() => {
        result.textContent = "Download Complete";
        console.log("Download Complete after 2 seconds");

    }, 2000)
});

// 

let count = 0;

let Btn = document.getElementById("Btn");

Btn.addEventListener("click", function () {
    setTimeout(function () {
        count++;

        document.getElementById("count").textContent = "Counter :" + " " + count;

        console.log("Counter :" + " " + count);

    }, 2000)
});

// form submit

let form = document.getElementById("form");

let msg = document.getElementById("message")

form.addEventListener("submit", function (event) {

    event.preventDefault();

    msg.textContent = "Checing details...";

    setTimeout(() => {
        console.log("Login successfully");
        msg.textContent = "Login Successsful"
    }, 1500)
})

// callback hell

function getUser(user) {

    setTimeout(() => {
        console.log("User fetched");
        user();
    }, 1000)
};

function getOrders(items) {

    setTimeout(() => {
        console.log("Orders fetched");
        items();
    }, 1000)
};

function getPayment(pay) {

    setTimeout(() => {
        console.log("Payment fetched");
    }, 1000)
};

getUser(() => {
    getOrders(() => {
        getPayment(() => {
            console.log("All data loaded");
        });
    });
});

// 

let start = document.getElementById("start");

start.addEventListener("dblclick", function () {

    console.log("Step 1");

    setTimeout(() => {

        console.log("Step 2");

        setTimeout(() => {

            console.log("Step 3");

            setTimeout(() => {
                console.log("Process Completed");

            }, 1000)
        }, 2000)

    }, 3000)
});


// Promises - it gives a result in the future (success or failure).

let promise = new Promise((resolve, reject) => {
    let success = true;

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

let orderFood = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Food Delivered")
    }, 3000);
})

orderFood
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

// 

let p = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello after 2 secomds")
    }, 2000)
})
p
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.log(error);
    });

// Promise Methods - any(), race(), all(), allSettled()

// promise.any() - it returns only the first resolve condition

let p1 = Promise.resolve("ERROR 1");

let p2 = Promise.reject("ERROR 2");

Promise.any([p1, p2])
    .then(result =>
        console.log(result)
    )
    .catch(error =>
        console.log(error)
    );

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

let A = Promise.reject("error A");
let B = Promise.reject("error B");
let C = Promise.reject("error C");

Promise.any([A, B, C])

    .then((r) => { console.log(r) })
    .catch((e) => console.log(e));

// promise.race() - it returns the first settled promise (either it is resolve or reject)

let promise1 = Promise.resolve("Fail race")
let promise2 = Promise.resolve("Resolve")

Promise.race([promise1, promise2])
.then(function (res) {
    console.log("PROMISE.RACE:", res);
})
.catch(function (err) {
    console.log(err)
})

// 

let fetchData = new Promise(resolve => {

    setTimeout(() => {
        resolve("Data Received");
    },5000)
})

let timeout = new Promise((resolve, reject) => {
    setTimeout(() => {

        reject("Request time out")
    }, 3000)
});

Promise.race([fetchData, timeout])
.then(r => console.log(r))
.catch(e => console.log(e));

// 

let runner1 = new Promise(resolve => 
    setTimeout(() => {
        resolve("Runner 1 wins")
    },4000)
);

let runner2 = new Promise(resolve => 
    setTimeout(() => {
        resolve("Runner 2 wins")
    },2000)
);

let runner3 = new Promise(resolve => 
    setTimeout(() => {
        resolve("Runner 3 wins")
    },3000)
);

Promise.race([runner1, runner2, runner3])

.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
    
})

// Promise.All() - if any promise is rejected then the entire result will rejects

let P1 = Promise.resolve("HTML");
let P2 = Promise.resolve("CSS");
let P3 = Promise.resolve("JAVASCRIPT");

Promise.all([P1, P2, P3])
.then((r) => {
    console.log("promise.all()--", r);    
})
.catch((e) => {
    console.log(e);
})

// 

let student = new Promise(resolve => {
    setTimeout(() => {
        resolve("Students Data")
    },1000)
});

let marks = new Promise(resolve => {
    setTimeout(() => {
        resolve("Marks Data")
    },2000)
});

let attendance = new Promise(resolve => {
    setTimeout(() => {
        resolve("Attendance Data")
    },1500)
});

Promise.all([student, marks, attendance])

.then((res) => {
    console.log(res);
})

.catch((err) => {
    console.log(err);
    
});

// 

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

let profile = Promise.resolve("Profile Loaded")
let score = Promise.reject("Score sever down")
let Attendance = Promise.resolve("Attendance Loaded")

Promise.allSettled([profile, score, Attendance])

.then((res) => {
    console.log(res);    
})

.catch((Err) => {
    console.log(err);  
})

// 

let a11 = Promise.resolve(100);

let a22 = Promise.reject("Error");

let a33 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject(12345)
    }, 1000)
});

Promise.allSettled([a11 ,a22 , a33])
.then(result =>
    console.log("allSettled--", result)
)
.catch(error =>
    console.log("allSettled:", error)
);

// 








