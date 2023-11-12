
//
$(document).ready(function() {
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
$(function()
{
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
