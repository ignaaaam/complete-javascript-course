/*let js = 'amazing';

console.log(40+8+23-10);

console.log('Jonas');
console.log(23);

let firstName = "Jonas";
let age = 23;

console.log("My name is " + firstName + " and my age is " + age);

console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);*/

// EXERCISE

/*let country = 'Spain';
let continent = 'Europe';
let population = 47000000;

console.log('Im from ' + country + ' it belongs to ' + continent + ' and it has ' + population + ' people living in');

// ##### DATA TYPES #####

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);*/

// ##### LET - CONST - VAR #####

/*let age = 30;
age = 31;
console.log(age);

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);*/

// ##### BASIC OPERATORS #####

// Math Operators
/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assigment Operators
let x = 10 + 5; // 15
x += 10; // 25
x *= 4; // 100
x++;
x--;
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

*/

// OPEARTOR PRECEDENCE
/* const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25-10-5; // x = Y = 10, x = 10
console.log(x,y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge); */

/* Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall. */

/** CHALLENGE 1 */

/* let MarkMass = 78;
let JohnMass = 92;
let MarkHeight = 1.69;
let JohnHeight = 1.95;

let MarkBMI = MarkMass / (MarkHeight ** 2);
let JohnBMI = JohnMass / (JohnHeight ** 2);

let markHigherBMI = MarkBMI > JohnBMI;

console.log('Mark BMI is ' + MarkBMI + ' and John BMI is ' + JohnBMI + ' and its ' + markHigherBMI + ' that Mark has higher BMI'); */


/** STRING AND TEMPLATE LITERALS */

/* const firstName = 'Ignacio';
const job = 'programmer';
const birthYear = 1996;
const year = 2021;

const igna = "I'm " + firstName + ", a " + (year - birthYear) + ' year old ' + job ;
console.log(igna);

// Template literals
const ignaNew = `I'm ${firstName}, a ${(year - birthYear)} years old ${job}`;
console.log(ignaNew);

console.log('String with \n\ multiple \n\ lines');

console.log(`String with
multiple 
lines
using template literals`); */

// IF / ELSE STATEMENTS
/* 
const age = 17;

if (age >= 18){
    console.log('Sarah can start driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Waith another ${yearsLeft} years`);
}


const birthYear = 1991;
let century;

if(birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}

console.log(`You're on the ${century} century`); */

/** CODING CHALLENGE 2 */

/* Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 
GOOD LUCK 
 */


