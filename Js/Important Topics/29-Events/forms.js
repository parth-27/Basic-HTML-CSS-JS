const link = document.querySelector('.link');

// preventDefault are mostly used for validation that the user is login or not and he/she must login first.

link.addEventListener('click',function()
{
    event.preventDefault();     // it will stop the link to redirect.
    const changePage = confirm("This Website might Harm Your Computer!!, Do you still want to visit it??");

    // if we confirm it then it will redirect to the link.
    if (changePage) 
    {
        // enabling the link
        window.location = event.currentTarget.href;    
    }

    console.log("You have clicked the link");
});
// Disabling a link or preventing a link from its behaviour


// selecting elements from its atributes.
// [] is used for attributes
const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit',function(e){
    
    const nam = event.currentTarget.name.value;

    // nam.includes() is case sensitive.
    // for case insensitivity we will use regex.

    if (nam.includes('Setia')) 
    {
        alert('Sorry Your Not Welcome Here')
        e.preventDefault();
    }
});

//---------

function logevent(event)
{
    console.log(event.type);
    console.log(event.currentTarget.value);
}

signupForm.name.addEventListener('keyup',logevent);
signupForm.name.addEventListener('keydown',logevent);
signupForm.name.addEventListener('focus',logevent);
signupForm.name.addEventListener('blur',logevent);      // blur when we are not on that field and focus when we are on that field.


const photo = document.querySelector('.pic');

function handlePhotoClick(event)
{
    if (event.type == 'click' || event.type == 'Enter') {
        console.log("You clicked a photo");
    }
    console.log(event.key);
}

photo.addEventListener('click',handlePhotoClick);

// if we press enter while tabing through photo we need a keyup event.

photo.addEventListener('keyup',handlePhotoClick);   // for the enter key

