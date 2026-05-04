// Array Methods - 

// Map() -> to create a new array

let num = [1,2,3,4,5];

let doubled = num.map((n) => n*2);

console.log(doubled);

// 

let n = [10,20,30];

let add = n.map((n) => n + 5);

console.log(add);

// filter(): it returns the elements that matchs a condition.

let arr = [1,2,3,4,5,6];

let even = arr.filter((n) => n%2 == 0);

console.log(even);

// 

let scores = [22,4,5,60,36];

let pass = scores.filter(m => m >= 40);

console.log(pass);


// testing the array => some(),every()

// some --> if one element in the array satisfies the condition 
        //   if any value matches returns True 
        //   if No value matches returns False

let nums = [1,2,3,5];

let hasEven = nums.some((n) => n % 2 == 0);

console.log(hasEven);

// 

let n1 = [1,2,3,4,5]

let m = n1.some((num) => num > 3);
console.log(m);

// 

let users = [
      {name:"Riya", role:"user"},
      {name:"Viha", role:"admin"},
      {name:"Reena", role:"user"},
];

let a = users.some(user => user.role === "admin");

console.log(a);



// every --> if All element in the array satisfies the condition 
      //    if All value matches returns True
      //    if any one do not matches returns False


let every = [2,4,6];

let isEven = every.every((n) => n % 2 == 0);

console.log("Every: ",isEven);

// 

let mm = every.every((num) => num <= 5);
console.log(mm);

// 

let values = [2,4,6,8,10];

console.log(values);

console.log(values.some(n => n % 2 == 1));

console.log(values.every(n => n % 2 == 0));

// 

let Students = [
      {name:"A", marks: 60},
      {name:"B", marks: 75},
      {name:"A", marks: 80},
];

let allPassed = Students.every(student => student.marks >= 50);

console.log(allPassed);

// Reduce() - it reduces the array into a single value 


let number = [5,10,10];

let sum = number.reduce((total,n) => total + n);

console.log(sum);

// 

let cart = [
      {name:"Phones", price: 12000},
      {name:"Headphones", price: 2000},
      {name:"Watch", price: 3599},
];

console.log(cart);


let totalPrice = cart.reduce((total, item) => total + item.price, 0);

console.log(totalPrice);

// 

let Num = [10, 45, 22, 89, 5];

console.log(Num);

let findMax = Num.reduce((maxVal, a) => a > maxVal ? a : maxVal, Num[0]);

console.log("Max",findMax);

let findMin = Num.reduce((minVal, a) => a < minVal ? a : minVal, Num[0])

console.log("Min",findMin);


// find() : returns first matching values

let User = [
      {id:1, name: "Jhon"},
      {id:2, name: "Jane"}
];

let findUser = User.find((u) => u.id == 2);

console.log(findUser);

let findName = User.find(u => u.name == "Jhon");

console.log(findName);

// 

let array = [1,3,7,8];

let Even = array.find(n => n % 2 == 0);

console.log(Even);


// Sort() :  it is used to arrange the elements in an order(numerical & alphabetical)

let s = [4,5,7,2,8,10];

console.log(s);


s.sort((a,b) => a - b);

console.log("Sort: ",s);

// 

let int = [1,2,3,1,10,12,13,4];

console.log(int);

int.sort();
console.log(int);

// 

let names = ["Anu","Chinnu", "Sai", "Sandya","Bunny","Dolly"];
console.log(names);

names.sort();
console.log(names);

// 

// Falt() : it converts multi-level arrays into a one-level array

let Arrays = [[1,[2,[3,4,5],[6],[7,8,9],[10,11]]]];

console.log(Arrays);

console.log(Arrays.flat(1));

console.log(Arrays.flat(2));

console.log(Arrays.flat(Infinity));

// 

let flatarray = [1, ,2, ,3];

console.log(flatarray);
console.log(flatarray.flat());

// 

// ForEach() -> is used to loop through an array 

let N = [1,2,3];

N.forEach((num) => {
      console.log(num);    
});

// 

let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);


fruits.forEach((fruit, i) => {
      console.log(i, fruit);
})

// 

let numbers1 = [5, 10, 15, 41,89];

console.log(numbers1);


let sum1 = 0;

numbers1.forEach((n) =>
    sum1 += n );

console.log("total:",sum1);

// 

let nums1 = [1,2,3,4,5,6];

nums1.forEach(n => {
    if (n% 2 !== 0) {
        console.log(n,"is odd");
        
    }else {
        console.log(n, "is even");
        
    }
});

// 

let words = ["pen","notebook","bag","lunch box"];

words.forEach((word) => {
    console.log(word,"length is : ",word.length);
    
});

// 

// exapmles

let odd = [1,2,3,4,5,7,10,11];

let findOdd = odd.filter((n) => n % 2 !== 0);

console.log(findOdd);

//

let price = [100, 200];

let finalPrice = price.map(prices => prices + prices *0.18);

console.log(finalPrice);

// Finding largest word

let w = ["Apple", "Banana", "Watermelon", "Kiwi"];

console.log(w);


let longest = w.reduce((longestWord, i) => 
      
      i.length > longestWord.length ? i : longestWord, ""
);

console.log(longest);

// 

let smallest = w.reduce((smallestWord, i) => 
      
      i.length < smallestWord.length ? i : smallestWord
);

console.log(smallest);


// 

let p = [1,2,3,4,5,6];

let allPositive = p.every(n => n > 0);

console.log(allPositive);















