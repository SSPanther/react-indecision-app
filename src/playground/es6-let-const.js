var nameVar = 'Andrew';
var nameVar = 123;

console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';

console.log('nameLet', nameLet);

const nameConst = 'Frank';

console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'Hal';
    return petName;
}

getPetName();
//console.log(petName); // throws error

// Block scoping

var fullName = 'Andrew Mead';

if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);