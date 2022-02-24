const sumAll = function(startNumber,finishNumber) {
    let finalSum = 0
    if ((startNumber < 0) || (finishNumber < 0)) {
        return "ERROR"
    }
    if (typeof(startNumber) !== "number" || typeof(finishNumber) !== "number") {
        return "ERROR"
    }
    if (startNumber < finishNumber) {
        for (let i = startNumber; i <= finishNumber; i++) {
            finalSum += i;
        }
    } else {
        for (let i = startNumber; i >= finishNumber; i--) {
            finalSum += i;

        }
    }
    return finalSum;
    
};

console.log(sumAll(4,1))

// Do not edit below this line
module.exports = sumAll;
