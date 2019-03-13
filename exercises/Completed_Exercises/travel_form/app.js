// 

document.airline.onsubmit = function(e){
    e.preventDefault()
    var checkedLocations = []
    var locations = document.airline.location
    for (var i = 0; i < locations.length; i++){
        if(locations[i].checked){
            checkedLocations.push(locations[i].value)
        }
    }
    console.log(checkedLocations)
    var alertMess = `
    First Name: ${document.airline.fname.value}
    Last Name: ${document.airline.lname.value}
    Age: ${document.airline.age.value}
    Gender: ${document.airline.gender.value}
    Dietary Restrictions: ${document.airline.dietrestrictions.value}
    Destination: ${checkedLocations.join(", ")}
    ` 
    alert(alertMess)
}