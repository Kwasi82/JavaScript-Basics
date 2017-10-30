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

/*
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
    var retire = 60 - age;
    if (retire <= 0) {
        console.log(name + " has already retired.");
    } else {
    console.log(name + " will retire in " + retire + " years.");
    }
}

yearsTilRetire("Yaw", 1970);
yearsTilRetire("Akosa", 1999);
yearsTilRetire("Kofi", 1920);
*/

// Arrays section
/*
var cars = ["Toyota", "Buick", "Chevy"];
var carTypes = new Array("SUV", "Saloon", "Truck"); 

console.log(cars[0]);
cars[1] = "Ram";
console.log(cars);

// the array is name of manufacturer, country, year of establishment, import
var firstCar = ["Toyota", "Japan", 1978, true]

//adds the car color to the end of the array
firstCar.push("black");

//adds the region of the world to the beginning of th array
firstCar.unshift("Asia");

//removes the car color from the end of the array
firstCar.pop();
console.log(firstCar);

//removes the region from the front of the array
firstCar.shift();
console.log(firstCar);

//this give the index number of the selected element in the array
firstCar.indexOf("Japan");

//check if the index value returns -1. If it is -1, it means the element is not in the array
if (firstCar.indexOf("Japan") != -1) {
    console.log("This car is from Japan");
} else {
    console.log("Car is not from Japan");
}
*/

// Objects section

// Creating an object literal
/*
var mama = {
    firstName: "Mama",
    lastName: "Asiedu",
    birthYear: 1979,
    countryResident: "Ghana",
    isMarried: false
};

// Logging to the console using first dot notation and then square brackets
console.log(mama.firstName);
console.log(mama["firstName"]);

// Inserting the variable in square bracket to retrieve value of countryResident key
var a = "countryResident";
console.log(mama[a]);

//Changing object values using both notations
mama.lastName = "Yeaboah";
mama["birthYear"] = 1989;

console.log(mama);

// This is a different way to declare an object
var yaw = new Object();
yaw["firstName"] = "Yaw";
yaw["lastName"] = "Ofori";
yaw.birthYear = 1983;
yaw.countryResident = "Ghana";
yaw["isMarried"] = true;

console.log(yaw);

*/



// Objects and methods

/*
//First version of method
var mamasayaa = {
    firstName: "Mama-Sayaa",
    lastName: "Baffour",
    birthYear: 1985,
    countryResident: "Ghana",
    isMarried: false,
    pets: ["Mister wiskers", "Fluffy"],
    calculateAge: function() {
        return 2017 - this.birthYear;
    }
};
//display pets to the console
console.log(mamasayaa.pets);

//display age using the calculate age method
//console.log(mamasayaa.calculateAge(1960));

//display age via the age in the object
console.log(mamasayaa.calculateAge());

//Assign age to 'mamasayaa' object
var age = mamasayaa.calculateAge();
mamasayaa.age = age;
console.log(mamasayaa);

*/

//Second version of method
/*
var mamasayaa = {
    firstName: "Mama-Sayaa",
    lastName: "Baffour",
    birthYear: 1985,
    countryResident: "Ghana",
    isMarried: false,
    pets: ["Mister wiskers", "Fluffy"],
    calculateAge: function() {
        this.age = 2017 - this.birthYear;
    }
};

console.log(mamasayaa);
<<<<<<< HEAD
>>>>>>> origin/master
=======
}
>>>>>>> parent of cd0e81c... Add for loop with a continue statement.



<<<<<<< HEAD */
/* LOOPS */

/*

//FOR loops

for (var i = 0; i < 10; i++) {
    console.log(i);
} 

var peopleNames = ["Kwasi", "Kofi", "Kwame", "Kwabena", "Yaw"];

for (var i = 0; i < peopleNames.length; i++) {
    console.log(peopleNames[i]);
}

/* code challenge */

/*
for (var i = peopleNames.length - 1; i >= 0; i--) {
    console.log(peopleNames[i]);
}
*/

//WHILE  loops
/*
var peopleName = ["Adwoa", "Abena", "Mama", "Mama-See-Waa"];

var i = 0;
while(i < peopleName.length) {
    console.log(peopleName[i]);
    i++;
}

for (var i = 1; i <= 5; i ++) {
    console.log(i);

    if (i === 3) {
        break;
    }
<<<<<<< HEAD
}

for (var i = 1; i <= 5; i ++) {
    
    if (i === 3) {
        continue;
    }
    console.log(i);
}
=======
=======
>>>>>>> origin/master */

/* Coding challenge */

var yearsBirth = [1978, 2010, 1982, 1975];
/*
var peeps = [];

for (var i = 0; i < yearsBirth.length; i++) {
    peeps[i] = 2017 - yearsBirth[i];
}

for (var i = 0; i < peeps.length; i++) {
    if (peeps[i] >= 18 ) {
        console.log("person " + (i + 1) + " aged "+ peeps[i] + " and is of full age" );
    } else {
        console.log("person " + (i + 1) + " aged "+ peeps[i] + " and is not of full age" );
    }
} */
