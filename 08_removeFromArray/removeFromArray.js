const removeFromArray = function(array, value1, value2, value3, value4) {
    let newArray = array;
    if (array.includes(value1)) {
        newArray = newArray.filter((element) => element !== value1);
    }
    if (array.includes(value2)) {
        newArray = newArray.filter((element) => element !== value2);
    }
    if (array.includes(value3)) {
        newArray = newArray.filter((element) => element !== value3);
    }
    if (array.includes(value4)) {
        newArray = newArray.filter((element) => element !== value4);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
