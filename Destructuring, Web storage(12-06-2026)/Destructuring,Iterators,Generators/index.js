// Destructuring --> it is used to extract values from arrays and objects and store them in variables in a clean and readable way
// cleaner code, less repetition, easier to read.

// Array destructuring 

let array = [1, 2, 3, 4, 5]

let [A, B, C, D, E] = array;

console.log(array);
console.log(A);
console.log(B);
console.log(C)
console.log(D);
console.log(E);

// 

let fruits = ["Apple", "Mango", "Banana"]

let [first, second, third] = fruits;

console.log(fruits);
console.log(first);
console.log(second);
console.log(third);
console.log(first,third);

//Skip values

let arr = [10, 20, 30, 40, 50];

let [a, ,c, ,e] = arr;

console.log(arr);

console.log(a);
console.log(e);
console.log(c);

// swaping variables

let x = 1;
let y = 2;

[x, y] = [y, x]

console.log(x);
console.log(y);

// 

let data = ["A", ["B", "C", "D"]];

let [, [p, , q]] = data;

console.log(p);

console.log(q);

console.log(p, q);

console.log(data);

// 

let  numbers = [22, [11, 33], 55];

let [a1, [b1,c1], d1] = numbers;

console.log(numbers);

console.log(a1, b1, c1, d1);

// rest operator

let num = [1, 2, 3, 4, 5, 6];

let [u, ...remain] = num;

console.log(num);
console.log(u);
console.log(remain);

// Object Destructuring 

let user = {
    name: "Bob",
    age: 22
}

console.log(user);

let { name, age } = user;

console.log(name);
console.log(age);

// 

let obj = {
    id : 101,
    Name: "Laptop",
    price:50000
};

let {item, price} = obj;

console.log(obj);
console.log(item);
console.log(price);

// nested

let employee = {
    _name: "Riya",
    address: {
        city :"Hyderabad",
        state: "Telangana"
    }
};

let {_name, address: {city, state}} = employee;

console.log(employee);

console.log(_name);
console.log(city);
console.log(state);

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


// Iterators and Generators - 

// ITERATOR - it used to access values one by one by using next() method

let Fruits = ["Apple", "Kiwi", "Orange"];

let iterator = Fruits[Symbol.iterator]();

console.log(Fruits);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// 

let str = "JS";

let Iterator = str[Symbol.iterator]();

console.log(str);

console.log(Iterator.next());
console.log(Iterator.next());
console.log(Iterator.next());

// 

let Arr1 = [111, 123, 124];

for (let a of Arr1) {
    console.log(a);
}

// Generators - a function that pauses execution and returns multiple values over time using yield.

function* number() {
    yield 1;
    yield 2;
    yield 3;
}

let generator = number();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

for(let count of number()) {
    console.log(count);
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

function* subject() {

    yield "HTML";
    yield "CSS";
    yield "JavaScript"
}

let g = subject();

console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());

// 

function* employeeID() {
    let ID = 101;

    while(true) {
        yield ID++
    }
}

let emp = employeeID();

console.log(emp.next().value);
console.log(emp.next());
console.log(emp.next());
console.log(emp.next().value);

// 

function* count(num){
    for(let i =1; i <= num; i++){
        yield i;
    }
}

for(let n of count(5)){
    console.log(n);
};


// ES6 Data Structurings - used to store and manage the data, by using set, map, weakSet, weakMap

// set() - is a collection of unique values without duplicate values.

let n = new Set();

n.add(10);
n.add(20);
n.add(10);
n.add(30)

console.log(n);

// checking values are exist or not

let F = new Set(["Apple", "Orange", "Mango"]);

console.log(F.has("Mango"));
console.log(F.has("Banana"));

// remove duplicate values

let nums = [1, 2, 2, 3, 5, 4, 6, 6, 6, 1, 1, 7, 3, 10, 10, 20];

console.log(nums);

let unique = [...new Set(nums)];

console.log(unique);

//  Map() - it stores data as key-value pairs

let Student = new Map();

Student.set("name", "Anitha");
Student.set("age", 21);

console.log(Student);
console.log(Student.get("name"));
console.log(Student.get("age"));

// 

let product = new Map([
    ["Watch", 3599],
    ["Mobile", 20000]
]);

for (let [key, value] of product) {
    console.log(key, value);
};

// WeakSet() - it only stores objects

let user1 = {
    name: "Balu"
};

let weak = new WeakSet();

weak.add(user1);

console.log(weak.has(user1));

// WeakMap() - stores key values pairs where key must be object

let user2 = {
    id: 1
};

let m = new WeakMap();

m.set(user2, "Admin");

console.log(m.get(user2));

// 





























