const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth,currentPerson.yearOfDeath);
        console.log(currentAge)
        return oldestAge < currentAge ? currentPerson: oldest;
    })
};

const getAge = function(birth,death) {
    if (!death) {
        death = new Date().getFullYear();
        console.log(death)
    }
    return death - birth;
};



// Do not edit below this line
module.exports = findTheOldest;
