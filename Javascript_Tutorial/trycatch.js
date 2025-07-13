// try catch error handling in javascript


try {
    let res1 =  notDefinedVar / 10;  // it checks notDefinedVar/10 condtion is false execute catch block 
    console.log(res1);
} catch (error) {
    console.log("An error occured", error.message);
}

let definedVar = 50
try {
    let res2 = definedVar / 10;   // it checks definedVar/10 condtion is true execute try block
    console.log(res2);
} catch (error) {
    console.log("An error occured", error.message);
    
}
