// Functions --> it is block of code to perform some task and return the value


function add(a,b) {
    console.log(a+b);
}
add(2,2);

// 

function mul(a,b){
    console.log(a*b);
    return a*b;
}
let result = mul(3,3);
console.log(result);
// mul(3,3);
// mul(10,10);

// 2 types of functions :
// Function Declaration --> function is declared by using function keyword 

function hello(a=0,b){
      console.log(a+b);
}
hello(5,7);


function values(a=0,b=null,c){
    console.log(a,b,c);

}
values(2,null)

// 

function printEvennumber(n){
    for(let i = 1 ; i<=n ; i++){
        if(i%2 == 0){
            console.log(i);
        }
    }
}
printEvennumber(20);


// Function Expression --> it allows function values and assigned variables,passed arguments
// types of function expression:named function // Anonymous fuction // arrow function

let c = function(a,b){
    return a+b;
};
console.log(c(5,9));

// named function-->

let checkNumber = function checkEvenOdd(num){
    if(num % 2 == 0){
        return "Even";
    }
    return "Odd";
}
console.log(checkNumber(10));
console.log(checkNumber(3));


//
let sumArray = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++ ) {
        sum += arr[i];
        
    }
    return sum;   
};
console.log(sumArray([1, 4, 3, 2, 6]));


// anonymous function ---> is a function without a name,these are assigned to variables

let sum = function(a,b){
    return a+b;
};
console.log(sum(7,7));
// 
let ages = [12,20,13,34]
let s = ages.map(function(age){
    if(age <= 18){
        return "Minor";
    } else {
        return "Adult";
    }
});
console.log(s);



// Arrow function --> it is a shorter way to write a function using => syntax,and these are assigned to variables


let k =(a,b) => a+b;
    console.log(k(100,7));

// 
let numbers = [2,5,4,55,44,38]
let double = numbers.map(n => {
    if(n% 2 == 0 ){
        return n * 2;
    }else{
        return n
    }
});
console.log(double);

// Recursive function --> a function calling itself 

let factorial = (n) => {
    if(n<=1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
};
console.log(factorial(5));
// 


function addArray(arr,index=0){
    if(index == arr.length){
        return 0;
    }
    return arr[index] + addArray(arr,index+1);
} 
console.log(addArray([2,4,5,7]));

//

let g = 0
let f = function rec(a){
    if(a === 0){
         return 0;
        }
        
        g++
        return g+rec(a-1);
}
console.log(f(5));

// 
function countdown(n){
if(n == 0)
    return ;
    console.log(n);
 countdown(n-1);
}
countdown(6);

// Hoisting --> 

console.log(a)
var a = 10;
// console.log(a);
// 
// console.log(b);-->in let it cannot access before initiallization 
let b = 30;
console.log(b); 

// 
// console.log(n);
const n = 40;
console.log(n);
// 
console.log(names);
var names = ["Alice","Cherry","Bob"];
names.sort(function(a,b){
    return a.localeCompare(b);
});
// 
console.log(obj);
var obj = {
    name : "John",
    age : 25
};
console.log(obj);

// 
console.log(str);
var str = "NYB INFOTECH";
console.log(str);

// 


// High and low priority 

function value(a=0,b) {
   console.log(a+b);
}
value(1,3);

// 

function num(a=2,b=3){
    console.log(a,b);
}
num(5,null);

// 

function num(a=2,b){
    console.log(a,b);
}
num(34,undefined);

// SCOPE --> is determines the accessibility of variable

const x = 10;
function hai(){
    var z = 20
    console.log(x);
    console.log(z);
}
hai();
console.log(x);
// console.log(z);

// function scope --> variables are declared inside a function 
var y = 234;
function test(){
    var y = 234;
    let r = 456;
    const f = 546;
    console.log(y);
    console.log(r);
    console.log(f);
}
test();
console.log(y);
// console.log(r);
// console.log(f);

// Block scope --> this scope only exist inside the block{}
// let and const are the block scope 

if(true){
    var p = 1;
    let q = 2;
    const h = 3; 
}
console.log(p);
// console.log(q);
// console.log(h);

// 
for(let i =0; i < 6; i++){
    console.log(i);
}
// console.log(i);

// 

for(var a = 0; a < 10; a++){
    console.log(a);
}
console.log(a);

// 
if(true){
var blockVar = "I am not a block";
let blockLet = "I am block Scoped";
const blockConst = "I am also block";
console.log(blockVar);
console.log(blockLet);
console.log(blockConst);
}
console.log(blockVar);
// console.log(blockLet);
// console.log(blockConst);

// 

for(let  i = 0; i < 5; i++ ) {
    console.log("Inside loop with let:",i);
    
};
// console.log("Inside loop with let:",i);

// Function Currying---> it transforms a funtion with multiple arguments into to a series of functions 

// function add(a,b){
//     return a + b;
// }
// console.log(add(2,3))

// 
// function add(a){
//     return function(b){
//         return function(c){
//            return a + b + c;
//         };
       
//         };
//     }
// var d = add(5)(4)(5);
// console.log(d);
// 
function mul(a){
    return function(b){
        return a * b;
    };
}
var value = mul(1000)(1000);
console.log(value);

function word(str){
    return function(str2){
        return str + str2.toUpperCase();
    }
}
var m = word('');
console.log(m("uppercase"));
console.log(m("function currying"));
// 
function mulEach(num){
    return function(array){
        return array.map(function(item)
        {
            return item * num;
        });
    }
}
let val = [1,2,3,4,7,6,12];
let val1 = mulEach(2);
console.log(val1(val));
// 
function gradeChecker(marks){
    return function(score){
        if(score < marks){
            return "Fail";
        }else if(score < 80){
            return "Pass";}
    }
}
let grade = gradeChecker(50);
console.log(grade(60));
console.log(grade(35));
// 
// Pure function --> this always returns the same output for same input.
function h(value){
    return value+100;
}
console.log(h(34));
console.log(h(567));

// 
function addNumber(arr,num){
    return [arr,num];
}
let arr =[11,22,33,44];
let newarr = addNumber(arr,55);

console.log(arr);
console.log(newarr);
// 
function add(a,b){
    return a + b;
}
console.log(add(44,99));

// 
function doubleArray(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(arr[i]*4);
    }
    return result;
}
console.log(doubleArray([2,3,4,5]))

