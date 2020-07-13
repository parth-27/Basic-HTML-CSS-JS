const pic = document.querySelector('.nice');
pic.classList.add('cool');
// pic.classlist.remove('cool');
console.log(pic.classList);

function toggleRound()
{
    pic.classList.toggle('round');
}

pic.addEventListener('click',toggleRound);

// assigning attribute to the selected pic.
pic.alt = "Cute girl";  // setter
console.log(pic.alt);   // getter
pic.width = 300;

console.log(pic.naturalWidth);  // when your pic is from the net the display will be 0 becuase it need to first download it.

window.addEventListener('load',function(){
    console.log(pic.naturalWidth);  // use this when you are using pic from the internet so you will get the correct output.
});


console.log(pic.getAttribute('alt'));   // getting the attribute
pic.setAttribute('alt','sexy girl');    // setting the attribute.


// data attributes can be used to make custom attributes.
// console.setAttribute('chrissy','sexy girl');
// the difference between setAttribute and . is that setAttribute allows to set of Non Standard Attribute also.


const custom = document.querySelector('.custom');
console.log(custom)
console.log(custom.dataset);

custom.addEventListener('click',function(){
    alert(`Hey ${custom.dataset.name} ${custom.dataset.last}`);
})