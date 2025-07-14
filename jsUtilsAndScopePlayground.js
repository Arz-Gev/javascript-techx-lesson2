// FIRST TASK 

//   Part A: JavaScript Utilities Library(Functions)
//     Build a mini utility library with reusable JavaScript functions.Requirements:
// Create at least 6 utility functions:
// Use one function declaration, one function expression, and one arrow function.
// Each function should solve a clear problem(e.g., math, string manipulation, array processing).
// Write test calls with real data and log the results.Group and label each function block clearly in your code.Use meaningful parameter names and clear return values.


// MY SOLUTION 

// circle area counter 

let circleRadiusR = 2;      //right input
let circleRAdiusW = "abc";  // wrong input
                           

                           // and as you can see i call the function before decloration, i can do this because the function type is funct. decloration
circleArea(circleRadiusR)  // this will console.log the radius
circleArea(circleRAdiusW)  // this will console.log message about wrong input

function circleArea(r){   // this function counts the circle area by radius, it's written with ternary operator, and all in one line so it's looks messy
    console.log((typeof r === 'number') ? "here's circle area - " + Math.PI * (r*r) + " when radius = " + r + "\n" : "wrong input\n");
}
