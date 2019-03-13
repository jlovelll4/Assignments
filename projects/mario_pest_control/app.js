

document.onsubmit = function(e){
    e.preventDefault()
    const goombaInput = document.fgoomba.caught.value
    const bobombInput = document.fbobombs.caught.value
    const cheepInput = document.fcheepcheeps.caught.value
    totalAmount = (goombaInput * 5) + (bobombInput * 7)+ (cheepInput * 11)

    document.getElementById("totalCoins").textContent = `Coin Total: ${totalAmount}`
    console.log(totalAmount)
   
}