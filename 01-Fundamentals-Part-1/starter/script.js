/*const js = 'amazing';

console.log(40+8+23-10);

console.log('Jonas');
console.log(23);

const firstName = "Jonas";
const age = 23;

console.log("My name is " + firstName + " and my age is " + age);

console.log(firstName);
console.log(firstName);

// Variable name conventions
const jonas_matilda = "JM";
const $function = 27;

const person = "jonas";
const PI = 3.1415;

const myFirstJob = "Coder";
const myCurrentJob = "Teacher";

const job1 = "programmer";
const job2 = "teacher";

console.log(myFirstJob);*/

// EXERCISE

/*const country = 'Spain';
const continent = 'Europe';
const population = 47000000;

console.log('Im from ' + country + ' it belongs to ' + continent + ' and it has ' + population + ' people living in');

// ##### DATA TYPES #####

const javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

const year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);*/

// ##### const - CONST - VAR #####

/*const age = 30;
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
const x = 10 + 5; // 15
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

const x, y;
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

/* 
const MarkMass = 78;
const JohnMass = 92;
const MarkHeight = 1.69;
const JohnHeight = 1.95;

const MarkBMI = MarkMass / (MarkHeight ** 2);
const JohnBMI = JohnMass / (JohnHeight ** 2);

const markHigherBMI = MarkBMI > JohnBMI;

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
const century;

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

// const MarkMass = 50;
// const JohnMass = 92;
// const MarkHeight = 1.69;
// const JohnHeight = 1.95;

// const MarkBMI = MarkMass / (MarkHeight ** 2);
// const JohnBMI = JohnMass / (JohnHeight ** 2);
// console.log(MarkBMI, JohnBMI);


// if(MarkBMI > JohnBMI) {
//     console.log(`Mark's BMI (${MarkBMI}) is higher than John's (${JohnBMI})!`);
// } else {
//     console.log(`John's BMI (${JohnBMI}) is higher than Mark's (${MarkBMI})!`);
// }

/** TYPE CONVERSION & TYPE COERCION */

/** 
 * TYPE CONVERSION (convert types)
 */

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear)
// console.log(Number(inputYear)+ 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

/** 
 * TYPE COERCION (operator dealing with 2 values that are different types)
 */
// + converts to string & - * / converts to number
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');

// let n = '1' + 1;
// n = n-1;
// console.log(n);

/** Truthy & Falsy values */

// 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Ignacio'));
// console.log(Boolean({}));
// console.log(Boolean(''));


// const money = 100;
// if(money){
//     console.log("Don't spend it all ;)")
// } else {
//     console.log('You should get a job!')
// }

// let height = 0;
// if(height) {
//     console.log('YAY! Height is defined');
// }else {
//     console.log('Height is UNDEFINED');
// }

/** EQUALITY OPERATORS */

// const age = 18;
// if(age === 18) console.log('You just became an adult :D (strict)');

// if(age == 18) console.log('You just became an adult :D (loose)');

// const favourite = Number(prompt("What's your favourite number?"));

// console.log(favourite);
// console.log(typeof favourite);

// if (favourite == 23) {
//     console.log('Cool, 23 is an amazing number!')
// } else if (favourite === 7) {
//     console.log('7 is also a cool number')
// } else if(favourite === 9) {
//     console.log('9 is also a cool number')
// } else {
//     console.log('Number is not 23 or 7 or 9');
// }

// if(favourite !== 23) console.log('Why not 23?')

/** CODING CHALLENGE #3 */

/*
There are two gymnastics teams, DOphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trphy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule,  a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for a minimum score, as well as multiple else-if blocks
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Doplhins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// const DolphinsScore = Number((35 + 108 + 95)/3).toFixed(2);
// const KoalasScore = Number((30 + 108 + 89)/3).toFixed(2);

// if (DolphinsScore > KoalasScore && DolphinsScore >= 100 && KoalasScore >= 100) {
//     console.log('Dolphins wins!');
// } else if (KoalasScore > DolphinsScore && DolphinsScore >= 100 && KoalasScore >= 100){
//     console.log('Koalas wins!');
// } else if(DolphinsScore === KoalasScore && DolphinsScore >= 100 && KoalasScore >= 100) {
//     console.log('its a draw!');
// } else {
//     console.log('no one wins the trophy');
// }

// console.log(DolphinsScore);
// console.log(KoalasScore);

/** SWITCH STATEMENT */

// const day = 'wednesday';

// switch(day) {
//     case 'monday':
//         console.log('Plan course strcture');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('ENjoy the weekend');
//         break;
//     default:
//         console.log('Not a valid day!');
// }

// if (day == 'monday'){
//     console.log('Plan course strcture');
//     console.log('Go to coding meetup');
// } else if (day == 'tuesday'){
//     console.log('Prepare theory videos');
// } else if (day == 'wednesday' || day == 'thursday'){
//     console.log('Write code examples');
// } else if (day == 'friday'){
//     console.log('Record videos');
// } else if (day == 'saturday' || day == 'sunday'){
//     console.log('ENjoy the weekend');
// } else {
//     console.log('Not a valid day!');
// }

/** THE CONDITIONAL TERNARY OPERATOR */

// const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') :
// console.log('I like to drink water 💧');

// const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
// console.log(drink);

// let drink2;
// if(age >= 18){
//     drink2 = 'wine 🍷';
// } else {
//     drink2 = 'water 💧';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

/** CODING CHALLENGE 4 */

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%

1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip).
Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values is 275, 40 and 430

*/

// const value = 430;
// const tip = (value>= 50 && value <= 300) ? (value * 15)/100 : (value * 20)/100 ;
// const finalPrice = value + tip;

// console.log(`Restaurant value is ${value}. The tip is ${tip} & the final price is ${finalPrice}`);

/** Javascript Releases ES5, ES6+ and ESNext */