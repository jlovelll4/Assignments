var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// 1. Remove the last item from the vegetable array
vegetables.pop()

// 2. Remove the first item from the fruit array.
fruit.shift()

// 3. Find the index of "orange."
var indexOrange = fruit.indexOf("orange")
console.log("fruit - Index of Orange is: ", indexOrange)

// 4. Add that number to the end of the fruit array. 
console.log(fruit.push(indexOrange)) // This prints new array item count.

// 5. Use the length property to find the length of the vegetable array.
var vegCount = vegetables.length
console.log(`Vegetables Array Count: ${vegCount}`)

// 6. Add that number to the end of the vegetable array.
vegetables.push(vegCount)
console.log("vegetables: ", vegetables);

// 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
var food = fruit.concat(vegetables)
console.log("Food: ", food);

// 8. Remove 2 elements from your new array starting at index 4 with one method.
food.splice(4,2)
console.log("Food with 2 elements removed starting at index 4: ", food)

// 9. Reverse your array.
console.log("Food in reverse: ", food.reverse())

//10. Turn the array into a string and return it.
console.log("Food joined as a string: ", food.join())
