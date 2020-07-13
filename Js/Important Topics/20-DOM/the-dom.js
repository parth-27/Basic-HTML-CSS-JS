//Nodelist and Array are two different things in JavaScript.

// document.queryselectorAll() will give all the possible elements from the web page.
const p = document.querySelector('p');
console.log(p);

// this will select the first image in its path.
const img = document.querySelector('.item img');
console.log(img);

// for selecting the second image
const item2 = document.querySelector('.item2');
// selecting element from a element.
const imageInsideItem = item2.querySelector('img');
// const img2 = document.querySelector('.item2 img'); this will select directly image from the class item2
console.log(imageInsideItem);


// we can use other methods of the document object like getElementById,etc


const heading = document.querySelector('h2');
// here heading is an object
console.dir(heading);   // use it to show the properties of the heading object.

// using properties of the object.
heading.textContent = 'Chrisyy is super cute!!'     // this will change the content on the webpage.
console.log(heading.textContent);


// difference between textContent and innerText
// textContent will all the data inside that element while innerText will give you only the human readable data.

const itm2 = document.querySelector('.item2');
//itm2.insertAdjacentElement('afterbegin','fuck you bitch');
console.log(itm2.textContent);
console.log(itm2.innerText);