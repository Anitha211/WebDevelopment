// Asynchronous Js - is a way of running time consuming tasks in the 
// background so that the rest of the code can continue executing without waiting.

function greet(callback) {
    console.log("Hello");
    callback();
}

function sayBye() {
    console.log("Goodbye");
}

greet(sayBye);

// 

function calculate(a, b, callback) {
    callback(a, b);

}

function add(x, y) {
    console.log(x + y);

}

calculate(10, 5, add);

// 

console.log("Start");

setTimeout(function () {
    console.log("Task finished after 2 seconds");

}, 2000);

console.log("End");

// 

function placeOrder(callback) {

    console.log("Order placed");

    setTimeout(() => {
        callback();
    }, 3000)

}

function orderDelivery() {
    console.log("order delivered");

}

placeOrder(orderDelivery);

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

// 

function withdraw(amount, callback) {
    console.log("Processing withdraw of + amount");

    setTimeout(() => {
        callback();
    }, 2000);
}

withdraw(5000, function () {
    console.log("Please collect your cash");

});

// 

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

// Promise - it gives a result in the future (success or failure).

let promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Success")
    } else {
        resolve("Failed")
    }
});

promise.then((result) => {
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

// 

function sendEmail() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Email Sent Successfully");
        }, 3000)
    });
}

sendEmail()
.then((res) => {
    console.log(res);
    
})

.catch((err) => {
    console.log(err);
    
});

// 

function downloadFile() {
    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("File Downloaded Successfully");
        }, 4000)
    });
}

console.log("Downloading File...");

downloadFile()
.then((res) => {

    console.log(res);
    
})

.catch((err) => {
    console.log(err);
    
})

// 

function checkResult(marks) {

    return new Promise((resolve, reject) => {

        if(marks >= 35) {
            resolve("Pass");
        } else {
            reject("Fail")
        }
    });
}

checkResult(80)
.then((result) => {
    console.log(result);
    
})
.catch((reject) => {

    console.log(reject);
    
});

// Promise Methods - 

// Promise.all() ->  if any promise is rejected then the entire result will rejects

let p1 = Promise.resolve(10);
let p2 = Promise.resolve(20);
let p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])

.then((r) => {
    console.log(r);
})
.catch((e) => {
    console.log(e);
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


// 

let users = fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json());

let posts = fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json());

Promise.all([users, posts])

.then((data) => {
    console.log("Users: ", data[0]);
    console.log("Posts: ", data[0]);
    })
.catch((error) => {
    console.log(error);

});

// 

let student = new Promise(resolve => {
    setTimeout(() => {
        resolve("Students Data")
    },1000)
});

let marks = new Promise(reject => {
    setTimeout(() => {
        reject("Marks Data")
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

let seat = new Promise((resolve) => {

    setTimeout(() => {
        resolve("seat Available");
    },1000)
});

let Payment = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Payment Successful")
    },2000)
});

let server = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Server Error")
    }, 2500)
});

Promise.all([seat, Payment, server])
.then((result) => {
    console.log(result);
    
})

.catch((error) => {
    console.log(error);
    
});

// promise.any() - it returns only the first resolve condition

let P1 = Promise.resolve("ERROR 1");

let P2 = Promise.reject("ERROR 2");

Promise.any([P1, P2])
.then(result =>
    console.log(result)
)
.catch(error =>
    console.log(error)
);

// 

let A = Promise.reject("error A");
let B = Promise.reject("error B");
let C = Promise.reject("error C");

Promise.any([A, B, C])
.then((r) =>  console.log(r))
.catch((e) => console.log(e));

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

// promise.race() - it returns the first settled promise (either it is resolve or reject)

let promise1 = Promise.resolve("Fail race")
let promise2 = Promise.resolve("Resolve")

Promise.race([promise1, promise2])
.then(function (res) {
    console.log(res);
})
.catch(function (err) {
    console.log(err)
})

// 

let server1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        reject("Server 1 Error")
    },1000)
});

let server2 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Server 2 Error")
    },2000)
});

let server3 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Server 3 Error")
    },3000)
});

Promise.race([server1, server2, server3])
.then(result => console.log(result)
)
.catch(error => console.log(error)
);

// Promise.allSettled - it returns both resolve and reject

let Users = Promise.resolve("Users Loaded")
let product = Promise.reject("Products API Failed")
let orders = Promise.resolve("Orders Loaded")

Promise.allSettled([Users, product, orders])
.then(result =>
    console.log( result)
)
.catch(error =>
    console.log(error)

);

// 

let a1 = Promise.resolve("Sucesss");
let a2 = Promise.reject("Error");

Promise.allSettled([a1, a2])
.then((result) =>
    console.log(result)
)
.catch((error) =>
    console.log(error)
);

// 

let s1 = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Done")
    }, 1000)
});

let s2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Failed")
    }, 2000)
})

Promise.allSettled([s1, s2])
.then((result) => {
    console.log("Allsettled:", result);
})
.catch((error) => {
    console.log(error);
});

// 

let pro1 = Promise.resolve(100);

let pro2 = Promise.reject("Error occurred!!!!!!!!");

let pro3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject(12345)
    }, 1000)
});

Promise.allSettled([pro1, pro2, pro3])
.then(result =>
    console.log("allSettled--", result)
)
.catch(error =>
    console.log("allSettled:", error)

);

// 






 









