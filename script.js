/* 

// Handling Variables

var personName = 'Kwasi Adutwum';
console.log(personName);

var lastName = 'Asiedu';
console.log(lastName);

var age = 35;
console.log(age);

var completeAge = true;
console.log(completeAge);

*/

// More on variables
/*
var name = 'Kwasi';
var age = 35;

console.log(name + age);

var height, hairColor, ownsCar;

console.log(height);

height = '170 cm';
hairColor = 'black';
ownsCar = false;

console.log(name + ' is ' + age + ' years old. He has ' + hairColor + ' hair color. Does he own a car? ' + ownsCar); 

var yourLastName = prompt('What is your last name?');
console.log('Hiya! ' + name + ' ' + yourLastName);

alert('Hi again ' + name + ' ' + yourLastName);

*/

// Looking at operators
/*
var yearToday = 2017;
var yearOfBirth = yearToday - 35;

yearOfBirth = yearToday - 25 * 2;

console.log('You were born in ' + yearOfBirth + '.');

var ageKojo = 29;
var ageSam = 30;

ageKojo = ageSam = (3 + 5) * 4 - 6;

ageKojo++;
ageSam *= 3;
ageSam = ageSam * 3;

console.log(ageKojo);
console.log(ageSam);
*/

// Understanding if / else statements

/*
var name = 'Adu';
var age = 35;
var ownsCar = false;

if (ownsCar === false){
    console.log(name + ' does not own a car.');
} else {
    console.log(name + ' has a car. Yay!');
}

if ( 35 == '35' ) {
    console.log('Show that types are true based on operator');
}

*/

// Boolean logic and switch
/*
var age = 25;

if (age < 20) {
    console.log('Kofi is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log('Kofi is a young man.');
} else {
    console.log('Kofi is a man.');
}

var exercise = "free weights";

switch (exercise) {
    case "free weights":
        console.log("Great strength exercise");
        break;
    case "swimming":
        console.log("Superb total body exercise");
        break;
    case "Treadmill":
        console.log("Great cardio exercise");
        break;
    default:
        console.log("Must be some different sort of exercise");
}

*/

// Testing section
/*
var kwasiAge = 35;
var kwadwoAge = 30;
var jimAge = 40;

var kwasiHeight = 170;
var kwadwoHeight = 180;
var jimHeight = 175;

var kwasiScore = kwasiHeight + (5 * kwasiAge);
var kwadwoScore = kwadwoHeight + (5 * kwadwoAge);
var jimScore = jimHeight + (5 * jimAge);

if (kwasiScore > kwadwoScore && kwasiScore > jimScore) {
    console.log("Kwasi is the winner with " + kwasiScore + " points!");
} else if (kwadwoScore > kwasiScore && kwadwoScore > jimScore) {
    console.log("Kwadwo is the winner with " + kwadwoScore + " points!");
} else if (jimScore > kwadwoScore && jimScore > kwasiScore){
    console.log("Jim is the winner with " + jimScore + " points!");
} else {
    console.log("It is a draw");
} 

*/

// Looking at Functions

function personAge (yearOfBirth) {
    var age = 2017 - yearOfBirth;
    return age;
}

var kwameAge = personAge(1982);
var adwoaAge = personAge(1984);

// console.log("Kwame is " + kwameAge + " years old.");
// console.log("Adwoa is " + adwoaAge + " years old.");

function yearsTilRetire (name, year) {
    var age = personAge(year);
    var retire = 60 - year;
    console.log(name + " will retire in " + retire + " years.");
}

