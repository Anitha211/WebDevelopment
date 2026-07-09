// Asynchronous JS-

// Calllback - is a function passed as an argument to another function
// and executed later, often after an asynchronous function.

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

function fetchData(callback) {
    setTimeout(() => {
        callback("Data Received")
    }, 2000);
}

fetchData((data) => {
    console.log(data);
});

// 

function calculate(a, b, callback) {
    callback(a, b);
}

function add(x, y) {
    console.log("Add: ", x + y);
}

calculate(10, 20, add);

// 

function prepareFood(food) {
    console.log("Preparing food..");

    setTimeout(() => {
        console.log("Food Ready");
        food();
    }, 4000)

}

function serveFood() {
    console.log("Serving Food");
}

prepareFood(serveFood);

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


// Promise -  it gives a result in the future (success or failure).

let promise = new Promise((resolve, reject) => {
    let success = false;

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
    })
    .finally(() => {
        console.log("Done");
    });

// 

let loginPromise = new Promise((resolve, reject) => {
    let isLoggedin = true;

    if (isLoggedin) {
        resolve("Login Successfully");
    } else {
        reject("Invalid Credentials");
    }
});

loginPromise
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

// 

function checkResult(marks) {
    return new Promise((resolve, reject) => {
        if(marks >= 35) {
            resolve("Students Passed");
        } else {
            reject("Student Failed");
        }
    });
}

checkResult(70)
.then((res) => console.log(res))
.catch((err) => console.log(err));

// 

function withdrawal(balance, amount) {
    return new Promise((resolve, reject) => {
        if(balance >= amount) {
            resolve("Withdrawal Successful");
        } else {
            reject("Insufficient Balance");
        }
    });
}

withdrawal(5000, 500)
.then((res) => console.log(res))
.catch((err) => console.log(err));

// Promise Methods - promise.all(), promise.any(), promise.race(), promise.allsettled().

// promise.all() -  if any promise is rejected then the entire result will rejects

let p1 = Promise.resolve("Synchronous JS");
let p2 = Promise.resolve("Asynchronous JS");

Promise.all([p1, p2])
.then((result) => {
    console.log("Promise,all(): ", result);
})
.catch((error) => {
    console.log(error);    
})

// 

let otp1 = Promise.resolve("OTP1 from Provider 1");
let otp2 = Promise.reject("OTP1 from Provider 2");
let otp3 = Promise.resolve("OTP1 from Provider 3");

Promise.all([otp1, otp2, otp3])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});

// 

let file1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("File1 Downloaded");
    }, 3000)

});

let file2= new Promise((resolve) => {
    setTimeout(() => {
        resolve("File2 Downloaded");
    },2000)

});

Promise.all([file1, file2])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});


// Promise.any() - it returns only the first resolve condition

let p11 = Promise.resolve("Success any");
let p22 = Promise.reject("Failed any");

Promise.any([p11, p22])
.then((result) => {
    console.log(result);
})
.catch((err) => {
    console.log(res);    
});

// 

let gPay = Promise.reject("GPay Failed");

let phonePay = Promise.resolve("Payment Success");

let payTm = Promise.resolve("Payment SUCCESS");

Promise.any([gPay, phonePay, payTm])

.then((res) => console.log(res))
.catch((err) => console.log(err));

// 

let task1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("TASK 1");
    }, 3000);
});

let task2 = new Promise((resolve) =>{
    setTimeout(() => {
        resolve("Task 2")
    }, 1000)
});

let task3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task 3")
    }, 2000)
});

Promise.any([task1, task2, task3])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});

// Promise.race - it returns the first settled promise whether it is resolved or rejected.

let pro1 = Promise.reject("Fail race")
let pro2 = Promise.resolve("Resolve")

Promise.race([pro1, pro2])
.then(function (res) {
    console.log("Promise.race(): ",res);
})    
.catch(function (err) {
    console.log(err)
});

// 

let zomato =new Promise((resolve) => {
    setTimeout(() => {
        resolve("Zomato Delivered");
    }, 2000)
});

let swiggy =new Promise((resolve) => {

    setTimeout(() =>{
        resolve("Swiggy Delivered");
    },1500)
});

Promise.race([zomato, swiggy])

.then((result) => {
    console.log(result);
    
})
.catch((error) => {
    console.log(error);
    
});

// 

let fetch = new Promise(resolve => {

    setTimeout(() => {
        resolve("Data Received");
    },5000)
})

let timeout = new Promise((resolve, reject) => {
    setTimeout(() => {

        reject("Request time out")
    }, 3000)
});

Promise.race([fetch, timeout])
.then(r => console.log(r))
.catch(e => console.log(e));

// Promise.allSettled - it returns both resolve and reject

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

let s1 = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Done")
    }, 1000)
});

let s2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Failed////////////")
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









