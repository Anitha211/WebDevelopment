// concat
let a1 = ["A","B"];
let a2 = ["C","D"];
let a3 = ["E","F"];

console.log(a1.concat(a2));
console.log(a2.concat(a3));
console.log(a1.concat(a2,a3));

//

let marks = [45,12,13,65,30,85];

for(let i = 0; i < marks.length; i++){

    if(marks[i]<35){
        // marks[i] = "Fail";
        marks.splice(i, 1, "Fail");
    }
}
console.log(marks);

// replacing negative values as 0

let A = [5,-1,34,-20,65,-68];

for(let i = 0; i < A.length; i++){

    if(A[i] < 0){

        A.splice(i, 1, 0);
    }
}
console.log(A);


// 


let numbers = [-1,22,-5,8,-9,45,-5];

for(let i = numbers.length-1; i >= 0; i--){

    if(numbers[i] < 0){

        numbers.splice(i, 1);
    }
}
console.log(numbers);

//

let num = [1,2,3,4,5,6,7,8,9];

let even = [];

for(let n of num){

    if(n%2 == 0){

        even.push (n);
    }
}
console.log(even);

// 

let arr = [0,1,0,2,"0","abc"]

for(let i = 0; i < arr.length; i++){

    if(arr[i] ==  0){

       arr.splice(i, 1);
    }
}
console.log(arr);

// 

function mul(...num){
    let result = 1;

    for(let n of num){
        result *= n;
    }
    return result;
}
console.log(mul(33,3));

// 

let aaa = [1,2,3,4,5];

for(i in aaa){
    aaa[i] = aaa[i] * 2
}
console.log(aaa);


for(i of aaa){
    console.log(i);
    
}


// sort() ---> it is used to arrange the elements in an order(numerical & alphabetical)

let names = ["Anu","Chinnu", "Sai", "Sandya","Bunny","Dolly"];
console.log(names);

names.sort();
console.log(names);

let int = [1,2,3,1,10,12,13,4];

console.log(int);

int.sort();
console.log(int);

// ascending Order
int.sort(function(a,b){
    return a - b;
});
console.log(int);

// descending Order
int.sort(function(a,b){
    return b - a;
});
console.log(int);



// join ---> it is used to return an array as a string with specified separator

let fruits = ["apple", "banana", "mango"];

console.log(fruits);

let s = fruits.join("");
console.log(s);
// 
let a = [10,20,30,40]
let aa = a.join("|")
console.log(aa);
// 
let letters = ["H","E","L","L","O"];

console.log(letters);

let word = letters.join("") + "!";
console.log(word);
// 
let s1 = ["How", "are","you","?"];
let s2 = s1.join(" ");
console.log(s2);
// 
let date = [2,12,2025];
let d = date.join("-");
console.log(d);


// testing the array => some(),every()

// some --> if one element in the array satisfies the condition 
        //   if any value matches returns True 
        //   if No value matches returns False

let n = [1,2,3,4,5]

let m = n.some(function(num){
    return num > 3;
});
console.log(m);
//
let m1 = n.some(i => i>5);
console.log(m1);

// every --> if All element in the array satisfies the condition 
      //    if All value matches returns True
      //    if any one do not matches returns False

let mm = n.every(function(num){
    return num <= 5;
});
console.log(mm);
// 
let M = n.some(i => i > 5);
console.log(M);


// 
let values = [2,4,6,8,10];

console.log(values);

console.log(values.some(n => n % 2 == 1));

console.log(values.every(n => n % 2 == 0));


// some & every
let mark = [45,40,63,70,69,35,30];

let failed = mark.some(function(m){
    return m < 35;
});
console.log(failed);


console.log(mark.every(t => t >= 30));

console.log(mark.every(t => t > 30));

// map() --> it is used to create a new array
            //  it changes every element in array 

let digits = [1,2,3,4,5,6];

let result = digits.map(function(n){

    return n * 2;
})
console.log(result);


let doubled = digits.map(n => n * 4);
console.log(doubled);


// 

let veg = ["onion", "carrot", "potato", "tomato"];

