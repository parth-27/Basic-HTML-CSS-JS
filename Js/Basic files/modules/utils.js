// exporting the function.
// modules have their own scopes.

const last = "Patel";
export const middle = "N";
// last can be used in only utils.js  file only if we don't export it.
export function returnHi(name){
    return `Hi ${name} ${middle} ${last}`;
}

// Named Exports - we can have as many as we want.
export {last};

// Default Exports 
const person = {
    name : "scott",
    age : 25,
}

export default person;

// Named Export you must what they have been exported as.
// Default Export you can import them with any name we want as it will one per file.


export const dog = "Scobby";
export const food = "Pizza";

export function eat(){
    console.log("I like Pizza");
}