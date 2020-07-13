//method is a function that belongs to a class.

// Math.max() returns -infinity as an output without any arguments in it.
// parseFloat() takes input a string and gives output a floating point number. Same with parseInt() function.

// Function Definition
// here taxRate have default value equal to 0.13
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) 
{
    // this is the function body
    console.log('Running Calculate Bill!!');
    const total = billAmount + billAmount * taxRate + billAmount * tipRate;
    return total;
}
  
// Function Call. Or **Run**
const total = 500;
const taxRate = 0.3;
// const myTotal = calculateBill(total, taxRate);
  
// Function Definition
function sayHiTo(firstName) {
    return `Hello ${firstName}`;
}
  
// const greeting = sayHiTo('Wes');
// console.log(greeting);
  
function doctorize(name) {
    return `Dr. ${name}`;
}
  
function yell(name = 'Silly Goose') {
    return `HEY ${name.toUpperCase()}`;
}
  

// when we passed undefined it will take the taxRate the default value provided.
const myBill4 = calculateBill(100, undefined, 0.2);
console.log(myBill4);