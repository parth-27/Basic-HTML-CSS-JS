const buts = document.querySelector('.butts');
const waits = document.querySelector('.waists');
// addEventListener takes events and CallBack Functions as an Argument.

/* 
Call Back Function : It is a regular function. They are passed to a method which call at a later point in time.
Call Back Function are called by eventListner and browser will take care of running that function for us.
*/

// We don't call the function but the browser will call it for us.
function handleClick()
{
    console.log("Great Clicking!!");
}

buts.addEventListener('click',handleClick);
// Anonymus function can't be removed from the Event Listner so used named functions, arrow functions,etc.
buts.removeEventListener('click',handleClick);



const hooray = () => console.log("Hey Babe How are you?!");

waits.addEventListener('click',hooray);


// listen on multiple items.
const buy = document.querySelectorAll('.buy');


function buyItem()
{
    console.log("Method for multiple buttons");
}

// buy.forEach(function(buybutton){
//     // butbutton is just a parameter passed in the forEach.
//     buybutton.addEventListener('click',buyItem);
// });


// another method for multiple listener.

function butMultipleItem(buybutton)
{
    buybutton.addEventListener('click',buyItem);
}

buy.forEach(butMultipleItem);


// another method

buy.forEach(butts = () => {
    butts.addEventListener('click',()=>{
        console.log("Using Arroy function");
    });
});