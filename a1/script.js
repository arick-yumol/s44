/*const getUser = () => {
	fetch('https://jsonplaceholder.typicode.com/users')
	.then( response => response.json())
	.then( data => {
		let users = '';
		data.forEach(user => {
			users =+ `
				<div>
					<h5>${user.name}</h5>
					<p>${user.email}</p>
					<p>${user.company}</p>
					<p>${user.phone}</p>
				</div>
			`
		});
		document.querySelector('#output').innerHTML = users;
	})
	.catch( err => console.log('rejected'))
}

// addUser incomplete
const addUser = (e) => {
	e.preventDefault();

	fetch('https://jsonplaceholder.typicode.com/users', {
		method: 'POST',
		headers: {
			'Accept': 'application/json, text/plain',
			'Content-type': 'application/json'
		}
		body: JSON.stringify({

		})
	})
	.then( response => response.json())
	.then( data => console.log(data))
}

const getUsers = document.querySelector('#getUsers');
getUsers.addEventListener('click', getUser);

const addUser = document.querySelector('#addUser');
addUser.addEventListener('submit', addUser)*/

const getUser = () => {
	fetch('https://jsonplaceholder.typicode.com/users')
	.then((response) => {
		return response.json();
	}).then((data) => {
		let users = '';
		data.forEach((user) => {
			users += `
				<div>
					<h2>${user.name}</h2>
					<p>${user.email}</p>
					<p>${user.company.name}</p>
					<p>${user.phone}</p>
				</div>
			`
		});
		document.querySelector('#output').innerHTML = users;
	}).catch((err) => {
		console.log('rejected')
	})
}

const getUsers = document.querySelector('#getUsers');
getUsers.addEventListener('click', getUser);

