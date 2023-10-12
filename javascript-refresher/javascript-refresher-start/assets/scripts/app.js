/* Import & Export */

// import { apiKey } from "./util";

// import apiKey from "./util";

import * as utils from "./util";

console.log("=== Import & Export: ===");
console.log(utils);
console.log(utils.default);
console.log(utils.apiKey);
console.log(utils.abc);

/* Variables */

console.log("=== Variables: ===");

let userMessage = "Hello World!";
const message = "We can't reassigned const variable";

console.log(userMessage);
console.log(message);

console.log("=== Functions: ===");

function math(a, b, c){
    return a * b / c;
}

console.log(math(12, 32, -4));

/* Objects */

console.log("=== Objects: ===");

const user = {
    name: 'Oskar',
    age: 23,
    greet() {
        console.log('Hello');
        console.log("I'm " + this.name)
    }
};

console.log(user);
console.log(user.name);
user.greet();

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hi!");
    }
}

const user1 = new User("Manuel", 36);
console.log(user1);
user1.greet();

/* Arrays */

console.log("=== Arrays: ===");

const hobbies = ["Sports", "Music", "Games"];
console.log(hobbies);

hobbies.push("Guitar");
console.log(hobbies);

const index = hobbies.findIndex((item) => item === "Sports");

console.log(index);

const editedHobbies = hobbies.map((item) => item + "!");

console.log(editedHobbies);

/* Destructuring */

console.log("=== Destructuring: ===");

//const userNameData = ["Oskar", "Pasko"];

//const firstName = userNameData[0];
//const lastName = userNameData[1];

const [firstName, lastName] = ["Oskar", "Pasko"];

console.log(firstName);
console.log(lastName);

/* The Spread Operator */

console.log("=== The Spread Operator: ===");

const hobbies2 = ["Sport", "Music"];

const user2 = {
    name: "Oskar",
    age: 23
};

const newHobbies = ["Reading"];

const mergeHobbies = [...hobbies2, ...newHobbies];

console.log(mergeHobbies);

const extendedUser = {
    isAdmin: true,
    ...user2
}

console.log(extendedUser);

/* Functions as Values */

console.log("=== Functions as Values: ===");

function handleTimeout(){
    console.log("Timed out!");
}

setTimeout(handleTimeout, 2000);

/* References vs Primitive Values */

console.log("=== References vs Primitive Values: ===");

let primitive = 'Hello';