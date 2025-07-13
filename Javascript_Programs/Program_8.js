// JavaScript Program to Check Pallindrome Number

// function pallindromeNum(num) {
//     let numstr = num.toString();
//     let revstr = numstr.split('').reverse().join('');
//     return numstr == revstr;
// }

// console.log(pallindromeNum(123));


function pallindrome(n) {
    let start = n.toString()
    let end = start.split('').reverse('').join('');
    
    if (start == end) {
        return("Pallindrome")
    } else {
        return("Not Pallindrome"); 
    }
}
console.log(pallindrome(123));
