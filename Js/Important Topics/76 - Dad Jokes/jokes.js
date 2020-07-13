const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke p');
const loader = document.querySelector('.loader');

const buttonText = [
	'Ugh.',
	'🤦🏻‍♂️',
	'omg dad.',
	'you are the worst',
	'seriously',
	'stop it.',
	'please stop',
	'that was the worst one',
];


async function fetchJoke() {

	// turn on the loader
	loader.classList.remove('hidden');
	jokeButton.classList.add('hidden');
	// here we need to add headers to the link. This link support 3 headers --> text,html and json.
	const response = await fetch("https://icanhazdadjoke.com", { headers: { Accept: 'application/json' } });
	const joke = await response.json();
	//console.log(response);
	loader.classList.add('hidden');
	jokeButton.classList.remove('hidden');
	return joke;
}

function randomItemFromArray(arr, not) {
	const item = arr[Math.floor(Math.random() * arr.length)];
	if (item === not) {
		return randomItemFromArray(arr, not);
	}
	return item;
}

async function handleClick() {
	const { joke } = await fetchJoke();	// destructing joke into var joke.
	jokeHolder.textContent = joke;
	jokeButton.textContent = randomItemFromArray(buttonText, jokeButton.textContent);
}

jokeButton.addEventListener('click', handleClick);
fetchJoke();