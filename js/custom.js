
//
$(document).ready(function () {
	$('#fullpage').fullpage({
		'verticalCentered': false,
		'scrollingSpeed': 600,
		'autoScrolling': false,
		'css3': true,
		'navigation': true,
		'navigationPosition': 'right',
	});
});

// wow
$(function () {
	new WOW().init();
	$(".rotate").textrotator();
})

function changeLanguage(selectedLanguage) {
	if (selectedLanguage === "en") {
		window.location.href = "index.html";
	} else if (selectedLanguage === "nl") {
		window.location.href = "index-nl.html";
	}
}
const form = document.getElementById('myForm');
var successAlert = $('#success-alert');
var errorAlert = $('#error-alert');


form.addEventListener('submit', function (event) {
	event.preventDefault();

	// Get form data
	var formData = new FormData(this);

	// Send form data to Formspree (replace 'your-email@example.com' with your email)
	fetch('https://formspree.io/f/mknlanko', {
		method: 'POST',
		body: formData,
		headers: {
			'Accept': 'application/json'
		}
	})
		.then(response => response.json())
		.then(data => {
			if (data.ok) {
				console.log('Success:', data);
				showSuccessMessage()
			}
			else {
				showErrorMessage()
			}
		})
		.catch(error => {
			console.error('Error:', error);
			showUnexpectedError();
		});

});

function showSuccessMessage() {
	var htmlElement = document.querySelector('html');

	var lang = htmlElement.getAttribute('lang');

	if (lang === "en") {
		successAlert.html('<strong>Success!</strong> Message sent successfully.');
	} else if (lang === "nl") {
		successAlert.html('<strong>Success!</strong> Bericht succesvol verstuurd.');
	}
	successAlert.show();
	errorAlert.hide();
}


function showErrorMessage() {

	errorAlert.html('<strong>Error!</strong> ' + data.error);
	errorAlert.show();
	successAlert.hide();
}

function showUnexpectedError() {
	var htmlElement = document.querySelector('html');

	var lang = htmlElement.getAttribute('lang');

	if (lang === "en") {
		errorAlert.html('<strong>Error!</strong> An unexpected error occurred.');
	} else if (lang === "nl") {
		errorAlert.html('<strong>Error!</strong> Een onverwachte probleem deed voor.');
	}
	errorAlert.show();
	successAlert.hide();
}


