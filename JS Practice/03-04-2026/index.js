// Asynchronous -> executes code without blocking, allowing other operations to continue before the current task completes.

// promises: it gives a result in the future (success or failure).

let p = new Promise(function (resolve, reject) {
    let success = true;

    if (success) {
        resolve("Promise resolved successfully");
    } else {
        reject("Promise rejected")
    }
});

p.then(function (result) {
    console.log(result);
})
    .catch(function (error) {
        console.log(error);

    });

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

// 
let isLogin = false;

let login = new Promise(function (resolve, reject) {

    if (isLogin) {
        resolve("Login Successful");
    } else {
        reject("Login Failed")
    }
});

login
    .then((result) => console.log(result))
    .catch((error) => console.log(error))


// 

function checkNum(num) {
    return new Promise(function (resolve, reject) {
        if (num > 10) {
            resolve("Number is greater than 10")
        } else {
            reject("Number is less than 10")
        }
    });
}
checkNum(6)
    .then(function (result) {
        console.log("SUCCESS:", result);
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });

// 

let promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello after 2 secomds")
    }, 2000)
})
promise
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.log(error);
    })

// Promise methods : Promise.all(), Promise.race(), Promise.allSettled(), Promise.any()

// Promise.All() ->  if any promise is rejected then the entire result will rejects

let p1 = Promise.resolve(10);
let p2 = Promise.resolve(20);
let p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])
    .then((r) => {
        console.log(r);
    })
    .catch((e) => {
        console.log(e);
    })

// 

let r1 = Promise.resolve("Success 1");
let r2 = Promise.reject("Error");
let r3 = Promise.resolve("Success 3");

Promise.all([r1, r2, r3])
    .then((rel) => console.log(rel))
    .catch((err) => console.log(err))

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

let t1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("Resolved")
    }, 1000);
});

let t2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("Sucessfully resolved")
    }, 1500)
});

let t3 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("RESOLVED")
    }, 2000)
});

Promise.all([t1, t2, t3])
    .then((rel) => console.log("Result: ", rel))
    .catch((err) => console.log("Error: ", err))

// 

let users = fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json());

let posts = fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json());

Promise.all([users, posts])
    .then(([userData, PostData]) => {
        console.log("Users:", userData.length);
        console.log("Posts:", PostData.length);
    })
    .catch((error) => {
        console.log(error);
    })

// promise.race() ---> it returns the first settled promise 

let pro1 = Promise.resolve("Fail race")
let pro2 = Promise.resolve("Resolve")

Promise.race([pro1, pro2])
    .then(function (res) {
        console.log(res);
    })
    .catch(function (err) {
        console.log(err)
    })

// 

let T1 = new Promise(function (reject) {
    setTimeout(function () {
        reject("Race is reject but Resolve")
    }, 5000)
})

let T2 = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Resolve....................")
    }, 3000)
})

Promise.race([T1, T2])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })

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

// 


// Promise.allSettled() -> it returns both resolve and reject

let a1 = Promise.resolve("Sucesss");
let a2 = Promise.reject("Error");

Promise.allSettled([a1, a2])
    .then((result) =>
        console.log("allSettled: ", result)
    )
    .catch((error) =>
        console.log(error)
    )

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
    })

// 

let u = Promise.resolve(100);

let v = Promise.reject("Error occurred!!!!!!!!");

let w = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject(12345)
    }, 1000)
});

Promise.allSettled([u, v, w])
    .then(result =>
        console.log("allSettled--", result)
    )
    .catch(error =>
        console.log("allSettled:", error));

// 

// Promise.any() -> it returns only the first resolve condition

let v1 = Promise.reject("error!!!!!!!!!!!!");

let v2 = Promise.resolve("success!!");

let v3 = Promise.resolve("Another Success");

Promise.any([v1, v2, v3])
.then(result => console.log("First resolve case: ",result))
.catch(error => console.log(error));

// 

let P1 = Promise.reject("Error - 1");
let P2 = Promise.reject("Error - 2");

Promise.any([P1, P2])
.then((rel) => 
    console.log(rel)
)
.catch((err) => 
    console.log(err)
);

// 

let X = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve ("Success after 1 second.")
    },1000)
});

let Y = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve ("success after 500ms.")
    },500)
});


let Z = new Promise(function(resolve, reject){
    setTimeout(function(){
        reject ("Failed.")
    },100)
});

Promise.any([X, Y, Z])
.then(result => 
    console.log(result)
)
.catch(error => 
    console.log(error)
)

//













