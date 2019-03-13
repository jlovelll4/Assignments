


var additionForm = document.addition
var subtractForm = document.subtraction
var multiplyForm = document.multiplication

additionForm.addEventListener("submit", function(e){
    e.preventDefault()
    var addValues = Number(additionForm.num1.value) + Number(additionForm.num2.value)
    additionForm.innerHTML += `Answer: ${addValues}`
})
subtractForm.addEventListener("submit", function(e){
    e.preventDefault()
    var subtractValues = Number(subtractForm.num1.value) - Number(subtractForm.num2.value)
    subtractForm.innerHTML += `Answer: ${subtractValues}`

})
multiplyForm.addEventListener("submit", function(e){
    e.preventDefault()
    var multiplyValues = Number(multiplyForm.num1.value) * Number(multiplyForm.num2.value)
    multiplyForm.innerHTML += `Answer: ${multiplyValues}`

})