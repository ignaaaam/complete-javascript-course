'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// // const interface = 'Audio';
// const private = 534

/* FUNCTIONS */

// function logger() {
//     console.log('My name is Jonas');
// }

// calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(3,6);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);

/* FUNCTION DECLARATION */

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1996);
// console.log(age1);

/* FUNCTION EXPRESSION (expression produce values) */

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1996);

// console.log(age1, age2);

/** ARROW FUNCTIONS */

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1996);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1996, 'Ignacio'));
// console.log(yearsUntilRetirement(1985, 'Mark'));

/** FUNCTIONS CALLING OTHER FUNCTIONS */

// function cutPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutPieces(apples);
//     const orangePieces = cutPieces(oranges);

//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2,3));

/** REVIEWING FUNCTIONS */

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;


    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }

    return retirement;

    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Ignacio'));