//Impure function --> it is a function that dose not always return the same output 

function randomNumber(){
    return Math.random () * 100;
};
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());
// 
let total = 0;
function addTotal(value){
    total += value;
    return total;
};
console.log(addTotal(3));
console.log(addTotal(3));


// 
let person ={
    name: "John",
    age : 32,
};
function incrementAge(person){
    return ++person.age;
}
console.log(incrementAge(person));
console.log(incrementAge(person));
console.log(incrementAge(person));

// Higher Order function ---> it is function that takes another function 
//                            as an argument or return that function as a result.

function add(a,b){
    return a + b;
}
function higherOrderFunction(val,a,b){
    return val(a,b);
}
console.log(higherOrderFunction(add,100,100));
// 

function greet(name){
    return "Hello, " + name;
}
function user(callback){
    return callback("Alice");
}
console.log(user(greet));
// 
// function multiply(x){
//     return function(y){
//         return x * y;
//     }
// }
// let doubled = multiply(11);
// console.log(doubled(11));
// 
function myfilter(arr, callback){
     let result = [];
    for(let i =0 ; i < arr.length; i++){
        if(callback(arr[i])){
           result.push(arr[i]);
        }
    }
    return result;
}
function isEven(num){
    return num % 2 == 0;
}
let _p = [1,2,3,4,5,6,7,56,45,38]
let evenNumbers = myfilter(_p, isEven);
console.log(evenNumbers);
// 


// first class function ---> can assign a function to a variable ,passes arguments function and return a function from another function.

// assigning a function to a variable

let _greet = function(name){
    return 'Hello ' + name + '! how are you doing?'
}
let msg = _greet("Dolly");
console.log(msg);

// 
let cal = {
    add : function(a,b){
        return a + b;
    }
};
console.log(cal.add(6,6));
// 
let calculator = {
    square : function(n){
        return n * n;
    }
};
console.log(calculator.square(5));

// 
function makeMul(x){
    return function(y){
        return x * y;
    }
}
let mulBy = makeMul(3);
console.log(mulBy(5));

// 
let findnumbers = [2,4,6,36,5,10,15,20];
findnumbers.forEach(function(num){
    if (num % 2 == 0){
        console.log(num+ " is even")

    }
});


// this keyword --> this keyword refer an current object
console.log(this);

function hello(){
    console.log(this);
}
hello();
// 
var object = {
    name : "Madhav",
    hello(){
        console.log(this);
    }
}
object.hello();

// 
let _person = {
    name : "New page",
    hai(){
        return `Welcome to,${this.name}`;
    }

}
console.log(_person.hai());
// 
let _obj = {
    name : "john",
    age : 34,
    greet : function(){
        console.log(`Hello my name is ${this.name}, and i am ${this.age} years old.`)
    }
}
_obj.greet();
// call(),bind(),apply()
// call()--> calls a function immediately and passes arguments individually.
function functionName(a,b){
    console.log(this);
    console.log(a,b);
}
functionName.call(object,5,6);

// 
let _object = {
    firstname :"Atmakuru",
    lastname : "Anitha",
    fullname : function(){
        return this.firstname +" " + this.lastname;
    }

}
console.log(_object.fullname.call(_object));

function ageVerify(){
    if (this.age > 18){
        console.log("Yes, you can vote");
    }else {
        console.log("No, you cannot vote");
    }
}
let per = {age:19};
ageVerify.call(per);

 // apply()--> calls a function immediately and passes arguments as an array.
let _pre = {
    name : "Bob",
}
function sayName(){
    console.log(this.name);
}
sayName.apply(_pre);

// 
let personinfo = {
    name : "Chikki",
    showinfo : function(age,place){
        return `My name is ${this.name}, I am ${age} years old, and I live in ${place}.`
    }
}
console.log(personinfo.showinfo.apply(personinfo,[24,"USA"]));
// 
const $obj ={
    firstname : "First_name",
    lastname  : "Last_name"
};
const $obj2 = {
    firstname : "Sachin",
    lastname : "Tendulkar"
};
function printName(Profession, country){
    console.log(this.firstname + " " +this.lastname + " is a " +" "+ Profession + " in "+ " " + country);
}
printName.apply($obj2,["Cricketer","India"]);

// bind()---> it returns a new function and it does not call the function immediately.
let $person = {
    name : "Petter"
};
function greet(message){
    return `${message},${this.name}`;
}
let greeting = greet.bind($person);
console.log(greeting("Hello"));

// 

function multiply(a,b){
    return a * b;
}
var _value = multiply.bind(null,2);
console.log(_value(7));
console.log(_value(45));

// 
let player = {
    name : "Rohit",
    score : 50,
    showcase : function(){
        console.log(this.name + " scored " + this.score);
    }
};
let displayscore = player.showcase.bind(player);
setTimeout(displayscore,5000);

