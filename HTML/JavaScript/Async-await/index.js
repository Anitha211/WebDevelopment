// async/await --> 
    // async makes a function to return a promise
    // await makes a function to wait for a promise

// 
async function a() {

    return "Async/Await";
    
}
a()
.then(function(b){
    console.log(b);
});

// 
function getVal(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("Done")
        },4000);
    })
};

async function hello() {
    return await getVal()
    
}

let result = hello();
console.log(result);

// 

function getMsg(){
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve ("Message Received")
        },2000);
    })
};

async function showMsg() {
    return await getMsg();
};
let r = showMsg();
console.log(r);

// 
function first(){
    return new Promise (function(resolve){
        setTimeout(function(){
            resolve("First Done")
        }, 100);
    })
};

function second() {
    return new Promise (function(resolve){
        setTimeout (function(){
           resolve ("Second Done")
        },100);
    })
    
}

async function finalVal() {
    console.log(await first());
    console.log(await second());
};

finalVal();

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
let n = 0;

function getMul(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve (10)
        },100);
    })
};

async function cal(){
    let n = await getMul();
    console.log(n*2);
};
cal();

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

function Square(nums){

    return Promise.resolve(nums * nums);
}

async function Calculate(){

    let i = await Square(7);

    let j = await Square(8)

    console.log("square of i :", i );
    console.log("square of j:",  j );
    console.log("Addition of i and j:" ,i + j);
}
Calculate();

// 

function success(){
    return Promise.resolve("SUCCESS"); 
}

function failure(){
    return Promise.reject("ERROR")
}

async function getAll(){
    let Result = await Promise.allSettled([success(), failure()]);
    console.log(Result);
}
getAll();


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
greaterVal(7);

// 

async function add(a,b){
    return a + b ;
}
add(3,4).then(function(result){
    console.log(result);
});


//

// async function Printval(){
//     let f = await Promise.all([
//         delay(1),
//         delay(2) 
//     ]);
//     console.log(f);
// }
// Printval();

// 

function check(num){

    return Promise.resolve(num > 10 ? "Big" : 
        
        "Small");
}

async function getBS(){

    console.log(await check(8));
    
}
getBS();

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

function double(num){
    return Promise.resolve(num * 5)
}

async function getDoubleVal(){
    let Doubled = await Promise.all([
        double(4),
        double(5),
        double(6)
    ]);
    console.log(Doubled);
}

getDoubleVal();