const leapYears = function(year) {
    // leap years divisible by 4, not divisible by 100
    if (year % 400 == 0) {
        return true
    }
    if (year % 100 == 0) {
        return false
    }
    if (year % 4 == 0) {
        return true
    } else {
        return false
    }
};



// Do not edit below this line
module.exports = leapYears;
