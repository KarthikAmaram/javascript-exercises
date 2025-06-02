const reverseString = function(string) {
    const letters = string.split("");
    const backwardsLetters = letters.reverse();
    return backwardsLetters.join("");
};

// Do not edit below this line
module.exports = reverseString;
