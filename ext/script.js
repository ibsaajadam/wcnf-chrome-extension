document.getElementById("auto-fill").addEventListener("click", () => {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			email: document.getElementById('email').value,
			firstname: document.getElementById('first-name').value,
			lastname: document.getElementById('last-name').value,
			address1: document.getElementById('address-1').value,
			address2: document.getElementById('address-2').value,
			city: document.getElementById('city').value,
			country: document.getElementById('country').value,
			state: document.getElementById('state').value,
			zip: document.getElementById('zip').value,
			cardnumber: document.getElementById('card-number').value,
			cardname: document.getElementById('card-name').value,
			expiration: document.getElementById('expiration').value,
			cvv: document.getElementById('cvv').value
		}, function(response) {
			console.log(response.status);
		});
	});
});

document.getElementById("reset-fields").addEventListener("click", () => {
	document.getElementById('email').value = '';
	document.getElementById('first-name').value = '';
	document.getElementById('last-name').value = '';
	document.getElementById('address-1').value = '';
	document.getElementById('address-2').value = '';
	document.getElementById('city').value = '';
	document.getElementById('country').value = '';
	document.getElementById('state').value = '';
	document.getElementById('zip').value = '';
	document.getElementById('card-number').value = '';
	document.getElementById('card-name').value = '';
	document.getElementById('expiration').value = '';
	document.getElementById('cvv').value = '';
});


document.getElementById("save").addEventListener("click", () => {
	chrome.storage.sync.set({
		email: document.getElementById('email').value,
		firstname: document.getElementById('first-name').value,
		lastname: document.getElementById('last-name').value,
		address1: document.getElementById('address-1').value,
		address2: document.getElementById('address-2').value,
		city: document.getElementById('city').value,
		country: document.getElementById('country').value,
		state: document.getElementById('state').value,
		zip: document.getElementById('zip').value,
		cardnumber: document.getElementById('card-number').value,
		cardname: document.getElementById('card-name').value,
		expiration: document.getElementById('expiration').value,
		cvv: document.getElementById('cvv').value
	}, function() {
		console.log("Saved!");
	});
});

document.getElementById("load").addEventListener("click", () => {
	chrome.storage.sync.get([
		'email',
		'firstname',
		'lastname',
		'address1',
		'address2',
		'city',
		'country',
		'state',
		'zip',
		'cardnumber',
		'cardname',
		'expiration',
		'cvv'
	], function(result) {
		document.getElementById('email').value = result.email;
		document.getElementById('first-name').value = result.firstname;
		document.getElementById('last-name').value = result.lastname;
		document.getElementById('address-1').value = result.address1;
		document.getElementById('address-2').value = result.address2;
		document.getElementById('city').value = result.city;
		document.getElementById('country').value = result.country;
		document.getElementById('state').value = result.state;
		document.getElementById('zip').value = result.zip;
		document.getElementById('card-number').value = result.cardnumber,
		document.getElementById('card-name').value = result.cardname,
		document.getElementById('expiration').value = result.expiration,
		document.getElementById('cvv').value = result.cvv;
	});
});
