var readline = require("readline-sync")

var response1 = readline.question("What is your name?: ")
console.log(`Hello, ${response1}, it's good to see you`)

var response2 = readline.question("What is your favorite food?: ")
console.log(`Oh wow! ${response2} is my favorite food too, 
well mainly on Tuesdays, but sometimes true on Sunday's`)

var response3 = readline.question("What is your password? Don't worry, it will not show up while you type, Java Script took care of that. Password: ",{
    hideEchoBack: true
})
console.log(`Thank you! ${response3} is now encrypted......OOOOPPSSSS!!!!!!!`)

if (readline.keyInYN("Are you enjoying this? ")){
    console.log("OK, cool")
}   else{
    console.log("I will work on that. Thanks for letting me know.")
}

bands = ["Metallica", "Nirvana", "Alice In Chains", "Live"]
index = readline.keyInSelect(bands, "Which of these bands do you like the most?")
if(bands[index]=== 1){
    console.log(`Cool, ${bands[0]} is my favorite band.`)
} else{
    console.log(`Right on, ${bands[index]} is not my first choice, but awesome, none-the-less`)
}
    

