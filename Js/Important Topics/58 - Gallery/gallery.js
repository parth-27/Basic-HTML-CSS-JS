function Gallery(gallery)
{
	if (!gallery) {
		throw new Error('No Gallery Found');
	}

	// select the elements that we need.
	const images = Array.from(gallery.querySelectorAll('img'));

	const modal = document.querySelector('.modal');

	const prevButton = modal.querySelector('.prev');
	const nextButton = modal.querySelector('.next');
	let currentImage;

	function openModal()
	{
		console.log("Opening Modal");

		// check if modal is already open
		if (modal.matches('.open')) {
			console.log("Modal already open");
			return; 	// stop the function from running.
		}
		modal.classList.add('open');


		// Event listeners to be bound when we open the modal.
		window.addEventListener('keyup',callHandleKeyUp);
		modal.addEventListener('click',handleImageClickOutside);
		nextButton.addEventListener('click',showNextImage);
		prevButton.addEventListener('click',showPrevImage);
		
	}

	function closeModal(){
		modal.classList.remove('open');

		// TODO : add event listener for clicks and keyboard.
		window.removeEventListener('keyup',callHandleKeyUp);
		prevButton.removeEventListener('click',showPrevImage);
		modal.removeEventListener('click',handleImageClickOutside);
		nextButton.removeEventListener('click',showNextImage);
	}

	function handleImageClickOutside(e){
		if (e.target===e.currentTarget) {
			closeModal();
		}
	}

	function callHandleKeyUp(event){
		if (event.key === 'Escape') {
			return closeModal();
		}

		if (event.key === 'ArrowRight') {
			return showNextImage();
		}

		if (event.key === 'ArrowLeft') {
			return showPrevImage();
		}
	}



	function showNextImage(){
		showImage(currentImage.nextElementSibling || gallery.firstElementChild);
	}

	function showPrevImage(){
		showImage(currentImage.previousElementSibling || gallery.lastElementChild);
	}

	function showImage(im){
		if (!im) {
			console.info("There is no image to show");
			return;
		}


		// update the modal with the info.
		modal.querySelector('img').src = im.src;
		modal.querySelector('h2').textContent = im.title;
		modal.querySelector('figure p').textContent = im.dataset.description;	// for accessing the data-* property use .data.* 
		currentImage = im;
		console.log(im);
		openModal();
	}

	function handleImageClick(e)
	{
		showImage(e.currentTarget);
	}


	// event listeners
	images.forEach(image => image.addEventListener('click',handleImageClick));
	images.forEach(image => image.addEventListener('keyup',e=>{
		if (e.key === 'Enter') {
			showImage(e.currentTarget);
		}
	}));
	modal.removeEventListener('click',handleImageClickOutside);
	
}

// use it on the page.

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));