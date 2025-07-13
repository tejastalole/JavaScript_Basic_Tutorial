// JavaScript Program to Generate Random Number in Given Range


function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // (0.55 * (40 - 20 + 1) + 20))
}                                                             // (0.55 * (21) + 20)
                                                              // (0.55 * 41)
                                                              // (22.55) 
                                                              // (22)   

let min = 20;
let max = 40;

let randomNumber = generateRandomNumber(min, max)
console.log(`Random Number ${min} between ${max} is ${randomNumber}`)