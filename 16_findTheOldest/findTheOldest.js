const findTheOldest = function(people) {
    const oldest = people.sort((a, b) => {
        let aDeath = new Date().getFullYear();
        let bDeath = new Date().getFullYear();

        if (a.yearOfDeath){
            aDeath = a.yearOfDeath;
        }
        if (b.yearOfDeath){
            bDeath = b.yearOfDeath;
        }
        aAge = aDeath - a.yearOfBirth;
        bAge = bDeath - b.yearOfBirth;
        if (aAge > bAge) {
            return -1;
        } else {
            return 1;
        }
    })
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
