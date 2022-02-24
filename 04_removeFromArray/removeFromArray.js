const removeFromArray = function(...args) {
    const array = args[0]
    const newArray = []
    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    })
    return newArray;
};





([1,2,3,4,5],3,4)
// we want to have the program search argument[0] for argument[1]
// if the argument[1] is in the argument[0]





//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === number) {
//             array.splice(i,1)
//         }
//     }
// return array
// };


// Do not edit below this line
module.exports = removeFromArray;
