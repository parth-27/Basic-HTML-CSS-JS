// Query params start with ?i and then connected with &q, &p. First Query Params start with ?

// CORS - Crossed Origins Resource Sharing.
// Origins means domain name.
// For fetching the details from other site we must use Localhost on our side.

/* For security issues its forbidden to go and fetch from one site to other site. 
   For fetching the data from other site to our site. It must contains in CORS Policy that this site
   can fetch the data.
*/

/* 
we use PROXY to fetch data from sites containing sensitive info into gives us to localhost.
CORS PROXY to fetch data from sites which don't contain sensitive info.
Please Don't use CORS PROXY for sensitive infos, pass, id , emails,login,etcs.
*/


// for running the file type parcel index.html in your terminal.

// baseendpoint of our api.
const baseEndpoint = 'http://www.recipepuppy.com/api';

// proxy
const proxy = `https://cors-anywhere.herokuapp.com/`;

const form = document.querySelector('form.search');
const recipesGrid = document.querySelector('.recipes');

async function fetchRecipes(query) {
	const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
	const data = await res.json();
	return data;
}

async function handleSubmit(event) {
	event.preventDefault();
	const el = event.currentTarget;
	console.log(form.query.value);
	fetchAndDisplay(form.query.value);
}

async function fetchAndDisplay(query) {
	// turn the form off
	form.submit.disabled = true;
	// submit the search
	const recipes = await fetchRecipes(query);
	console.log(recipes);
	form.submit.disabled = false;
	displayRecipes(recipes.results);
}

function displayRecipes(recipes) {
	console.log('Creating HTML');
	const html = recipes.map(
		recipe => `<div class="recipe">
      	<h2>${recipe.title}</h2>
      	<p>${recipe.ingredients}</p>
      	${recipe.thumbnail &&
			`<img src="${recipe.thumbnail}" alt="${recipe.title}"/>`}
      	<a href="${recipe.href}">View Recipe →</a>
    	</div>`
	);
	recipesGrid.innerHTML = html.join('');
}

form.addEventListener('submit', handleSubmit);
// on page load run it with pizza
fetchAndDisplay('pizza');
