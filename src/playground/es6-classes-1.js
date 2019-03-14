class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi. I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }

        return description;
    }
}

const me = new Person('Steve L', 37);
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Person();
console.log(other.getGreeting());
console.log(other.getDescription());

const myStudent = new Student('Bob Jones', 26, 'Computer Science');
console.log(myStudent);
console.log(myStudent.hasMajor());

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    } 

    getGreeting() {
        if (this.homeLocation) {
            return super.getDescription() + ` I\'m visiting from ${this.homeLocation}`;
        }

        return super.getDescription();
    }
}

const myTraveller = new Traveller('Travel Sick', 13, 'Nottingham');
console.log(myTraveller);
console.log(myTraveller.getGreeting());