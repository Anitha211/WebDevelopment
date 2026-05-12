// callback: it is a function passed as an argument to another function and execute later

function greet(name) {
    console.log("Hello " + name);
}

setTimeout(greet, 1000, "Anitha");

// 

function displayMsg() {
    console.log("Message diplay after 4 seconds");

}

setTimeout(displayMsg, 4000)

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

// promise : it gives a result in the future (success or failure).

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

function checkNumber(num) {
    return new Promise(function (resolve, reject) {
        if (num > 10) {
            resolve("Number is greater than 10")
        } else {
            reject("Number is less than 10")
        }
    });
}
checkNumber(6)
    .then(function (result) {
        console.log("SUCCESS:", result);
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });

// 

// Promise method: all, race, allSettled, any

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

let T1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("Resolved")
    }, 1000);
});

let T2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("Sucessfully resolved")
    }, 1500)
});

Promise.all([T1, T2])
    .then((rel) => console.log("Result: ", rel))
    .catch((err) => console.log("Error: ", err))

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

    })


// promise.race() ---> it returns the first settled promise 

let P1 = Promise.resolve("Fail race")
let P2 = Promise.resolve("Resolve")

Promise.race([P1, P2])
    .then(function (res) {
        console.log(res);
    })
    .catch(function (err) {
        console.log(err)
    });

// 

let R1 = new Promise((reject) => {
    setTimeout(() => {

        reject("First Promise")
    },500)
});

let R2 = new Promise((reject) => {
    setTimeout(() => {
        reject("Second Promise")
    },1500)
})

Promise.race([R1, R2])
    .then((res) => {
        console.log(res);

    })

    .catch((err) => {

        console.log(err);

    })


//  Promise.allSettled() -> it returns both resolve and reject

let a1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Allsettled - resolved")
    },5000)
});


let a2 = new Promise((reject) => {
    setTimeout(() => {
        reject("Allsettled - rejected ")
    },6000)
});

Promise.allSettled([a1, a2])
.then((res) => {
    console.log(res);
    
})

.catch((err) => {

    console.log(err);
    
})

// 

let S1 = Promise.resolve("Sucesss");
let S2 = Promise.resolve("Error");

Promise.allSettled([S1, S2])
    .then((result) =>
        console.log("allSettled: ", result)
    )
    .catch((error) =>
        console.log(error)
    )


// Promise.any() -> it returns only the first resolve condition

let a11 = Promise.resolve("ERROR 1!!");

let a22 = Promise.reject("ERROR 2!!");

Promise.any([a11, a22])
.then(result => console.log(result))
.catch(error => console.log(error));

// 

let d = Promise.reject("Success1")
let f = Promise.reject("Success");

Promise.any([d,f])
.then((res) => console.log(res))
.catch((e) => console.log(e))

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

// Async and await ->  
    // async makes a function to return a promise
    // await makes a function to wait for a promise

function getVal(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("Done async")
        },4000);
    })
};

async function hello() {
    return await getVal()
    
}

let result = hello();
console.log(result);

// 

async function add(){
    let n = await getMul();
    console.log(n + 5);
};
add();

// 

function square(number){

    return new Promise(function(resolve){

        resolve(number * number);
    })
}

async function calculate(){

    let value = await square(5);

    console.log(value);
}
calculate();

// 

function getEven(num){
    return Promise.resolve(num % 2 == 0);
}

async function checkNum(){
    let even = await getEven(6);
    if(even){
        console.log("Even");
    } else {
        console.log("Odd");
        
    }
}

checkNum();

// 

function getValues(num){
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(num)
        },2000)
    })
}

async function printNum(){
    for(let i=1; i <= 7; i++) {
       console.log(await getValues(i));
    }
};

printNum();

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




