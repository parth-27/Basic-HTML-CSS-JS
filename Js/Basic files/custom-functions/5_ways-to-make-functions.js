/*disable-eslint*/

// javascript functions are known as first class citizen
/* The meaning of the above sentence is that Js functions are values in themselves, 
they can be stored in variables and can be passed to other functions.*/


// Javascript hoists functions which are created using function keyword like Regular Function declaration. Js doesn't hoist Function expression.
// We can run a function before it is defined with the help of hoisting.

// -----------------Regular Function declaration.
// function doctorize(firstname){
//     return `Dr. ${firstname}`;
// };



//----------    1.Anonymous Function   (Function without a name)
// function (firstname) {
//     return  `Dr. ${firstname}`;
// }


//----------    2.Function Expression   (Function stored in a variable.)
// const doctorize = function (firstname) 
// {   
//     // function is stored in variable doctorize.
//     return  `Dr. ${firstname}`;
// };



//----------    3.Arroy Function        (one liner, don't have scope for this,they are anonymous function)
// if only one argument then don't use parenthesis
const inchesToCM = (inches) => cm = inches * 2.54;

const add = (a,b=3) => result = a+b;



//----------    4.Returning an Object

// function makeABaby(first,last)
// {
//     // making an object named baby.
//     const baby = 
//     {
//         name : `${first} ${last}`,
//         age : 1
//     }
//     return baby;
// }

// use parenthesis when we are returning a object from a function in arrow function.

const makeABaby = (first,last) => ({name:`${first} ${last}`,age:1});
console.log(makeABaby("shirley","setia"));



//----------    5.IIFE  (Immediately Invoked/Run Function Expression.)

(function(age) {
    console.log(`she is hot at ${age}`);
})(18);     // pass argument at the last parenthesis of the function.



//----------    6.Methods   (function that lives inside an object.)

const person = {
    name : 'parth',
    crush:  'chrisyy',
    
    // normal method
    greet:function(){
        // this is important in methods.
        console.log(`hey ${this.name}`);
    },

    // short hand method.
    yellHi()
    {
        console.log(`hey ${this.crush}`);
    },

    // Arroy function
    // Arroy function have no scope for this keyword i.e they don't support this keyword.
    // it will display undefined.
    wisper:() => console.log(`heyyy how you doin ${this.crush}?`)
}
person.greet();
person.yellHi();
person.wisper();



//----------    7.CallBack Functions

// click call Back.

const button = document.querySelector('.clickMe');  // write the name of class in the parenthesis for selecting that element.
console.log(button);

function handleClick()
{
    console.log('great fucking');
}

//button.addEventListener('click',handleClick);


// passing anonymous function to evenlistener.
button.addEventListener("click",function(){
    console.log("great start");
})



// Timer Call Back.
// we can pass any function in this.
setTimeout(person.yellHi(),1000);     // 1000 ms.