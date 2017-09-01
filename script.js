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

var age = 25;

if (age < 20) {
    console.log('Kofi is a teenager');
} else {
    console.log('Kofi is a man');
}