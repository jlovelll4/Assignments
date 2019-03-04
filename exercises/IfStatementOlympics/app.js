if (5>3){
    console.log("is greater than")
};

var kat = "cat";
if (kat.length === 3){
    console.log("is the length")
};

if ("cat" === "dog"){
}
else{
    console.log("not the same")
};

// Bronze Level

var person = {
    name: "Bobby",
    age: 12
};

if (person.age >= 18){
    console.log(person.name + " is allowed to go to the movie.")
}
else{
    console.log(person.name + " is allowed to go to the movie.")
};

if (person.name[0] == "B"){
    console.log(person.name + " is allowed to go to the movie.");
}
else{
    console.log(person.name + " is allowed to go to the movie.")
};

if (person.name[0] == "B" && person.age > 18){
    console.log(person.name + " is allowed to go to the movie.")
} else{
    console.log()
}

// silver medal
// Write an if/else if/else statement that prints "strict" if 1 strictly equals "1", prints "loose" or "abstract" if 1 equals "1" without type checking, and prints "not equal at all" if it doesn't print the other stuff.
// Write an if statement that prints "yes" if 1 is less than or equal to 2 AND (&&) 2 is equal to 4

if (1 === "1"){
    console.log("strict")
}
else if (1 == "1"){
    console.log("loose")
}
else{
    console.log("not equal at all")
};

if (1 >= 2 && 2 === 4){
    console.log("yes")
};

// Gold Medal

// Write an if statement that checks to see if "dog" is a string
// Write an if statement that checks to see if "true" is a boolean
// Write an if statement that checks to see if a variable has been defined or not
// Write an if statement asking if "s" greater than 12?
// Try it with a few more letters and a few numbers.

// Write a ternary statement that console.logs whether a number is odd or even. For example:

var dawg = "dog";
if (typeof dawg == "string"){
    console.log("its a string")
};

if (typeof "true" == "boolean"){
    console.log("yep")
}
else{
    console.log("nope")
};

var animals = ["dog", "rat", "octopus", "cat"]

console.log(animals)