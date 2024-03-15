console.log("Hello! My name is Nikobot.");
console.log("I was created in 2024.");

let name = prompt("Please, remind me your name.");

console.log("What a great name you have, " + name + "!");
console.log("Let me guess your age.");
console.log("Enter remainders of dividing your age by 3, 5 and 7.");

let remainder3 = prompt("Enter the number of your age divided by 3");
let remainder5 = prompt("Enter the number of your age divided by 5");
let remainder7 = prompt("Enter the number of your age divided by 7");
let age = (remainder3 * 70 + remainder5 * 21 + remainder7 * 15) % 105;

console.log("Your age is " + age + " that's a good time to start programming!");