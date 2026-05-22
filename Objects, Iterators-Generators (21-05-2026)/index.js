// Object -  it is a collection of keys-value pairs

let person = {
    name: "John",
    isStudent: true,
    age: 19
}

console.log(person);
console.log(person["name"]);
console.log(person["isStudent"]);

// Adding a new value 

person.city = "Kadapa";
console.log(person);

person.id = 101;
console.log(person);

// Deleting the value

delete person.age;
console.log(person);

//// new object -> new creates a new object.

let car = new Object();
console.log(car);

car.brand = "Honda";
car.model = "City"
console.log(car);

// Constructor way -> A constructor is a function that builds new objects.
//                   "this" keyword used to create an object.

function Student(name, age, course, id) {
    this.name = name;
    this.age = age;
    this.course = course;
    this.id = id;
}

let s1 = new Student("Anitha", 23, "javascript", 101);
console.log(s1);

let s2 = new Student("Vidya", 23, "javascript", 202);
console.log(s2);

let s3 = new Student("Chikki", 25, "javascript", 303); console.log(s3);

// 

let obj = {
    name: "Anitha",
    age: 23,

};


console.log(obj);
console.log(obj.name);


// class -> is a function inside a class

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    greet() {
        console.log("Hello, my name is " + this.name);
    }
}

let P1 = new Person("Anitha", 19);
P1.greet();

// 

let user = {
    name : "john",

    greet: function() {
        console.log("Welcome " + this.name);
        
    }
};
user.greet();

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

// 

let employee = {
    id: 9,
    name: "john",
    salary: 45000
};

for(let key in employee) {
    console.log(key + " " + employee[key]);
};

// 

let User = {
    name: "Lucky",

    address: {
        city : "Hyderabad",
        pincode: 12345
    }
};

for(let key in User.address) {
    console.log(key + " " + User.address[key]);
    
};

// Copying of object - 

// Normal copy - variables point to the same object in memory

let User1 = {
    name: "Ram",
    age: 21
};

let User2 = User1;

User2.age = 30;

console.log(User1);
console.log(User2);

// 

let obj11 = { a: 1, b: 2, c: 3 };

let obj22 = obj11

console.log(obj11);

console.log(obj11);

// Shallow copy - it creates a new object

let Stu1 = {
    name: "Ravi",
    marks: 97
};

let Stu2 = {...Stu1}

Stu2.marks = 100;

console.log(Stu1);
console.log(Stu2);

// 

let n1 = {
    numbers: [1, 2, 3, 4, 5]
};
console.log(n1);

let n2 = { ...n1 };

n2.numbers.push(6);

console.log(n1.numbers);

// 

let EMP1 = {
    name: "Surya",

    address: {
        city: "Mumbai"
    }
};

let EMP2 = {...EMP1};

EMP2.address.city = "Delhi";

console.log(EMP1);
console.log(EMP2);

// Deep copy - it creates a completely independent copy

let student1 = {
    name: "Anu",
    age: 24,
    id: 203,
    course: "Java Script"
};

let deepcopy = JSON.parse(JSON.stringify(student1));

deepcopy.Institute = "NYB";

console.log(student1);
console.log(deepcopy);

// 

let E1 = {
    name: "John",

    address : {
        city : "Hyderabad"
    }
};

let E2 = JSON.parse(JSON.stringify(E1));

E2.age = 23;
E2.email = "john12d@gmail.com";

console.log(E1);
console.log(E2);

// 

// math object --> is used to perform mathematical calculations

console.log(Math.PI);

console.log(Math.round(5.9));
console.log(Math.round(4.8));

console.log(Math.floor(4.9));
console.log(Math.floor(4.1));

console.log(Math.sqrt(45));
console.log(Math.cbrt(27));


console.log(Math.pow(5, 2));

console.log(Math.floor(4.9));

console.log(Math.max(10, 5, 45, 8));
console.log(Math.min(10, 5, 45, 8));

console.log(Math.random());

let num = Math.floor(Math.random() * 10) + 1;
console.log(num);

// 

let radius = 5;

let area = Math.PI * Math.pow(radius, 2);

console.log(area);

// dice game

let dice = Math.floor(Math.random() * 6) + 1;

console.log(dice);

// Template String --> used to create strings by using (`; ${})

let a = 5;
let b = 7;

console.log(`The Multiplication of ${a} and ${b} is ${a * b}`);

//  Date Object ->  is used to work with dates and time


let now = new Date();
console.log(now);

console.log(now.getFullYear());

console.log(now.getMonth());

