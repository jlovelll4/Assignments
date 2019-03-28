function makeStrings(array){
    array.map(person =>){
        let str
        if( person.age > 18){
            str = person.name + " can go to The Matrix"
        } else {
            str = person.map + " is under age"
        }
        return str
    }
}

