const palindromes =  str => {
    // remove punctuation, to lower case.
    console.log(str)
    str = str.replace(/[!.,?:;\/() _-]/g, '').toLowerCase();
    console.log(str)
    // Compare the string with it's reversed version.
    return str == str.split('').reverse().join('');
    
};

// Do not edit below this line
module.exports = palindromes;
