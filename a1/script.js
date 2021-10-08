const getUser = () => {
	fetch('https://jsonplaceholder.typicode.com/users')
	.then((response) => {
		return response.json();
	}).then((data) => {
		let users = '';
		data.forEach((user) => {
			users += `
				<div>
					<h2>Name: ${user.name}</h2>
					<p>Email: ${user.email}</p>
					<p>Company Name: ${user.company.name}</p>
					<p>Phone: ${user.phone}</p>
				</div>
			`
		});
		document.querySelector('#output').innerHTML = users;
	}).catch((err) => {
		console.log('rejected');
	})
}

const addUser = (e) => {
	e.preventDefault();

	const userName = document.querySelector('#userName').value;
	const userUsername = document.querySelector('#userUsername').value;
	const userEmail = document.querySelector('#userEmail').value;
	const userPhone = document.querySelector('#userPhone').value;
	const userWebsite = document.querySelector('#userWebsite').value;
	const useruserAddressStreet = document.querySelector('#userAddressStreet').value;
	const userAddressSuite = document.querySelector('#userAddressSuite').value;
	const userAddressCity = document.querySelector('#userAddressCity').value;
	const userAddressZipcode = document.querySelector('#userAddressZipcode').value;
	const userAddressGeoLatitude = document.querySelector('#userAddressGeoLatitude').value;
	const userAddressGeoLongitude = document.querySelector('#userAddressGeoLongitude').value;
	const userCompanyName = document.querySelector('#userCompanyName').value;
	const userCompanyCatchphrase = document.querySelector('#userCompanyCatchphrase').value;
	const userCompanybs = document.querySelector('#userCompanybs').value;

	fetch('https://jsonplaceholder.typicode.com/users', {
		method: 'POST',
		headers: {
			'Accept': 'application/json, text/plain',
			'Content-type': 'application/json'
		},
		body: JSON.stringify({
			name: userName,
			username: userUsername,
			email: userEmail,
			address: {
				street: useruserAddressStreet,
				suite: userAddressSuite,
				city: userAddressCity,
				zipcode: userAddressZipcode,
				geo: {
					lat: userAddressGeoLatitude,
					lng: userAddressGeoLongitude
				}
			},
			phone: userPhone,
			website: userWebsite,
			company: {
				name: userCompanyName,
				catchphrase: userCompanyCatchphrase,
				bs: userCompanybs
			}
		})
	})
	.then( response => response.json())
	.then( data => console.log(data))
}


const getUsers = document.querySelector('#getUsers');
getUsers.addEventListener('click', getUser);

const addUsers = document.querySelector('#addUser');
addUsers.addEventListener('submit', addUser);