let upper = veg.map(function(veg){
    return veg.toUpperCase();
});
console.log(upper);


// 

let v = [2,3,4,5,6,7];

let res = v.map(function(val,index){

    return {key : index, value : val * val};
});
console.log(res);

console.log(v.length);


// filter() --> it creates a new array (select values)
            // it keeps only some elements in array   

let nums = [10,15,20,25,30];

let evens = nums.filter(function(numbers){
    return numbers % 2 == 0;
});
console.log(evens);

// 
let scores = [22,4,5,60,36];

let pass = scores.filter(m => m >= 40);

console.log(pass);

// 
let value = [10,20,40,54];

let greater = value.filter(n => n > 20);
console.log(greater);

// reduce() --> it reduces the array into a single value    

let number = [5,10,10];

let sum = number.reduce(function(total,n){
    return total + n;
});
console.log(sum);

let multiple = number.reduce(function(total,n){
    return total * n;
});
console.log(multiple);

// 

let v1 = [50,100];

let g = v1.reduce((total, n) => total + n);

console.log(g);


// Removing duplicates

let val = [1,2,2,2,3,1,1,11,2,11,5,6];

let unique = [...new Set(val)];

console.log(unique);

// 

let n1 = [];

for(i of val){
    if(n1.indexOf(i) == -1){
        n1.push(i);
    }
}
console.log(n1);



// without using sort method (ascending order)

let num1 = [2,3,1,4,5,6,7,4,9];

for(let i = 0; i < num1.length; i++){

    for(let j = 0; j < num1.length-1; j++){

        if(num1[j] > num1[j+1]){

            let result = num1[j];
            num1[j] = num1[j+1];
            num1[j+1] = result;
        }
    }
}
console.log(num1);


// decending order

let num2 = [2,3,1,4,5,6,7,4,9];

for(let i = 0; i < num2.length; i++){

    for(let j = 0; j < num2.length - 1; j++){

        if(num2[j] < num2[j+1]){

            let result = num2[j];
            num2[j] = num2[j+1];
            num2[j+1] = result;
        }
    }
}
console.log(num2);


// 

let arr1 = ["Banana","Mango","Apple","Grapes"];

let sort = [];

for(let item of arr1){

    let placed = false;

    for(let i = 0; i < sort.length; i++){

        if(item < sort[i]) {

            sort.splice(i,0,item);

            placed = true;

            break;

        }
    }

    if(!placed) {
        sort.push(item);
    }
}
console.log(sort);

// 

for(let i = 0; i < arr1.length; i++){

    for(let j = 0; j < arr1.length-1; j++){

        if(arr1[j] < arr1[j+1]){

            let result = arr1[j];
            arr1[j] = arr1[j+1];
            arr1[j+1] = result;
        }
    }
}
console.log(arr1);

// 
//reverse()---> it is used to reverse the order of elements in array.

let rev = [1,2,3,4,5,6];

console.log(rev);

rev.reverse();

console.log(rev);


// 


// flatting of an array--> it converts multi-level arrays into a one-level array

let farr = [[1,[2,[3,4,5],[6],[7,8,9],[10,11]]]];

console.log(farr);

console.log(farr.flat(1));

console.log(farr.flat(2));

console.log(farr.flat(Infinity));

// 

let flatarray = [1, ,2, ,3];

console.log(flatarray);


console.log(flatarray.flat());

// 

let fa = [[50,60],[70,80],[90]];

console.log(fa.flat());

// 
// for each

let numarr = [10, 20, 30];

numarr.forEach(function(n,index){
    console.log(n,index);
    
});

// 
let numbers1 = [5, 10, 15, 41,89];

let sum1 = 0;

numbers1.forEach(function(n){
    
    sum1 += n;
});
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
    console.log(word,"length:",word.length);
    
});

// 
let transactions = [-500, 8976, 5000, -10000, -302, 2500];

transactions.forEach((amount)=>{
    if(amount < 0) {
        console.log("Debited:", amount);
    } else {
        console.log("Credited:", amount);
        
    }
});

// 















