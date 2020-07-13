// creating a div, add class wrapper to it and then add it to the body.
const mydiv = document.createElement('div');
mydiv.classList.add('wrapper');
document.body.appendChild(mydiv);

// create an unordered list and put them in the created class.
const ul1 = document.createElement('ul');

const li1 = document.createElement('li');
li1.textContent = "One";
const li2 = document.createElement('li');
li2.textContent = "Two";
const li3 = document.createElement('li');
li3.textContent = "Three";

ul1.insertAdjacentElement('afterbegin',li2);
ul1.insertAdjacentElement('afterbegin',li1);
ul1.insertAdjacentElement('beforeend',li3);
mydiv.appendChild(ul1);


//------

const img = document.createElement('img');
img.src = "/home/pal/Desktop/FrontEnd/Js/47383623541_968dc2fb47_h.jpg"
img.classList.add("cute");
img.width = 250;
img.alt = "cute babe";
mydiv.appendChild(img);
//document.body.insertAdjacentElement('beforeend',myImage);


//--------

const str = `
    <div> 
        <p class = "p1"> Hey I am Paragraph Number 1</p>
        <p class = "warning"> Hey I am Paragraph Number 2</p>
    </div>
`;

const ule = document.querySelector('ul');
ule.insertAdjacentHTML('beforebegin',str);

const rp = document.querySelector('.p1');
rp.remove(); 

function generatePlayerCard(name,age,height)
{
    return `
        <div class="playerCard">
        <h2>${name} - ${age} </h2>
        <p>There height is ${height} and age is ${age} years old.
        <button class="delete" type="button">&times; Delete</button>
        </p>
        </div>
    `;
}


// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
// Have that function make 4 cards
let cardsHTML = generatePlayerCard('wes', 12, 150);
cardsHTML += generatePlayerCard('scott', 12, 150);
cardsHTML += generatePlayerCard('kait', 12, 150);
cardsHTML += generatePlayerCard('snickers', 12, 150);

cards.innerHTML = cardsHTML;
mydiv.insertAdjacentElement('beforebegin', cards);
// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make out delete function
function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  // buttonThatGotClicked.parentElement.remove();


  // this will search by the class and the above method will create error sometimes.
  buttonThatGotClicked.closest('.playerCard').remove();
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));
