function wait(ms=0){
    return new Promise(resolve => setTimeout(resolve,ms));
}

function getRandomBetween(min=50,max=150,randomNumber = Math.random()){
    return Math.floor(randomNumber*(max-min)+min);
}

//aysnc for of loop
async function draw(element){
    const text = element.textContent;
    let soFar = '';

    for (const iterator of text) {
        soFar += iterator;
        element.textContent = soFar

        // wait for sometime.
        const {typeMin,typeMax} = element.dataset;
        const amountTime = getRandomBetween(typeMin,typeMax);
        await wait(amountTime);
    }
}


// recursion.
function draw2(el){
    let index = 1;
    const text = el.textContent;
    const {typeMin,typeMax} = el.dataset;

    async function drawLetter(){
        el.textContent=text.slice(0,index);
        index++;

        // exit condition
        const amountTime = getRandomBetween(typeMin,typeMax);
        await wait(amountTime);
        if(index <= text.length) {
            drawLetter();   
        }
        
    }

    // when this function draw() runs kick off drawletter.
    drawLetter();
}



const els = document.querySelectorAll('[data-type]').forEach(draw2);