const terms = document.querySelector('.terms-and-conditions');
const button = document.querySelector('button');

function obCallBack(payload)
{
    if(payload[0].intersectionRatio === 1)
    {
        button.disabled = false;
        // stop observing.
        ob.unobserve(terms.lastElementChild);
    }
    else
    {
        button.disabled = true;
    }
}

const ob = new IntersectionObserver(obCallBack,{
    root:terms,
    threshold:1,    // display only when ratio is 1
});

ob.observe(terms.lastElementChild); // here it is hr element.