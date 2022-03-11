const fibonacci = n => {
    if (n < 0) return "OOPS";
    if (n === 0) return 0;
    let a = 0
    let b = 1
    for (let i = 1; i < n; i++) {
        const holder = b;
        b = a + b;
        a = holder
    } 
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
