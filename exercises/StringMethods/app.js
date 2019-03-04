function findMiddleIndex(string2){
    middleIndex = Math.floor(string2.length / 2);
    if (middleIndex % 2 === 0);
        return middleIndex;
};

function firstHalfString(anyString) {
    var middleIndex = findMiddleIndex(anyString);
    return anyString.slice(0, middleIndex);
};

function secondHalfString(anyString) {
    var middleIndex = findMiddleIndex(anyString);
    return anyString.slice(middleIndex, -1);
};

// function capilizeAndLowercase(string){
//     var middleIndex = findMiddleIndex(string);
//     return `${string.slice(0, middleIndex).toUpper()}${string.slice(middleIndex, string.length -1)}`
// }; 

function firstHalfUpper(string) {
    var half = firstHalfString(string);
    return `${half.toUpperCase()}${secondHalfString(string)}`;
};

console.log(findMiddleIndex("uhauhvcrciufnisndKJNKNonio"));
// console.log(capilizeAndLowercase("kjschjkchjkcjhcIUHBIBIoinoiOIU"));
console.log(firstHalfUpper("wefoiwefsdvwervwevwevwev"));
