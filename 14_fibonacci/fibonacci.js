const fibonacci = function(num) {
    if (num == 0){
        return 0;
    }
    if (num < 0) {
        return "OOPS";
    }
    num = Number(num);
    let fibonacciSequence = [1, 1];
    for (let i = 1; i < num; i++) {
        nextValue = fibonacciSequence[i] + fibonacciSequence[i-1];
        fibonacciSequence.push(nextValue);    
    }
    return fibonacciSequence[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
