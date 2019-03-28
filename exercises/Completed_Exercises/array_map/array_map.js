// 1. Make an array of numbers that are doubles of the 1st array.
const numbers = [1,2,3,4]
function doubleNumbers(arr){
    return arr.map(number => number * 2)
}
console.log(doubleNumbers(numbers)); // [2,4,6,8]

// 2. Take an array of numbers and make them strings.
function stringItUp(arr){
  return arr.map(number => String(number))
}
  console.log(stringItUp(numbers)); // ["1", "2", "3", "4"]

// 3. Capitalize each string item in the array.
const words = ["joe", "bob", "billy", "jim"]
function capitalizeNames(arr){
  return arr.map((word) => word.toUpperCase())
}
console.log(capitalizeNames(words))

// 4. Make an array of strings of the names.
const famousPeople = [
  {
      name: "Angelina Jolie",
      age: 80
  },
  {
      name: "Eric Jones",
      age: 2
  },
  {
      name: "Paris Hilton",
      age: 5
  },
  {
      name: "Kayne West",
      age: 16
  },
  {
      name: "Bob Ziroll",
      age: 100
  }
]
function namesOnly(arr){
  return arr.map(nameOnly => nameOnly.name )
}
console.log(namesOnly(famousPeople)); 

// 5. Make an array of strings of the names saying whether or not they can go to The Matrix.
function makeStrings(arr){
  return arr.map(people =>{
    if (people.age >= 18){
      return (`${people.name} can go to The Matrix`)
    } else{
      return (`${people.name} is not old enough to go to The Matrix`)
    }
  })
}
console.log(makeStrings(famousPeople)); 

// 6. Make an array of the names in 'h1' and the ages in 'h2'
function readyToPutInTheDOM(arr){
  return arr.map((famousPerson) =>{
    return `<h1>${famousPerson.name}</h1><h2>${famousPerson.age}</h2>`
      })
}
console.log(readyToPutInTheDOM(famousPeople))

