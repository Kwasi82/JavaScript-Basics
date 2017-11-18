///////////////////////////////////////
// Lecture: Hoisting

//FUNCTIONS

/*

//Function declaration
function knowAge (year) {
    console.log(2017 - year);
}

knowAge(1982);

//Function expression

//This does not work even with hoisting as the functionn needs to be declared.
//ageToRetire(1928);

var ageToRetire = function (year) {
    console.log(70 - (2017 - year));
}

//This works in function expression
ageToRetire(1982);

//VARIABLES

//returns undefined
console.log(age);
var age = 35;

function test () {
    console.log(age); // this returns undefined
    var age = 38;
    console.log(age); // this returns 38
}
test();
console.log(age); // this returns 35

*/







///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c); // Scoping chain goes up to var a
    }
}


*/

// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third();
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}

*/


///////////////////////////////////////
// Lecture: The this keyword

getAge(1982);

function getAge(year) {
    console.log(2017 - year);
    console.log(this);
}







