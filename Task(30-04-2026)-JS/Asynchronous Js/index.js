// Async/Await, promises and error handlings

async function hello() {
    return "Hello World";
}

hello()
    .then((res) => console.log(res));

// 

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Received")
        }, 2000);
    });
}

async function fetchData() {
    let result = await getData();
    // console.log(result);
}

fetchData();

// delay 

function delayHello() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Hello Async"),
            1000)
    })
}

async function run() {
    let res = await delayHello();
    console.log(res);
}

run();

// 

function task1() {
    return new Promise((resolve) => {
        setInterval(() => resolve("Task 1 done"), 1000);
    });
}

function task2() {
    return new Promise((reject) => {
        setInterval(() => reject("Task 2 done"), 1000);
    });
}

async function runTask() {
    let res1 = await task1();
    console.log(res1);

    let res2 = await task2();
    console.log(res2);
}

runTask();

// 

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Done"), ms);
    })
}

async function run() {
    console.log("Start");

    let result = await delay(2000);
    console.log(result);

    console.log("End");
}

run();

// 

let count = 0;

let interval = setInterval(async () => {
    count++;
    console.log("Running: ", count);

    if (count === 5) {
        clearInterval(interval);
        console.log("Stopped");
    }
}, 5000);

// 

function fetchUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["A", "B", "C", "D"])
        }, 3000);
    })
}

async function showUsers() {
    console.log("Loading Users...");
    let users = await fetchUsers();
    console.log(users);
}

showUsers();

// 

function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 == 0) {
            resolve("Even Number")
        } else {
            reject("Odd Number")
        }
    });
}

checkNumber(4)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

checkNumber(3)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

// 

function login(user) {
    return new Promise((resolve, reject) => {
        if (user === "admin") {
            resolve("Login Success...")
        } else {
            reject("Invalid User")
        }
    });
}

async function checkLogin() {
    try {
        let res = await login("admin");
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}

checkLogin();

// API METHODS

async function getData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();

        console.log("Data: ", data);
    } catch (error) {
        console.log("Error: ", error.message);

    }
}

getData();

//

async function addData() {

    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Anitha",
                email: "anitha@gmail.com"
            })
        });

        let data = await res.json();
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}

addData();

// 

async function putData() {

    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users/1", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Updated name",
            })
        });
        let data = await res.json();
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}
putData();

// 


async function patchData() {

    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users/1", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "partial data",
                email: "patch"
            })
        });

        let data = await res.json();
        console.log(data);
        
    } catch (error) {
        console.log(error);
    }
}

patchData();

//// 

async function getUser() {
    console.log("Waiting for 3 seconds...");

    setTimeout(async () => {
        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();

        console.log("Data: ", data.length,data);
        } catch (error) {
             console.log(error);
        }
    },3000)
}

getUser();

// 


