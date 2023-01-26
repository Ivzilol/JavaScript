class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    };
}

const myPerson = new Person('Ivaylo', 'Alichkov', 42, 'ivo_ali@abv.bg')
const newPerson = new Person('Peter Marinov age: 18, email: pesho18@abv.bg')
console.log(myPerson.toString())

module.exports = Person;