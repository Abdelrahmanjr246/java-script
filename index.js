
/*A. Part 1: Coding Questions (7.5 Grade):*/

// Q1:

/* let a = '123';
a = Number(a);
console.log(a + 7); */


// Q2:

/* let a  = '';
if ( !a ){
    console.log("invalid");
}else{
    console.log("valid");
} */


//Q3:

/* for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue;
    }else{
        console.log(i);
    }
} */


// Q4:

/* let a = [1, 2, 3, 4, 5];
let evenNumber = a.filter((num) => num % 2 ==0)
console.log(evenNumber); */

// Q5:

//sol1

/* let a = [1, 2, 3];
let b = [4, 5, 6];
let c = [...a, ...b];
console.log(c); */

//sol2

/* function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

let a = [1, 2, 3];
let b = [4, 5, 6];

let c = mergeArrays(a, b);
console.log(c); */



// Q6:

/* let i = 2;
switch (i) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day number");
        break;
}
 */


// Q7:

/* let arr = ['a', 'ab', 'abc'];
let lengths = arr.map((item) => item.length);
console.log(lengths); */


// Q8:

/* function a(x) {
    if (x % 3 == 0 && x % 5 == 0) {
        console.log("divisible by both");
        return "divisible by both";
    }else {
        console.log("not divisible by both");
        return "not divisible by both";
    }
}

a(15); */



// Q9:

/* const a = (x) => {
    console.log(x ** 2);
    return x ** 2;
}

a(5) */


// Q10:

/* let getPersonInfo = ({ name, age }) => {
    console.log(`${name} is ${age} years old`);
    return(`${name} is ${age} years old`)
}
let x = { name: "John", age : 25 };
getPersonInfo(x); */

// Q11:

/* function sum(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    console.log(total);
    return total;
}

sum(1, 2, 3, 4, 5); */


// Q12:

/* function delayedSuccess() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Success")
        }, 3000)
    })
}

delayedSuccess().then((message) => console.log(message)) */


// Q13:

/* function findLargest(arr) {
    let largest = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
}

console.log(findLargest([1, 3, 7, 2, 4])) */

// Q14:

/**************************/
/* function getKeys(obj) {
    const keys = Object.keys(obj);
    console.log(keys);
    return keys;
}

getKeys({
    name: "John",
    age: 30 
}) */

// Q15:

/* let splitFunction = function(str) {
    let arr = str.split(" ");
    console.log(arr);
    return arr;
}

splitFunction("The quick brown fox" ); */
