// function constructor

var kwasi = {
    name: 'Kwasi',
    yearOfBirth: 1982,
    job: 'Developer'
};

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function () {
        console.log(2018 - this.yearOfBirth);
    }
}

//This is a sample of instanciation 
var kwasi = new Person('Kwasi', 1982, 'Developer');
