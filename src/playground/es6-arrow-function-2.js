// arguments object - no longer bound with arrow functions

const add = function (a, b) {
    console.log(arguments);
    return a + b;
};

console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
    name: 'Andrew',
    cities: ['Notts', 'Cardiff', 'Ebbw Vale'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
}

console.log(user.printPlacesLived());

// Challenge

const multiplier = {
    // numbers - array of numbers
    numbers: [1, 2, 4],

    // multiplyBy - single number
    multiplyBy: 2,

    // multiply - return a new array where the number have been multiplied
    multiply() {
        return this.numbers.map(number => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());