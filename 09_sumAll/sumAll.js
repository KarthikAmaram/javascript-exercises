const sumAll = function(startValue, endValue) {
    if (startValue < 0 || endValue < 0){
        return "ERROR";
    }
    if (!(Number.isInteger(startValue)) || !(Number.isInteger(endValue))){
        return "ERROR";
    }
    let actualStartValue = startValue;
    let actualEndValue = endValue;
    if (startValue > endValue){
        actualStartValue = endValue;
        actualEndValue = startValue;
    }
    let sum = 0;
    for (let i = actualStartValue; i <= actualEndValue; i++) {
        sum += i
    };
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
