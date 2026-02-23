// DATA TYPES OF JS
// Primitive Data Types:
//NUmber: it stores int and floating/decimal CSSFontFeatureValuesRule.
var a = 10;
console.log(a);
console.log(typeof a);
var b = 22.345;
console.log(b);
console.log(typeof b);
//     //Srting: a string can be any text that wrapped in single/double(''/"")
var x = `name`;
console.log(x);
console.log(typeof x);
console.log(a + x);
//      //Boolean: it will have two values either TRUE or FALSE.
var s = 2;
var p = 4;
console.log(s > p);
var d = true;
console.log(d);
console.log(typeof d);

var t = 10;
var q = "javascript";
var r = true
console.log(t);
console.log(q);
console.log(t + q + r)


var variable = 2;
// y = 3;
// z = 3;
console.log(variable);


var f = null;
console.log(f);

var name = "Anu";
console.log("string:", name);

var age = 25;
console.log("Number:", age)

var bigNumber = 54312678908643341241251465241451653452436235673523423452n;
console.log("BigInt:", bigNumber)

var g = true;
console.log("Boolean:", g);

var abc;
console.log("Undefined:", abc);

var v = null;
console.log("null", v);

//string

var firstname = "Anu";
var lastname = "chikki";
var fullname = firstname + " " + lastname;
console.log("fullname:", fullname);
console.log("upper case:", fullname.toUpperCase());
console.log("lower case:", fullname.toLowerCase());
console.log("Character at index 2:", fullname.charAt(2));
console.log("substring (0, 5):", fullname.substring(0, 5));
console.log("Length of Name:", fullname.length);

// Null & Undefined

var phone = null;
var address;
console.log("phone:", phone);
console.log("Address:", address);

// Array

var fruits = ["Mango", "Orange", "Banana", "Apple"];
console.log("fruits", fruits.push("grape"));
console.log("All fruits:", fruits);
console.log("second fruit:", fruits[1]);
console.log("fruits:", fruits.pop());

// Boolean
// here we stored credentials in var
var Username = "NYB";
var password = "2345";
//here we simulate what the user enters
var inputusername = "NYB";
var inputpassword = "245"
// here it checks if the entered username and password matchs and returns value either True or Flase.
var isLoggedIn = inputusername === Username && inputpassword === password;
console.log("Login Successful?", isLoggedIn);

// BigInt
var n1 = 1213324345567898900999999999987777777735555555553334325n
var n2 = 123344777777777777777777777777777777777777777777777222222n
console.log("Sum of BigInt:", n1 + n2);
console.log("Sub of BigInt:", n1 - n2);
console.log("Div of BigInt:", n1 % n2);
console.log("Mul of BigInt:", n1 * n2);


// // Object

var obj = {
    qname: "Peter Harry",
    zage: "24",
    isStudent: true,
};
console.log(obj["isStudent"])
console.log(obj["qname"]);
console.log(obj["zage"]);



/// Non-Primitive Datatypes
//--->object
//--->array 
//---> Map
//--->Set
 
  //OBJECT:
var person = { 
    name: "Chikki", 
    age: 23 
}
console.log("object:", person.name);
console.log(person["age"]);
 
// Array

var days = ["sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday"];
console.log("Array:", days[3]);

// Function

function greet() {
    return "Hello World!"
}
console.log("Function:", greet());


// Date

var today = new Date();
console.log("Date:", today);

// Map ---> The date will be stored in key values pairs and key can be any datatype
var scores = new Map();
scores.set("Jhon",100);
scores.set("Dolly",200);

console.log(scores);
console.log(scores.get("Dolly"));
console.log(scores.get("Jhon"));

//set

var numbers = new Set([1,2,3,4,5]);
console.log(numbers);
console.log(numbers.add(6));
console.log(numbers.size);


























