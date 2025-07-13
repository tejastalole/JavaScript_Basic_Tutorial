// JavaScript Program to Check Prime Number

function checkPrime(num) {
    
    if (num <= 1) {                          
        return false;                    // If num is 0, 1, or negative then it is false
    } else {
        for (let i = 2; i < num; i++) {  // Starts checking divisibility from 2 up to num - 1   
            if (num % i === 0) {            
                return false;            // If num divides evenly by any i then it's false
            }
        }
    return true;                         // If loop completes without finding any divisor return true
    }
}

let n = 7;

if(checkPrime(n)) {
    console.log("Prime");
} else {
    console.log("Not Prime");
}
