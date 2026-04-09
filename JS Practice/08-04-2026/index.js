// Destructuring --> it is used to extract values from arrays and objects and store them in variables in a clean and readable way
// cleaner code, less repetition, easier to read.

// Array destructuring 

let array = [1, 2, 3, 4, 5]

let [A, B, C, D, E] = array;

console.log(array);

console.log(A);

console.log(B);

console.log(C);

console.log(D);

console.log(E);

// 

let arr = [10, 20, 30]

let [a, , c] = arr;

console.log(a);
console.log(c);

console.log(arr);

// 

let d = [11]
let [d1, d2 = 22] = d

console.log(d1);
console.log(d2);

console.log(d);

//

let data = ["A", ["B", "C", "D"]];

let [, [p, , q]] = data;

console.log(p);

console.log(q);

console.log(p, q);

console.log(data);

// 

let Array = [10, [20, [30, 40]]];

let [n1, [n2, [n3, n4]]] = Array;

console.log(n1);

console.log(n2);

console.log(n3);

console.log(n1, n2, n3, n4);

console.log(n1, n2, n3);

console.log(n1, n3);

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

//

// Object destructuring 

let user = {
    name: "Bob",
    age: 22
}

console.log(user);

let { name, age } = user;

console.log(name);
console.log(age);

// 

let emp = {
    Name: "Anitha",
    salary: 15000,
    id: 103,
    city: "Hyderabad"
};

let { salary, id, city } = emp;

// console.log( Name);

console.log(salary);

console.log(id);

console.log(city);

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

let Person = {
    Name: "Gayatri",
    address: {
        place: "Kadapa",
        pin: 516227
    }
};

let { Name, address: { place, pin } } = Person;

console.log(Person);

console.log(Name);

console.log(place, pin);

console.log(Name, place, pin);

// 

// Iterators and Generators :

// ITERATOR - it used to access values one by one by using next() method

let ARR = [11, 22, 33, 44];

console.log(ARR);

let i = ARR[Symbol.iterator]();

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




















