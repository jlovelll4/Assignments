// function sum(num1, num2){
//     return (num1 + num2);
// };

// console.log(sum(4, 5));

// // Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
// function largestNum(num1, num2, num3){
//     return Math.max(num1, num2, num3);
// };

// console.log(largestNum(7,19,16));

// // Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");
// function evenOdd(num1){
//     if (num1 % 2 === 0){
//         return "Even"
//     }
//     else{
//         return "Odd"
//     };
// };

// console.log(evenOdd(7));

// Write a function that accepts a string as a parameter. If the length of the 
// string is less than or equal to twenty characters long, return the string concatenated 
// with itself (string + string). If the string is more than twenty characters long, return the 
// first half of the string.

function lenTest(anyString){
    myArray = []
    myArray.push(anyString)
    if (myArray[0].length <= 20){
        return `${anyString} ${anyString}`
    }
    else{
        halfLen = Math.round(myArray[0].length / 2 - 1);   
        firstHalf = myArray[0].slice(0, halfLen)
        return firstHalf
    };
};
console.log(lenTest("Where is the halfway point going to be?"));