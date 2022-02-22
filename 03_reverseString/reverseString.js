const reverseString = function(string) {
    newString = string.split('');
    newestString = '';
// for every index, replace it with
    for (i = 1; i <= string.length; i++) {
        newestString += newString[newString.length-i]
        }
    return newestString
};
// we want to swap the indexes
// hello has 5 indexes 0,1,2,3,4. we want 4,3,2,1,0
// how can we swap the indexes? 



reverseString("hello");
console.log(newestString)



// Do not edit below this line
module.exports = reverseString;