const rs = require('readline-sync')

// const isWalking = true
const displayStats = () => {
    console.log (`You have ${player.health}% health remaining.`)
}
const run = (player) =>{
    if (Math.random() < 0.5){
        console.log("You successfully ran away! Press 'Enter' to keep walking.")
    } else {
        console.log("You were not able to run away, please prepare to attack.")
        generateEnemy()
        fight(player, enemy)
    }
}
const fight = (player, enemy) =>{
    while (player.health > 0 && enemy.health > 0){
    player.health = +player.health - +enemy.attack
    enemy.health = +enemy.health - +player.attack
    console.log(`Player Health: ${+player.health}`)
    console.log(`Enemy Health: ${+enemy.health}`)
}
    console.log(player.health > 0 ? `Congratulations, you have won. Your health boosted from ${player.health} to ${player.health + enemy.reward}` : `The ${enemy.name} has gotten the best of you, ${player.name}. Game Over!`)
    player.health = player.health + enemy.reward
}
const generateEnemy = () => {
    const enemies = ["James Gosling", "Brendan Eich", "Guido van Rossum"]
    const newEnemy = {
        name: enemies[Math.floor(Math.random() * 3)],
        reward: Math.round(Math.random() * 20) // Rewards up to 20% health
    }
    enemy.name = newEnemy.name, enemy.reward = newEnemy.reward
}


const player = {
    name: [],
    health: 100,
    attack: Math.round(Math.random() * 100)
}

const enemy = {
    health: 100,
    attack: Math.round(Math.random() * 100)
}

player.name = rs.question(" OK, lets get started. What is your name? ")
console.log(`Hello ${player.name} nice to meet you.`)

while(player.health > 0){
    const options = ["walk",'display health']
    console.log("Welcome to my game.")
        const action = rs.keyInSelect(options, "What would you like to do? ")
        if (action === 0){ // if Walk is chosen
            if (Math.random() < 0.25){ // Checks to see if chance is 25%
                const options2 = ["Run", "Fight"]
                const action2 = rs.keyInSelect(options2, `You have encountered an enemy. Please select whether you would like to attempt to run away or fight`)
                if (action2 === 0) {
                    run(player) 
                }else {
                    generateEnemy()
                    fight(player, enemy)
                }
            }else{
                console.log("You walked a little ways without encountering any enemies. Please select whether you would like to continue walking or view your health. ")
            }
        }else{
            displayStats()
        }
}




            
  
