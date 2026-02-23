// objects --> it is a collection of keys - Value pairs
        // it stores the in key and values 


// object Literal way 
let student = {
    name : "Kumudini",
    age : 24,
    course : "Java",
};
console.log(student);

console.log(student["course"]);

// adding new value

student.Id = 3421;
console.log(student);

// deleteing the value

delete student.age;
delete student.course;

console.log(student);

// example  

let employee = {
    name : "Varma",
    age : 23,
    Id : 202,
    salary : 20000
};

console.log(employee);

console.log(employee.name);

console.log(employee.Id);

employee.Location = "Hyderabad";

console.log(employee);

employee.salary = 35000;
console.log(employee);

// 
for(let key in employee) {
    console.log(key + ":",employee[key]);
    
}
// 
for(let value of Object.values(employee)){
    console.log(value);
    
}

// 

// new Keyword ---> new creates a new object.
                //   it allows to make multiple objects using the same structure.

let obj = new Object();
console.log(obj);

// 
let obj1 = new Object();

obj1.name = "Balu",
obj1.city = "Kadapa";

console.log(obj1);

// constructor way --->  A constructor is a function that builds new objects.
                        // this keyword used to create an object.


function Student(name, age, course, id) {
        this.name = name;
        this.age = age;
        this.course = course;
        this.id = id;
    }

let s1 = new Student("Anitha", 23, "java", 101);
console.log(s1);

let s2 = new Student("Vidya", 23, "java", 202);
console.log(s2);


//

function order(item, quantity, price){
    this.item = item;
    this.quantity = quantity;
    this.price = price;

    this.total = function(){
        return this.quantity * this.price;
    };
}

let Order1 = new order("Biriyani", 3, 250);
console.log("Total Amount:", Order1.total());

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

// console.log(emp);



// class --> 

class Emp {
    constructor(a,b,c) {

        this.a = a;
        this.b = b;
        this.c = c;
        
    }
}

let E = new Emp ("Bob", 3, 250);
console.log(E);

// 

class person {
    constructor(name, age, MobileNo) {

        this.name = name;
        this.age = age;
        this.MobileNo = MobileNo;
    }
}
let p = new person("Sai", 29, 1234567891);
console.log(p);

for(let key in p){
    console.log(key+ ":" ,p[key]);
}

// 

function Employee(name, id, salary){
    this.name = name;
    this.id = id;
    this.salary = salary;
}
let e1 = [
    new Employee("Meena", 101, 25000),
    new Employee("veena", 202, 17000),
    new Employee("Reena", 303, 20000),
    new Employee("vani", 404, 45000)
];
for (let i of e1) {
    if(i.salary > 20000){
        console.log(i.name, "has high salary:", i.salary);  
    }
}

// 

class Students {
    constructor(name, marks, grade) {
        this.name = name;
        this.marks = marks;
        this.grade = grade;
    }
}

let students =  [
    new Students("Meena", 86, "A" ),
    new Students("veena", 90, "A" ),
    new Students("Reena", 68, "C" ),
    new Students("vani", 75, "B" )
];

for(stu of students){
    if(stu.grade == "A"){
        console.log(stu.name, "got grade A with marks:", stu.marks);
        
    }
}


// copying of object 

// Normal copy

let obj11 = {a:1, b:2, c:3};

let obj2 = obj11

console.log(obj2);

console.log(obj11);

obj2.d = 4;

console.log(obj2);

console.log(obj11);


// shallow copy ---> with the help o spread operator

let per = {
    name : "Lakshmi",
    age : 23
}

console.log("orginal:",per);

let p1 = {...per};

p1.age = 27;

console.log("copy:",p1);


//
//  deep copy --> 

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


//Copying of arrays

arr = [123,453,432,890];

console.log("arr", arr);
// normal copy
let copy = arr;

arr[1] = 400;

arr[0] = 100

console.log("copy", copy);

console.log("arr", arr);

// shallow copy

let copy1 = [...arr];

copy1[3] = 8000;

console.log("orginal",arr);

console.log("copy",copy1);

// 

let array = [1,2,3,4,[5,6,7]];

console.log(array);

console.log(array[4][0]);

let copy3 = array;

copy3[4][0] = 55555;

console.log("copy", copy3);


// deep copy

let copyArr = JSON.parse(JSON.stringify(array));

console.log(copyArr);

copyArr[4][0] = "Hello";

console.log(copyArr);

console.log(array);


//object.keys --> it returns arrays of all keys in an object

let Emp1 = {
    name : "Balu",
    age : 25,
    role : "HR"
};

console.log(Emp1);


let keys = Object.keys(Emp1);

console.log(keys);

// object.values --> it returns all values of an objects

let values = Object.values(Emp1);

console.log(values);

// object.entries --> it returns array of key-values pairs.

let entries = Object.entries(Emp1);

console.log(entries);


// 

let S1 = {
    name : "Kiran",
    age : 16,
    marks : 95,
    grade : "A"
};

// print keys
console.log("keys:");

for(let key in S1 ){
    console.log(key);
};

// print values

console.log("values:");

for(let key in S1 ){
    console.log(S1[key]);
};

//print entries

console.log("Entries:");

for(let key in S1 ){
    console.log(key, ":", S1[key]);
};



// date 

let date = new Date();

console.log(date);

console.log(date.getFullYear());

console.log(date.getDate());

console.log(date.getHours());

console.log(date.getMinutes());

console.log(date.getSeconds());

console.log(date.toDateString());

// 

let employee1 = {
    name : "Anitha",
    joined : new Date("2025-11-03")
};
console.log(employee1.joined.toDateString());

// 
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday",
    "Friday","Saturday"];

let d = new Date();

console.log("Today:", days[d.getDay()]);


// Template String --> used to create strings by using (`; ${})

let a = 5;
let b = 7;

console.log(`The Multiplication of ${a} and ${b} is ${a * b}`);


// math object --> is used to perform mathematical calculations

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


// math.randon

let num = Math.floor(Math.random() * 10);

console.log("random number between 1 to 10:",num);

// 

let otp = Math.floor(100000 + Math.random() * 900000);

console.log("OTP:", otp);

// string object 

let str = "Hello!";

console.log(str.length);

console.log(str.toUpperCase());

console.log(str.toLowerCase());

console.log(str.charAt(0));
console.log(str.charAt(1));
console.log(str.charAt(2));
console.log(str.charAt(5));

let s = "JavaScript";

console.log(s.includes("Scr"));
console.log(s.includes("Java Script"));





