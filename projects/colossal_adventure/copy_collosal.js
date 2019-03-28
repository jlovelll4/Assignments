const rs = require('readline-sync')

// Function to display stats
const displayStats = () => {
    console.clear()
    console.log (`You have ${player.health}% health remaining.`)
}

// Function to run
const run = (player) =>{
    if (Math.random() < 0.5){
        console.clear()
        console.log("You successfully ran away!")
    } else {
        console.clear()
        console.log("You were not able to run away, please prepare to attack.")
        generateEnemy()
    }
}

// Function to call if you defeat the enemy
const winner = () => {
    console.clear()
    console.log(`Congratulations, you have won. Your health boosted from ${player.health} to ${player.health + enemy.reward}`)
    player.health = player.health + enemy.reward
}

// Function to call if you are in a fight.
const fight = (player, enemy) =>{
    const isWinner = true
    const fightOptions = ['Display Health', 'Fight']
    const fightAction = rs.keyInSelect(fightOptions,`Wanna check out your health prior to this fight or jump right in?`)
    if(fightAction === 0){
        // console.clear()
        console.log(`You have ${player.health}% health remaining.`)
    }
    // While loop for the 'fight'. It's set to break once someone's health falls below 0.
    while (isWinner){
        player.attack = Math.round(Math.random() * 100)
        enemy.attack =  Math.round(Math.random() * 100)
        player.health = +player.health - enemy.attack
        console.log(`Enemy hit for ${enemy.attack}%`)
        console.log(`  Player Health: ${player.health}%`)
        // console.clear()
        enemy.health = +enemy.health - player.attack
        console.log(`You hit for ${player.attack}%`)
        console.log(`  Enemy Health: ${+enemy.health}%`)
        // console.clear()
        if(player.health <= 0){
            gameOver() // function called when the player's health is below 0.
            break //
        } else if(enemy.health <= 0){
               winner() // function called when the enemy's health is below 0.
               break
        } else{
            continue
        }
    }
}
    
// Function for generating a random enemy.
const generateEnemy = () => {
    const enemies = ["James Gosling", "Brendan Eich", "Guido van Rossum"]
    const newEnemy = {
        name: enemies[Math.floor(Math.random() * 3)],
        reward: Math.round(Math.random() * 20) // Rewards up to 20% health
    }
    enemy.name = newEnemy.name, enemy.reward = newEnemy.reward
    fight(player, enemy)

}

// Function for displaying the game has ended to the user.
const gameOver = () => {
    console.log(`The ${enemy.name} has gotten the best of you, ${player.name}. Game Over!`)
}

// Object for the player.
const player = {
    health: 100,
    
}
 // Object for the enemy player. Function generateEnemy adds the name property.
const enemy = {
    health: 100,
}

// Boolean
const isAlive = true

// While the above boolean remains true.
while(isAlive){
    if (!player.health > 0){
        gameOver()
        isAlive = false
    } 
    player.name = rs.question(" OK, lets get started. What is your name? ")
    console.log(`Hello ${player.name} nice to meet you.`)
    const options = ["walk"]
    const action = rs.keyInSelect(options, "Press '1' to walk. ")

    const isWalking = true
    while (isWalking){
        if (action === 0){ // if Walk is chosen
            if (Math.random() < 0.25){ // Checks to see if chance is 25%
                const options2 = ["Run", "Fight"]
                const action2 = rs.keyInSelect(options2, `You have encountered an enemy. Please select whether you would like to attempt to run away or fight`)
                if (action2 === 0) {
                    run(player)
                    break
                }else {
                    generateEnemy()
                    break
                }
            }else{
                continue
            }
        } else{
            continue
        }
    }
    
}




            
  
