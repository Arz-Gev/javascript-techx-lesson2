//  THE TASK A

//   Part A: JavaScript Utilities Library(Functions)
//     Build a mini utility library with reusable JavaScript functions.Requirements:
// Create at least 6 utility functions:
// Use one function declaration, one function expression, and one arrow function.
// Each function should solve a clear problem(e.g., math, string manipulation, array processing).
// Write test calls with real data and log the results.Group and label each function block clearly in your code.Use meaningful parameter names and clear return values.


// MY SOLUTIONS
console.log("HERE I START PART A \n")

// FUNCT 1 - circle area counter 
console.log("below used function to get circle area");

let circleRadiusR = 2;      // right input
let circleRAdiusW = "abc";  // wrong input

// and as you can see i call the function before decloration, i can do this because of my funct type is "function declaration" (though it's not recommended)
circleArea(circleRadiusR);  // this will console.log the radius
circleArea(circleRAdiusW);  // this will console.log message about wrong input

function circleArea(r) {   // this function counts the circle area by radius, it's written with ternary operator, and all in one line so it looks messy
    console.log((typeof r === 'number') ? "circle area - " + Math.PI * (r * r) + " when radius = " + r : "circle area - none, wrong input");
}
console.log(); // wrote this to get empty spaces between outputs, will do this every time






// FUNCT 2 - do strings equal
console.log("below used function expression to compare strings");

let str1 = "abc";  // vars for test cases
let str2 = "abc";
let str3 = "cba";

const stringCompare = function (str1 = 'a', str2 = 'z') { // funciton expression
    return (str1 === str2);
}

console.log(`string - ${str1} and ${str2} equal = ${stringCompare(str1, str2)}`); // first declared the funct. and later used it for test, should return true 
console.log(`string - ${str1} and ${str3} equal = ${stringCompare(str1, str3)}`);  // should return false  
console.log();






// FUNCT 3 - which array is longer
console.log("below used arrow function to compare array lengths")

let intArr01 = [1, 2, 33, 3, 5, 12, 9, 99];     // first array
let intArr02 = [1, 2, 33, 3, 5, 12, 9, 22, 199];  // second array

const longestOrEqual = (arr1, arr2) => {
    let max = Math.max(arr1.length, arr2.length);
    return (arr1.length === arr2.length) ? " they are equal" : (max === arr1.length) ? "first is longer" : "second is longer";    // returns equal if they are, or the biggest if there is
}

console.log(`first array length = ${intArr01.length}, second = ${intArr02.length}, and  ${longestOrEqual(intArr01, intArr02)}`);
console.log();






// FUNCT 4 - sum of bigest nubers from two arrays (will use already declared arrays), used function decloration 
console.log("below are sum of biggest number from two arrays")

function sumOfBig(arr1, arr2) {
    let big1 = arr1[0];
    let big2 = arr2[0]; // two temp vars for getting biggests

    for (let i = 0; i < arr1.length; i++) {
        (arr1[i] > big1) ? big1 = arr1[i] : null;  // getting biggest num from first array
    }

    for (let i = 0; i < arr2.length; i++) {
        (arr2[i] > big2) ? big2 = arr2[i] : null;  // getting biggest num from second array
    }

    return big1 + big2;   // returning sum of biggests
}

console.log("used arrays \n" + intArr01 + "\n" + intArr02);
console.log("and sum of biggest numbers from each array is " + sumOfBig(intArr01, intArr02));
console.log();






// FUNCT 5 - merges two arrays
console.log("below are merge of two arrays, no sorting")

let array1 = [2, 7, 9];
let array2 = [1, 4, 13, 23, 33];   //added spaces to make it look more clear where should be which number

function mergArray(arr1, arr2) {
    let L1 = arr1.length;
    let L2 = arr2.length;  // get the lengths in vars

    let Lmax = Math.max(L1, L2);
    let Lmin = Math.min(L1, L2);

    let arrS = [];
    let arrL = [];
    let arrM = [];

    (L1 > L2) ? (arrL = arr1, arrS = arr2) : (arrL = arr2, arrS = arr1);

    for (let i = 0; i < Lmax; i++) {  // for loop for merging
        while (i < Lmin) {            // and while loop instead of if else statement
            arrM.push(arrL[i]);
            arrM.push(arrS[i]);
            i++;
        }
        arrM.push(arrL[i])
    }
    return arrM;
}

