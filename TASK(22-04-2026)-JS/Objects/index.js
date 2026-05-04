// OBJECT -> it is a collection of keys-value pairs

let person = {
    name: "John",
    isStudent: true,
    age: 19
}

console.log(person);
console.log(person["name"]);
console.log(person["isStudent"]);
console.log(person.age);


//creating object

let car = {
    brand:"Toyoto",
    price: 500000,
    year: 2020
}

console.log(car.brand);

for (let key in car) {
    console.log(
        key + ":" + car[key]
    );
    
}

// 
let obj = new Object();
obj.name = "Constructor way"
console.log(obj);
console.log(obj.name);

// 
class studentData {
    constructor(name, age, course, id) {
        this.name = name;
        this.age = age;
        this.course = course;
        this.id = id;
    }
}

let s1 = new studentData("Anitha", 23, "java", 101);
console.log(s1);

let s2 = new studentData("Vidya", 23, "java", 202);
console.log(s2);

// Dynamic obj

let user = {};
console.log(user);

user.name = "Rama";
user.age = 25;

console.log(user);
delete user.age;
console.log(user);

// 
function Employee(name, id, salary){
    this.name = name;
    this.id = id;
    this.salary = salary;
}
let emp = [
    new Employee("Meena", 101, 25000),
    new Employee("veena", 101, 17000),
    new Employee("Reena", 101, 20000)
];
for (let i of emp) {
    if(i.salary >= 20000){
        console.log(i.name, "has high salary:", i.salary);  
    }
}

//examples

// swap keys and values

let object = {
    a: 1,
    b: 2
};
console.log(object);

let result = {};

for(let key in object) {
    result[object[key]] = key;
}
console.log(result);

// 
// copying of object 

// Normal copy

let obj11 = {a:1, b:2, c:3};

let obj2 = obj11

console.log(obj11);

console.log(obj11);

obj2.d = 4;
console.log(obj2);

obj2.e = 5;
console.log(obj2);

// shallow copy ---> with the help o spread operator

let per = {
    name : "Lakshmi",
    age : 23
}

console.log("orginal:",per);

let p1 = {...per};

p1.age = 27;

console.log("copy:",p1);

// deep copy -> 
let student1 = {
    name : "Anu",
    age : 24,
    id : 203,
    course : "Java Script"
};

let deepcopy = JSON.parse(JSON.stringify(student1));

deepcopy.Institute = "NYB";

console.log(student1);
console.log(deepcopy);

//Nested object

let employee = {
    name :"john",
    address:{
        city: "Kadapa",
        pincode: 400001
    }
};

console.log(employee);

console.log(employee.address.city);

// obj with array

let Stu = {
    name :"Anitha",
    marks: [80, 90, 76]
};

console.log(Stu);

console.log(Stu.marks[1]);


// Math object

console.log(Math.PI);

console.log(Math.round(4.6));
console.log(Math.round(4.3));

console.log(Math.floor(4.9));
console.log(Math.floor(4.1));

console.log(Math.ceil(4.1));
console.log(Math.ceil(4.9));

console.log(Math.sqrt(36));

console.log(Math.pow(5, 2));

console.log(Math.floor(4.9));

console.log(Math.max(10, 5, 45, 8));
console.log(Math.min(10, 5, 45, 8));

// 
console.log(Math.random());


// Random number 1 to 10

let num =Math.floor(Math.random() * 10) + 1;

console.log(num);

let otp = Math.floor(100000 + Math.random() * 900000);

console.log("OTP:", otp);

// 
let arr = [10, 25, 5, 38]

console.log(Math.max(...arr));

// Date Object

let date = new Date();

console.log(date);

console.log(date.getFullYear());

console.log(date.getDate());

console.log(date.getHours());

console.log(date.getMinutes());

console.log(date.getSeconds());

console.log(date.toDateString());

console.log(date.getDay());

// 
let d = new Date();
let day = d.getDay();

if(day === 0 || day === 6){
    console.log("Weekend");
    
} else {
    console.log("Weekday");
    
}

//

let employee1 = {
    name : "Anitha",
    joined : new Date("2025-11-03")
};
console.log(employee1.joined.toDateString());


// 

// string object 

let a = 5;
let b = 10;
console.log(`Sum is ${a + b}`);

// 

let str = "Hello!";

console.log(str.length);

console.log(str.toUpperCase());

console.log(str.toLowerCase());

console.log(str.charAt(0));
console.log(str.charAt(1));
console.log(str.charAt(2));
console.log(str.charAt(5));

// 

let s = "JavaScript";

console.log(s.includes("Scr"));
console.log(s.includes("Java Script"));

// 
//sum of object values

let marks = {
    math: 50,
    English: 60,
    Science: 40
};

let sum = 0;
for (let key in marks) {
    sum += marks[key];
}

console.log("Total Marks: ", sum);

// 

// object.keys --> it returns arrays of all keys in an object
// object.values --> it returns all values of an objects
// object.entries --> it returns array of key-values pairs.

let k = {
    name: "Babu",
    age: 14,
    class: 7,
    marks: 85
};

console.log(Object.keys(k));

console.log(Object.values(k));

console.log(Object.entries(k));

Object.keys(k).forEach(key => {
    console.log(key + ":" + k[key]);
});

for(let value of Object.values(k)){
    console.log(value);
};

//////
// 
let students = { Alice: 85, Bob: 92, Carol: 78 };

for(let key in students){
    console.log(key + ":" + students[key]);
    
}

for(let value of Object.values(students)){
    console.log(value);
    
}

// 

let peoples = [
    {name: "John", age: 25}, 
    {name: "Jane", age: 30}, 
    {name: "Bob", age: 20}
];

let ages = peoples.map(person => person.age);

let totalage = ages.reduce((sum, age) => 
    sum + age, 0
);

let avg = totalage/ ages.length;

console.log("Average Age:", avg);


// 
