console.log(now.getDate());

console.log(now.getDay());

console.log(now.getHours());

let time = now.getHours() + ":" + 
now.getMinutes() + ":" + 
now.getSeconds();

console.log("Time: ",time);

let date = new Date("2002-07-19")
console.log(date);

// 

let birthYear = 2002;

let currentYear = new Date().getFullYear();

let age = currentYear - birthYear;

console.log(age);

// 

let hour = new Date().getHours();

if(hour < 12) {
    console.log("Good Morning");
} else if(hour < 18) {
    console.log("Good Afternoon");
    
} else {
    console.log("Good Evening");
    
};

// 

let _date = new Date();

console.log(_date.toDateString());

// 

let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday",
    "Friday","Saturday"];

let d = new Date();

console.log("Today:", days[d.getDay()]);

// // // // 

// Iterators and Generators :

// ITERATOR - it used to access values one by one by using next() method

let array = [11, 22, 33, 44];

console.log(array);

let i = array[Symbol.iterator]();

console.log(i);

console.log(i.next());

console.log(i.next());
console.log(i.next());

console.log(i.next());

console.log(i.next());

// 


let Arr1 = [1, 2, 3];

for (let a of Arr1) {
    console.log(a);
}

// 

let Fruits = ["Apple", "Mango", "Orange"];

let iterator = Fruits[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// generators --> a function that pauses execution and returns multiple values over time using yield.

function* nums() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

let g = nums();

console.log(g.next());

console.log(g.next());

console.log(g.next());

console.log(g.next());

console.log(g.next());

console.log(g.next());

// 

function* fruits(){
    yield "Orange";
    yield "Kiwi",
    yield "Banana"
}

for (let i of fruits()){
    console.log(i);
}

// 

function* test(){
    console.log("start");
    yield 1;
    console.log("Middle");
    yield 2;
    console.log("End");
}

let t = test();

console.log(t.next());

console.log(t.next());

console.log(t.next());

// 

function* count(num){
    for(let i =1; i <= num; i++){
        yield i;
    }
}

for(let n of count(5)){
    console.log(n);
}

// 

function* numbers(n){
    for(let i = 1; i <= n; i++){
        yield i;
    }
}

let sum = 0;

for(let num of numbers(5)) {
    sum += num;
}
console.log("Sum of 1 to 5 numbers: ",sum);

// 

function * otpGenerator() {

    while(true) {

        let otp = Math.floor(1000 + Math.random() * 9000);

        yield otp;
    }
}

let otp = otpGenerator();

console.log(otp.next().value);

// 

// Destructuring ->

// Array Destructuring - 

let Arrays = [1,2,3,4]

let [aa, bb, cc, dd] = Arrays;

console.log(aa);

console.log(Arrays);

console.log(bb);

console.log(cc);

console.log(dd);

// 

let arrays = ["A", "B" , "C"]

let [p, , q] = arrays;

console.log(p);

console.log(q);

console.log(arrays);

// 

let data = ["A", ["B", "C", "D"]];

let [, [u, , v]] = data;

console.log(u);

console.log(v);

console.log(u, v);

console.log(data);

// 

let Array = [10, [20, [30, 40]]];

let [n11, [n22, [n33, n44]]] = Array;

console.log(n11);

console.log(n22);

console.log(n33);

console.log(n11, n22, n33, n44);

console.log(n11, n22, n33);

console.log(n11, n33);

console.log(Array);

// 

let x = 1;
let y = 2;

[x, y] = [y, x]

console.log(x);
console.log(y);

// 

function add([a, b]) {
    console.log(a + b);

}
add([100, 200]);

// Object Destructuring

let emp = {
    Name: "Anitha",
    salary: 15000,
    id: 103,
    city: "Hyderabad"
};

let { salary, id, city } = emp;

console.log(salary);

console.log(id);

console.log(city);

console.log(emp);

// 

let student = {
    name: "Anu",
    scores: [90, 60]
};

let { scores: [Telugu, Hindi] } = student;

console.log("Telugu score:", Telugu);

console.log("Hindi score:", Hindi);

// 

function getScore({ name, marks: { math } }) {
    console.log(name, "scored", math);

};

getScore({
    name: "Siva",
    marks: { math: 76 }
});

// 

let Person1 = {
    Name: "Gayatri",
    address: {
        place: "Kadapa",
        pin: 516227
    }
};

let { Name, address: { place, pin } } = Person1;

console.log(Person1);

console.log(Name);

console.log(place, pin);

console.log(Name, place, pin);








