const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.waists');

function handleClick() {
  console.log('🐛 IT GOT CLICKED!!!');
}

const hooray = () => console.log('HOORAY!');

butts.addEventListener('click', function() {
  console.log('Im an anon!');
});
coolButton.addEventListener('click', hooray);

butts.removeEventListener('click', handleClick);

// Listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function handleBuyClick(event)
{

    console.log("You clicked a button!");
    const button = event.target;

    // console.log(button.textContent);
    // console.log(parseFloat(event.target.dataset.price)); 


    // event.target is the thing that is actually clicked i.e the number on the button or something else.
    // event.currentTarget is the thing that fired the eventListener.

    // mostly we uesd event.currentTarget 
    // we use event.target to know if the element inside a tag is clicked or the tag is clicked.

    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.target === event.currentTarget);

    // stop this event from bubbling up or stop Propogations
    //event.stopPropagation();
}

buyButtons.forEach(function(but){
    but.addEventListener('click',handleBuyClick);
});


window.addEventListener('click',() => {
    console.log("You clicked the window!!");
    console.log(event.target);
    //event.stopPropagation(); // so the handleBuyClick will never run if we stopPropogation in capturing phase.
},{capture:true});

// capture means from top to bottom clicking.
// if we want to stop the bottom event then write stopPropagation method.

// third argument of addEventListener is for deciding bubbling up or Capturing Phase.

//  when we click on the button the window object and the button object both get fired. This is known as Propogation.
// Propogation.

// Bubbling Phase and Capturing Phase are opposite events.


const pic = document.querySelector('.photo');
    // mouseenter


pic.addEventListener('mousemove',function(e) {

    //console.count(e.currentTarget);
    console.log(e.currentTarget);
    console.log(this);  // avoid using in callback functions.
    // this is always equal to the thing that is left of the dot.
});