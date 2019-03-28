
const numbers = [3, 6, 8, 2]

// 1. Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
    return arr.filter(number => number >= 5)
  }
  // test
  console.log(fiveAndGreaterOnly(numbers)); /// [6, 8]

// 2. Given an array of numbers, return a new array that only includes even numbers.
function evensOnly(arr) {
    return arr.filter(number => {
         if(number % 2 === 0){
            return number
         }
    })
  }
  // test
  console.log(evensOnly(numbers)); /// [6, 8, 2]

 // 3. Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length.
 const things = ["dog", "wolf", "by", "family", "eaten", "camping"]
 function fiveCharactersOrFewerOnly(arr) {
     return arr.filter(thing => thing.length <= 5)
  }
  // test
  console.log(fiveCharactersOrFewerOnly(things)); // ["by", "dog", "wolf", "eaten"]

// 4. Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
const illuminatiPeople = [
    {
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
] 
function illuminatiMembers(arr){
    return arr.filter(illuminatiPerson => {
       return illuminatiPerson.member === false
    }
    )}
  // test
  console.log(illuminatiMembers(illuminatiPeople))

  // 5. Filter out all the people who are not old enough to see The Matrix (younger than 18)
  function ofAge(arr){
    return arr.filter(peep => peep.age < 18)
  }
  // test

  const peeps = [
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
  console.log(ofAge(peeps));