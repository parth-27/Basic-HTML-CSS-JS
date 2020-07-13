// for selecting class we need .classname and for id we need #idname in the querySelector. and for just normal tag name for any element of the page.

// select the elements on the page, canvas , shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext("2d");

const shakebutton = document.querySelector('.shake');
const AMOUNT = 10;

// setup canvas for drawing.


// make a variable called height and width from the same properties of our canvas.
// It is known as destructing. here taking width property of canvas and put it into width variable and same of height
const {width} = canvas; // destructing.
const {height} = canvas;


// create random x and y starting points on the canvas.
let x = Math.floor(Math.random()*width);
let y = Math.floor(Math.random()*height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;


let hue = Math.floor(Math.random()*361);
ctx.strokeStyle = `hsl(${hue},100%,50%)`;

// just to plot a random point on the canvas.
ctx.beginPath();    // start the drawing.
ctx.moveTo(x,y);    // starting of the point
ctx.lineTo(x,y);    // ending point
ctx.stroke();


//write a draw function
// we can also use destructing in the function declarations.
function draw({key})
{
    console.log(key);
    ctx.beginPath();
    ctx.moveTo(x,y);

    // changin the color
    hue += 5;
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;

    // if (key.includes('Right')) 
    // {
    //     x += AMOUNT;    
    // }
    // else if (key.includes('Left')) 
    // {
    //     x -= AMOUNT;
    // } 
    // else if (key.includes('Up')) 
    // {
    //     y -= AMOUNT;
    // } 
    // else 
    // {
    //     y += AMOUNT;
    // }

    // other method using switch statement.


    switch(key)
    {
        case 'ArrowUp':
            y -= AMOUNT;
            break;
        case 'ArrowDown':
            y += AMOUNT;
            break;
        case 'ArrowLeft':
            x -= AMOUNT;
            break;
        case 'ArrowRight':
            x += AMOUNT;
            break;
        default:
            break;
    }

    
    ctx.lineTo(x,y);
    ctx.stroke();
}


// handler for the keys.

function handleKey(e)
{   
    // stopping array keys from scrolling the page.
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({key:e.key});      // passing object in the draw function
    }
}

// clear/shake function.

function clearCanvas()
{
    canvas.classList.add('shake');
    
    ctx.clearRect(0,0,width,height);    // remove 00 to width and height.

    // removes the class of shake after the animation to use it again.
    canvas.addEventListener('animationend',function(){
        canvas.classList.remove('shake');
    },{once:true});

    // if the once is true then the addEvenlistener removes the listner for us automatically.
}
shakebutton.addEventListener('click',clearCanvas);


// listen for arrow keys.
window.addEventListener('keydown',handleKey);