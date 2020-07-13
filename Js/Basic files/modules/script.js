// There are two types of import 
/*
    1. Named Import
    2. Default Import.
*/

// with named exports and imports there are {} with them. {} for named import and exports only.

import scott from './utils.js';     // import you default different than named imports.

import * as everthing from './utils.js';    // it will import everything from util.js with the name of everything.

import {returnHi as greet,last,middle} from './utils.js';    // for renaming the named imports use as keyword in the imports.

import {handleButtonClick} from "./handlers.js"

const name = "Parth";

console.log(greet(name),"How are you?");

console.log(last);
console.log(middle);
console.log(scott);
console.log(everthing);
console.log(everthing.default); // default from everthing.


const but = document.querySelector('button');

but.addEventListener('click',handleButtonClick);