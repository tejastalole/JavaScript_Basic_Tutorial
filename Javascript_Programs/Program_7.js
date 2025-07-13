// JavaScript Program to Find the Sum of Natural Numbers


function sumOfNaturalNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) 
        sum += i;  // sum = sum + i
    return sum;
}
const n = 5;
console.log(sumOfNaturalNumbers(n));