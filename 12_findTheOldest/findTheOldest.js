const findTheOldest = function(people) {

    let old = people.map(person => {
        
        if(person.yearOfDeath === undefined){
            person.yearOfDeath = new Date().getFullYear();
        }

        let age = person.yearOfDeath - person.yearOfBirth;
        let name = person.name;
        let newPerson = {name,age};

        return newPerson;
    })


    let oldestPerson = old.reduce((max,person) => {
        return person.age > max.age ? person : max; // read as: if(person.age > max.age) then the new max.age = person.age
    }, {age : 0})

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;