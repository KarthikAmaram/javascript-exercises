const palindromes = function (string) {
    smallString =  string.toLowerCase();
    const filteredString = smallString.split("");
    const splitString = smallString.split("");
    for (let i = filteredString.length - 1; i >= 0; i--) {
        if (filteredString[i] === "!" || filteredString[i] === "." || filteredString[i] === "," || filteredString[i] === " ") {
            filteredString.splice(i, 1);
        }
        
    }
    for (let i = splitString.length - 1; i >= 0; i--) {
        if (splitString[i] === "!" || splitString[i] === "." || splitString[i] === "," || splitString[i] === " ") {
            splitString.splice(i, 1);
        }
        
    }
    string = filteredString.join("");
    const backwardsString = String(splitString.reverse().join(""));
    if (backwardsString === string){
        return true;
    } else {
        return false;
    }
};

palindromes("racecar!")

// Do not edit below this line
module.exports = palindromes;
