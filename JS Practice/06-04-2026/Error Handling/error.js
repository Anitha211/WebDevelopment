// Error Handling --> is used to handle the errors  
// try --> checks errors
// catch ---> handle the errors
// throw ---> create a custom error
// finally --> always runs

try {
    let x = yield;
    x();
} catch (error) {
    console.log("Error occurred: ", error.message);

}

// 

try {
    console.log("Try block");

} catch (error) {
    console.log("Catch block");

} finally {
    console.log("Always runs");

}

// 

try {
    console.log("Start");
    throw new Error("something went wrong");
    console.log("end");
} catch (error) {
    console.log(error);
} finally {
    console.log("finally execute");

}

// 

function demo() {
    try {
        console.log("A");
        throw new Error("Error!")

    } catch (error) {
        console.log("B");


    } finally {
        console.log("C");

    }
    console.log("D");

}
demo();

// 

function checkAge(age) {
    if (age < 18) {
        throw "Not eligible";
        console.log("Not eligible");

    }
    return "Eligible";
}

try {
    console.log(checkAge(17))
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
    console.log(checkNum(7));

} catch (error) {
    console.log(error);
} finally {
    console.log("Execution Completed");

};


// 

for (let i = 1; i <= 3; i++) {
    try {
        if (i == 2) {
            throw "Error at 2"
        }
        console.log(i);

    } catch (error) {
        console.log(error);

    }
}

// 

function div(a, b) {
    if (b == 0) {
        throw "Cannot divided by zero"
    }
    return a / b;
}
try {
    console.log(div(12, 0));

} catch (error) {
    console.log(error);

}

// 

function step1() {
    return Promise.resolve("Step 1 done")
}

function step2() {
    return Promise.reject("Step 2 is failed")
}

async function process() {
    try {
        let a = await step1();
        console.log(a);

        let b = await step2();
        console.log(b);


    } catch (error) {
        console.log("Error: ", error);

    }
}

process();


// 

function task1(){
    return Promise.resolve("Task 1 done");
}

function task2(){
    return Promise.resolve("Task 2 is also done")
}

function task3(){
    return Promise.reject("Task 3 is failed")
}

async function runTasks() {
    try {
        let result = await Promise.all([task1(), task2(), task3()])
        console.log(result);
        
    } catch (error) {
        console.log(error);
        
    } 
}
runTasks();


// 

function delayTask(name, success) {

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if(success) {
                resolve(name);
            } else {
                reject(name + " failed")
            }
        },3000);
    })
}

async function Run() {
    try {
        let r = await Promise.allSettled([
            delayTask("A", true),
            delayTask("B", true),
            delayTask("C", false),
        ]);
        console.log(r);
        
    } catch (error) {
        console.log(error);
        
    }
}
Run();


// 












