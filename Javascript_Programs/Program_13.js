// JavaScript Program to Print Numbers From 1 to n, Replacing Mltiples of 3 With "Fizz", Multiples of 5 With "Buzz", and Multiples of Both 3 and 5 With "FizzBuzz".


let arr = [];

for (let n = 0; n < 100; n++) {
    if (n % 3 === 0 && n % 5 === 0) {
        arr.push("FizzBuzz");
    } else if (n % 3 === 0) {
        arr.push("Fizz");
    } else if (n % 5 === 0) {
        arr.push("Buzz");
    } else {
        arr.push(n);
    }
}

console.log(arr)
