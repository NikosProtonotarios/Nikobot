console.log("Hello! My name is Nikobot");
console.log("I was created in 2024");


function remind_name() {
	let name = prompt("Please, remind me your name.");
	console.log("What a great name you have, " + name + "!");
}

function guess_age() {
	console.log("Let me guess your age.");
	console.log("Enter remainders of dividing your age by 3, 5 and 7.");

	let rem3 = prompt("by 3");
	let rem5 = prompt("by 5");
	let rem7 = prompt("by 7");

	let age = (rem3 * 70 + rem5 * 21 + rem7 * 15) % 105;

	console.log("Your age is " + age + "; that's a good time to start programming!");
}

function count() {
    let number = prompt("Until which number do I have to count?")
    let n = 0
    while (n <= number) {
        
        console.log(n + " !");
        ++n;
    } 
}

function test() {
	console.log("Let's test your programming knowledge.");
    console.log("Why do we use methods?")
    console.log("1. To repeat a statement multiple times.");
    console.log("2. To decompose a program into several small subroutines.");
    console.log("3. To determine the execution time of a program.");
    console.log("4. To interrupt the execution of a program.");
}

function end() {
    while (true) {
   let ans = prompt("choose the correct answer");
   if (ans == 2) {
       console.log("Congratulations, have a nice day!");
        break;
   } else {
       console.log("Please, try again.");
   }
        
   }
   }

remind_name();
guess_age();
count();
test();
end();