let aa = 10;
console.log(typeof aa);

let bb = "Java";
console.log(typeof bb);

let cc = true;
console.log(typeof cc);

let dd = [1,2,3,44,5];
console.log(typeof dd);

let ee = {name: "Chikki"};
console.log(typeof ee);

let ff;
console.log(typeof ff);

let gg = null;
console.log(typeof gg);


//
let str = "Data Types";
let arr = [10.22,44566,7890,45];

console.log(str.length);
console.log(arr.length);
// 
let student = {
    name : "viha",
    age : 14,
    class : "6th Class",
    marks : "80 Marks"
};
console.log(student["name"]);
console.log(student["age"]);
console.log(student["class"]);
console.log(student["marks"]);
// 
let num = 7;
let result = (num%2 == 0) ? "even" : "odd";

console.log(result);

// 

let obj = {a : 10 , b : 20 , c : 30};
let keys = [];
let values = [];
for(let key in obj){
    keys.push(key);
    values.push(obj[key]);
}

console.log(keys);
console.log(values);

// 
function a(){
    return "Hello!";
}
console.log(a());

let n = () => "Arrow Function";
console.log(n());

// 
let add = (c,b) => c + b;
console.log(add(5,5));

// 
function sum(a){

    return function(b){

        return function(c){

            return a+b+c;
        };
    };
}
console.log(sum(5)(5)(5));

// 
let mul = a => b => c => a*b*c;
console.log(mul(4)(5)(6));

// 
function power(a){

    return function(b){

        return a ** b;
    };
}
console.log(power(2)(3));

// 
function curryPower(val){

    return function (a){

        return function (b){

            return val(a,b);
        };
    };
}
    function pow(a,b){

    return a ** b;
}
let powers = curryPower(pow);
console.log(powers(3)(4));


// 
function word(str){

    return function(str2){

        return str + str2.toUpperCase();
    }
}
let m = word('');
console.log(m("uppercase"));
console.log(m("function currying"));

// 
function words(str1){

    return function(string){

        return str1 + string.toLowerCase();
    }
}
let f = words("");
console.log(f("ABCDEFGH"));


// 
function mulNum(x){

    return function(y){

        return x * y;
    }
}
let doubled = mulNum(68);
console.log(doubled(11));

// 

function sub(a,b){
    return a - b;
}
function higherOrderFunction(val,a,b){
    return val(a,b);
}
console.log(higherOrderFunction(sub,100,100));

// 
var day =3; 
 switch (day) {

    case 1 :                                            
    console.log("Monday");
    break;

    case 2:
     console.log("Tuesday");
     break;

    case 3:
    console.log("wednesday");
    break;

    case 4:
     console.log("Thursday");
     break;

    case 5:
     console.log("friday");
    break;

    case 6:
     console.log("saturday");
    break;

    case 7:
     console.log("sunday");
     break;
}

// 
function  cal(a,b,operator){
    let result;

    switch (operator) {

        case "+":
        result = a+b;
        break;

        case "-":
        result = a - b;
        break;

        case "*":
        result = a * b;
        break;

        default:
            result = "invalid operator";
    }
    return result;
}
console.log(cal(10,5,"*"));
console.log(cal(10,5,"-"));
console.log(cal(10,5,"+"));
console.log(cal(10,5,"%"));

// 
function getTime(){
    return new Date().toLocaleTimeString();
}
console.log(getTime());

// 
function getDate(){
    return new Date().toDateString();
}
console.log(getDate());

// 
let _person = {
    name : "New page",
    hai(){
        return `Welcome to,${this.name}`;
    }

}
console.log(_person.hai());

// 

