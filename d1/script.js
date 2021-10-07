
// Get Data
const getData = () => {
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then((response) => {
			return response.json();
		}).then((data) => {
			let posts = '';
			data.forEach((post) => {
				posts += `
					<div>
						<h2>${post.title}</h2>
						<p>${post.body}</p>
					</div>`
			});
			document.querySelector('#output').innerHTML = posts;
		})
		.catch((err) => {
			console.log('rejected')
		})
}


// Add Post
const addPost = (e) => {	// e is known as an Event Object. Event objects gives you all the details about the Event
	e.preventDefault();	// preventDefault will prevent the default behavior of the submit button
	let title = document.querySelector('#title').value;
	let body = document.querySelector('#body').value;

	fetch('https://jsonplaceholder.typicode.com/posts', {	// action attribute in .html (not used in .html to prevent the default behavior of submit)
		method: 'POST',	// method attribute in .html (not used in .html to prevent the default behavior of submit)
		headers: {
			'Accept': 'application/json, text/plain',
			'Content-type': 'application/json'
		},
		body: JSON.stringify({
			title: title,
			body: body
		})
	})
	// .then( response => response.json())	// can be used to shorten the code below
	.then((response) => {
		return response.json()
	})
	.then( data => console.log(data))
}


const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', getData);	// listen to a 'click'from the Get Data button

const addForm = document.querySelector('#addPost');
addForm.addEventListener('submit', addPost);	// listens to a 'submit' from the form. forms only allows submit event (click is not allowed). the default behavior of a submit button is to get everything inside the form then send it to somewhere. shows a question mark (?) at the end of the URL