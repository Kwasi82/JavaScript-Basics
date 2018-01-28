/*

// function constructor method

var kwasi = {
    name: 'Kwasi',
    yearOfBirth: 1982,
    job: 'Developer'
};

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

//calculateAge in prototype of Person

Person.prototype.calculateAge = 
function () {
    console.log(2018 - this.yearOfBirth);
};

// Provide lastname to all instances of Person via inheritance
Person.prototype.lastname = "Asiedu";

//This is a sample of instanciation 
var kwasi = new Person('Kwasi', 1982, 'Developer');
var adwoa = new Person('Adwoa', 1984, 'Digital Marketer');

//Call calculateAge method
kwasi.calculateAge();
adwoa.calculateAge();

console.log(kwasi.lastname);
console.log(adwoa.lastname);

*/

/*
//Object.create method

//This is the prototype object
var personProto = {
    calculateAge: function () {
        console.log(2018 - this.yearOfBirth);
    }
};

// Option one for creating an instance of personProto
var kwasi = Object.create(personProto);
kwasi.name = 'Kwasi';
kwasi.yearOfBirth = 1982;
kwasi.job = 'Developer';

// Option two for creating an instance of personProto
var adwoa = Object.create(personProto, {
    name: { value: 'Adwoa'},
    yearOfBirth: { value: 1984 },
    job: { value: 'Digital Marketer'}
});

*/

// Primatives vs objects

/*
// Primatives
var a = 25;
var b = 47;
a = 60;
console.log(a);
console.log(b);

var object1 = {
    name: 'Kwasi',
    age: 35
};

// Objects
// object2 is a reference to object1
var object2 = object1;
object1.age = 36;

console.log(object1.age);
console.log(object2.age); 

// Functions
var age = 35;
var obj = {
    name: 'Kwasi',
    city: 'Ibadan'
};

function change(a, b) {
    a = 36;
    b.city = 'Lagos';
}

change(age, obj);

console.log(age);
console.log(obj.city);

*/

///////////////////////
// Lecture: Passing functions as arguments
/*
var years = [1823, 1963, 1743, 2006, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

//Returns the current age based on the year of birth against the current year
function  calculateAge(el) {
    return 2018 - el;
}

//Returns the true or false depending on whether age passed in is greater than 30
function isFullAge(el) {
    return el > 30;
}

//calculate the max heart rate 
function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }  
}

// Calculates ages based on years
var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(rates);
*/

//////////////////////////////////////////
// Lecture: Functions returing functions
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        // this shows a function being returned as an object
        return function (name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if ( job === 'teacher') {
        return function (name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?'); 
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

// the variable then becomes the returned function
teacherQuestion('Kwasi');
designerQuestion('Kofi');

//calling the function right away
interviewQuestion('designer')('Adwoa');
*/

//////////////////////////////////////////////////
// Lecture: IIFE
/*
// score variable not accessible outside of the function
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();
*/

// This is an Immeditately Invoked Function Expression
(function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//Passing in arguments
(function game(goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5);
})(4);