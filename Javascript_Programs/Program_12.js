// JavaScript Program to Find Largest of Three Numbers

let num1 = 85;
let num2 = 56;
let num3 = 76;

if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is Greater than ${num1} and ${num3}`);
} else if (num3 > num1 && num3 > num2) {
    console.log(`${num3} is Greater than ${num1} and ${num2}`);
} else {
    console.log(`${num1} is Greater than ${num2} and ${num3}`);
}