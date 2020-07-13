function wait(ms = 0) {
	return new Promise(resolve => {
		setTimeout(resolve, ms);
	});
}

async function destroyPopup(popup) {
	popup.classList.remove('open');
	await wait(1000);

	// remove the popup.
	popup.remove();		// it will not delete the popup compeletly.
	console.log(popup);
	popup = null;	// it will delete the popup compeletly.
	console.log(popup);
}

function ask(options) {
	return new Promise(async function (resolve) {
		// first we need to create a popup.
		// we are using createElement and not string method because its easy to add eventListener in this manner.
		const popup = document.createElement('form');
		popup.classList.add('popup');
		popup.insertAdjacentHTML('afterbegin',
			`<fieldset>
				<label>${options.title}</label>
				<input type="text" name="input"></input>
				<button type="submit">Submit</button>
			</fieldset>
		`);


		// check if user want a cancel button.
		if (options.cancel) {
			const skipButton = document.createElement('button');
			skipButton.type = 'button';
			skipButton.textContent = "Cancel";
			popup.firstElementChild.appendChild(skipButton);
			//  listen for a click on the cancel button.
			skipButton.addEventListener('click', function () {
				resolve(null);
				destroyPopup(popup);
			}, { once: true });		// listening only once.
		}

		// listen for the submit events for the intput.
		popup.addEventListener('submit', function (e) {
			e.preventDefault();
			resolve(e.target.input.value);

			// remove it from dom entirely.
			destroyPopup(popup);

		}, { once: true });	// only listen for the submit event once.


		// when someone submit than resolve the data from the input.

		// insert the popup in the DOM.
		document.body.appendChild(popup);

		// put a timeout before we add open class.
		await wait(100);
		popup.classList.add('open');
	});
}


// select all the buttons that have questions.

async function askQuestion(e) {
	const button = e.currentTarget;
	const cancel = 'cancel' in button.dataset;

	const answer = await ask({
		title: button.dataset.question,
		cancel,
	});
	console.log(answer);
}

const buttons = document.querySelectorAll('[data-question]');
buttons.forEach(button => button.addEventListener('click', askQuestion));



const questions = [
	{ title: 'What is your name?' },
	{ title: 'What is your age?', cancel: true },
	{ title: 'What is your dogs name?' },
];

async function asyncMap(array, callback) {
	// make an array to store our results
	const results = [];
	// loop over our array
	for (const item of array) {
		results.push(await callback(item));
	}
	// when we are done the loop, return it!
	return results;
}

async function go() {
	const answers = await asyncMap(questions, ask);
	console.log(answers);
}

go();

  // async function askMany() {
  //   for (const question of questions) {
  //     const answer = await ask(question);
  //     console.log(answer);
  //   }
  // }

  // askMany();