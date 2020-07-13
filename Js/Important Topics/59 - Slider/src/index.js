function Slider(slider){
	// check if someone has pass slider

	if (!(slider instanceof Element)) {
		throw new Error("No Slidder Pass");
	}

	// create var for working with the slidder.
	let prev;
	let current;
	let next;

	// select the elements needed for the slider.
	const slides = slider.querySelector('.slides');
	const prevButton = slider.querySelector('.goToPrev');
	const nextButton = slider.querySelector('.goToNext');
	
	function startSlider(){
		current = slides.querySelector('.current') || slides.firstElementChild;
		prev = current.previousElementSibling || slides.lastElementChild;
		// nextSibling gives a node and node can be a text or an ELement while NextElementSlibing gives the next element.
		next = current.nextElementSibling || slides.firstElementChild;
	}

	function applyClasses(){
		current.classList.add('current');
		prev.classList.add('prev');
		next.classList.add('next');
	}

	function move(direction){
		// first strip all the classes off the current stides
		const classesToRemove =['prev','current','next'];
		prev.classList.remove(...classesToRemove);
		current.classList.remove(...classesToRemove);
		next.classList.remove(...classesToRemove);

		if (direction === 'back') {
			// using destrcuting to switch variables.
			[prev,current,next] = [
				// get the prev slide and if not there than get the last slide of the slider
				prev.previousElementSibling||slides.lastElementChild
				,prev
				,current
			];
		}
		else{
			[prev,current,next] = [
				current,
				next,
				// get the next slide and if not present than the loop around and get the firstChild.
				next.nextElementSibling||slides.firstElementChild];
		}
		applyClasses();
	}

	startSlider();	// when this slider is created run the this function i.e constructor.
	applyClasses();

	// Event Listeners
	console.log(nextButton);
	prevButton.addEventListener('click',() => move('back'));	// we need to pass an argument than use run arrow function
	nextButton.addEventListener('click',move);	// we need to pass reference

	window.addEventListener('keyup', (e) => {
		e.preventDefault();
		if (e.key === "ArrowLeft") {
			return move('back');
		}

		if (e.key === "ArrowRight") {
			return move('forard');
		}
	});
}

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));