console.log(`first array - ${array1} \nsecond array - ${array2}`) // writing in console the initial arrays 
console.log(`merged array - ${mergArray(array1, array2)}`)  // writibg the merged one
console.log();





// FUNCT 6 - deletes duplicates from array
console.log("below are initial arr with duplicates and new one without")

let messyArray = [1, 1, 1, 1, 1, 2, 3, 4, 3, 4, 4]

function deleteDuplicate(arr) {
    let hash = new Set();                       // declaring set for better time complexity
    let arrN = [];                              // declaring new array because spent 15+ mins with splice trying to just delete the redundants and it wans't working 
    for (let i = 0; i < arr.length; i++) {      // for loop where i check if the elemet exists in set we don't add it to new array if it dose not we add, that's all 
        if (hash.has(arr[i])) {
            continue;
        } else {
            hash.add(arr[i])
            arrN.push(arr[i])
        }
    }
    return arrN;
}

console.log("this is initial array " + messyArray)
console.log("and this is the one without duplicates " + deleteDuplicate(messyArray))
console.log("\nHERE I FINISHED PART A AND START PART B\n");

// PART A IS DONE










// PART B 

//   Part B: Scope Simulation & Analysis
//     Demonstrate understanding of how JavaScript scope works by creating a simulation that uses:    Requirements:
// A global variable that is used inside and outside functions.
// A function that declares:
// A var variable at function level.
// A let and const inside a block (if, for, etc.).
// A nested function that tries to access all declared variables.
// Add comments explaining:
// Which variables are accessible where.
// Why some access attempts succeed or fail.
//     You should clearly show and explain the difference between function scope and block scope.



// MY SOLUTION 
console.log("below are console logs done in different scopes")

let globVar = "global variable"   // this is accessible everywhere in this file below line of it's decloration


function funct() {
    var inBody = "var declared in local scope"   // this is accessible everywhere below this line, it's "var" he dose not care abouth scopes
    let letInBody = "let declared in local scope"
    for (let i = 0; i < 1; i++) {
        const c = "const declared in local scope";
        let l = "let declared in local scope";      //these two accessible olny inside of this block scope

        console.log(`this is console log form block scope here i can print ${c} ${l}, and also the one from funct scope - ${letInBody}`)
    }

    const printer = () => {
        let a = "a"
        console.log(`here i can print ${globVar} ${inBody}`)    // this will work, so no try catch

        console.log("below i will try to print vars declared in block scope, i try to do it not from that block")   // these two are not, so added try catch
        try {
            console.log(c)
        } catch (error) {
            console.log("got error - ", error.message)
        }
        try {
            console.log(l)
        } catch (error) {
            console.log("got error - ", error.message)
        }
    }
    printer();   // rusn nested arrow funct
}

funct();   //runs funct
console.log("\nPART B IS READY STARTING PART C\n")

// PART B IS DONE










// PART C

//   Part C: Hoisting & TDZ Debugger
//     Simulate and explain how hoisting and temporal dead zone affect variable access.    Requirements:
// Use var, let, and const:
// Access each variable before it's declared to show how hoisting behaves differently.
// Include both variable and function hoisting examples.Log and label each case:
// Which one logs undefined
// Which one throws a ReferenceError
// Write a short explanation as comments beside each log about what happened and why.



// MY SOLUTION


// console.log(myLet, myConst, myVar)   this will give ReferenceError for let and const, and var will be undefined

let myLet = "let"
const myConst = "const"
var MyVar = "var"

console.log("the following printed because they've been declared before - " ,myLet, myConst, MyVar)    // this works because everything had been declared before

// myFunct()  this will not work because it's function expression, will give ReferenceError  (function declaration would work though)
  
const myFunct = function () {   
    console.log("funct worked")
}

myFunct(); 
