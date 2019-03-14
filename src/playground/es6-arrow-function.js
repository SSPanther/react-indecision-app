// const square = function (x) {
//     return x * x;
// };

// const squareArrow = (x) => {
//     return x * x;
// };

// console.log(square(8));
// console.log(squareArrow(8));

// const squareArrow = (x) => x * x;

// console.log(squareArrow(8));


// Challenge - use arrow functions
// getFirstName('Mike Smith') => "Mike"
// Create regular arrow function
// Create arrow function using shorthand syntax

const testFullName = 'Steve L'

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};                                

console.log(getFirstName(testFullName));

const getFirstNameV2 = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameV2(testFullName));