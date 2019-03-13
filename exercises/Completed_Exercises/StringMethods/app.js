function capilizeAndLowercase(string){
    return `${string.toUpperCase()}${string.toLowerCase()}`
    };
console.log(capilizeAndLowercase("hello"))

function findMiddleIndex(string2){
    middleIndex = Math.floor(string2.length / 2);
    if (middleIndex % 2 === 0);
        return middleIndex;
};
console.log(findMiddleIndex("uhauhvcrciufnisndKJNKNonio"));

function returnFirstHalf(anyString) {
    var middleIndex = findMiddleIndex(anyString);
    return anyString.slice(0, middleIndex);
};
console.log(returnFirstHalf("uhauhvcrciufnisndKJNKNonio"));

function secondHalfString(anyString) {
    var middleIndex = findMiddleIndex(anyString);
    return anyString.slice(middleIndex, -1);
};
console.log(secondHalfString("uhauhvcrciufnisndKJNKNonio"));

function firstHalfUpper(string) {
    var half = returnFirstHalf(string);
    return `${half.toUpperCase()}${secondHalfString(string)}`;
};
console.log(firstHalfUpper("wefoiwefsdvwervwevwevwev"));

