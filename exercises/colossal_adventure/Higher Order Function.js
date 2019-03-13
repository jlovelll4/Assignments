setTimeout(function(){
    console.log("in here")
}, 2500)
console.log("out here")

const numbers = [1,2,3,4]

const newNumbers = numbers.map((num)=>{
    return num + 1
})

console.log(newArray)

const tasks = [
    {
        title: "get milk",
        completed: false
    },{
        title: "get swole",
        completed: false
    },{
        title: "drink milk",
        completed: false
    },{
        title: "code",
        completed: true
    },{
        title: "watch movie",
        completed: false
    }  
];

// Using map
const titles = tasks.map(task =>{
    return task.title

// Using Filter Option 1 
const unCompleted = tasks.filter(task =>{
    if(task.completed===false){
        return true
    }
})
// Using Filter Option 2
const unCompleted = tasks.filter(task => !task.completed)


console.log(titles)