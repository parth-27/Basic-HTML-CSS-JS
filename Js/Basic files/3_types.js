/* eslint-disable*/

// SNOBNUS 
/*
1. String
2. Number
3. Object
4. Boolean
5. Null
6. Undefined 
7. Symbol
*/

//-----------1.String
const name = 'shirley';
const last = `shetia`;

// prefer to use back text.
const sentence = `she's hot`;   // instead of this \ (escape character) can be used.

console.log(sentence);
console.log('she\'s is hot');   // using escape character.

// you can't add a variable with the string with the help of '+' sign
console.log(`${name} is very hot`);     // usage of back text. Interpolation.

const sentence2 = `chrissy
is
my
favorite`;
console.log(sentence2);


//---------------2.Number
const a = 5;

console.log(a);
console.log(typeof(a));     // for knowing the type of variable.

console.log("5" * "5");
console.log("5" / "5");
console.log("5" - "5");
console.log("5" + "5");     // concatenation of string while other operations are done after converting into the numbers from string.

console.log(100**2);        // same as we have in python.
console.log(typeof(NaN));   // typeof Nan is a number.

//----------------3.objects.
const person = {
    first : 'parth',
    middle : 'naresh',
    last : 'patel',
    age : 20
};

console.log(person);
console.log(person.age);

// when we have not assigned anything to a variable then the default type is undefined.
let fuck;   // fuck is undefined here.
console.log(fuck);

// when we delete a value from a variable then it consist of null type or we need to assigned the variable to null.
fuck = null;
console.log(fuck);


//----------Boolean.

const age = 20 > 19;
console.log(age);


// === equals check the type and number on the both side
// == just check whether the value on both sides is equal or not.

console.log("10" == 10);    // check the value 10 and 10 are equal so the answer will be true.
console.log("10" === 10);   // check the number 10 and string 10 both are not equal so the answer will be false.