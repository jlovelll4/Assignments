const numArray = [4,3,5,1,7,6,2,8,9]
const letterArray = ["c", "o",'p','q','l','w','x','i']

numArray.sort((a, b) => {
    a - b 
}) 
 console.log(numArray)

 // Randomizes an array of strings
 letterArray.sort((a, b) => {
     return Math.floor(Math.random() * 2)
 })

 numArray.reduce((sum, x) => {
     return sum + x
 }, 0)