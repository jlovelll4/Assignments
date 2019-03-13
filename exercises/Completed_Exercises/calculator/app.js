var rs = require('readline-sync')
var operations = ["+", "-", "*", "/"]
console.clear()
var firstNum = +rs.question("Enter first number: ")
var secondNum = +rs.question("Enter second number: ")
var index = rs.keyInSelect(operations, "Which operation would you like to perform?")
console.clear()
switch(index){
    case 0:
    console.log(add(firstNum, secondNum))
    break
    case 1:
    console.log(subtract(firstNum, secondNum))
    break
    case 2:
    console.log(multiply(firstNum, secondNum))
    break
    case 3:
    console.log(divide(firstNum, secondNum))
    break
}

function add(num1, num2){
    return num1 + num2
}
function subtract(num1, num2){
    return num1 - num2
}
function multiply(num1, num2){
    return num1 * num2
}
function divide(num1, num2){
    return num1 / num2
}
