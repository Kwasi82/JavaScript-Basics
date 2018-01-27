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