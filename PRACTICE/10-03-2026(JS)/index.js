// Vowel Counter

function countVowels(str){
      let count = 0;
      let vowels = "aeiou";

      for(let char of str.toLowerCase()){
        if(vowels.includes(char)){
            count++;
        }
      }
      return count;
}

console.log(countVowels("JavaScript"));
console.log(countVowels("Hello"));


//////

function removeItems(arr){
    let result=[];

    for(let i= 0 ; i < arr.length; i++){
        if(!result.includes(arr[i])){
            result.push(arr[i])
        }
    }
    return result;
}

console.log(removeItems([1,2,2,3,4,4,5]));

//////

function season(month){
    switch(month){
        case 12:
            case 1:
                case 2:
                    return "winter";

                    case 3:
                        case 4:
                            case 5:
                                return "spring"

                                case 6:
                                    case 7:
                                        case 8:
                                             return "Summer"

                                             case 9:
                                                case 10:
                                                    case 11:
                                                        return "Autumn"

                                                        default:
                                                            return "Invalid Month";
    }
}

console.log(season(1));
console.log(season(7));
console.log(season(9));
console.log(season(3));

///////

// max of 3

function maxOfThree(a, b, c) {
    return (a > b) ? (a > c ? a : c) : (b > c ? b : c);
}
console.log(maxOfThree(5,10,8));

//////

let users = [
    {name: "John", age: 25}, 
    {name: "Jane", age: 30}, 
    {name: "Bob", age: 20}
]

let age = users.map(user => user.age)

let total = age.reduce((sum,age) => sum + age, 0)

let average =total / age.length

console.log("Average age:" ,average);


////Deep Clone Object

let obj = {
    name: "Anitha",
    age: 23,
    address: {
        city: "New York",
        zip: 10001
    }
};
console.log(obj);


function deepCopy(obj){
    let copy = JSON.parse(JSON.stringify(obj));
for (let key in copy){
    console.log(key + ":" ,copy[key]);
}

copy.copied = true;
return copy;

}

let newObj = deepCopy(obj);
console.log("cloned Object:", newObj);

/////////

function findlarge(num){
    let max = num[0];

    for(let n of num ){
        if(n > max){
            max = n;
        }
    }
    return max;
}

console.log(findlarge([4, 15, 9, 21, 3]));


////////


let themeText = document.getElementById("theme");

function dark(){
    localStorage.setItem("theme", "Dark");
    showtheme();
}

function light(){
    localStorage.setItem("theme", "light");
    showtheme();
}

function showtheme(){
    themeText.textContent = "Theme: " + 

    localStorage.getItem("theme")
}

showtheme();


/////////


function checkPasswordStrength(password){
    if(password.length < 8){
        return "password must be atleast 8 characters";
    }

    let number = false;
    let upperCase = false;

    for(let i = 0; i < password.length; i++){
        let char = password[i];

        if(char >= "0" && char <= "9"){
            number = true;
        }

        if(char >= "A" && char <= "Z"){
            upperCase = true;
        }

    }

    if(!number){
        return "Password must be contain at least one number";
    }

    if(!upperCase){
        return "password must be contain at leact one uppercase";
    }

    return "strong password";
}

console.log(checkPasswordStrength("Hello178"));

/////////////////









