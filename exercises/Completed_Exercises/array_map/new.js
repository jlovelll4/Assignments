// 1. Array of numbers that are doubles of the first array
const arr = [1, 1, 2, 2]
let sum = arr.reduce((final, num) => {
            return final + num;
}, 5)

console.log(sum)


