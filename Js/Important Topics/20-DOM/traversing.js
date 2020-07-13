// Traversing means moving up down in the web page.

// Difference between node and element.
// Every node is a element but reverse is not true.
const parth = document.querySelector('.parth');

// elements
console.log(parth.children);
console.log(parth.previousElementSibling);
console.log(parth.nextElementSibling);
console.log(parth.firstElementChild);
console.log(parth.lastElementChild);
console.log(parth.parentElement);

// nodes
console.log(parth.childNodes);


const p = document.createElement('p');
p.textContent = 'I am a Paragraph';
document.body.appendChild(p);

p.remove();

console.log(p);

// we can still add the remove element if we have created in the js file.
document.body.appendChild(p);


