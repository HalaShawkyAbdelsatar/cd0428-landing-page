var $navigationLinks = document.querySelectorAll('nav');
var $sections = document.getElementsByTagName('section');






// build the nav
var $navigationLinks = document.querySelectorAll('nav');
var $sections = document.getElementsByTagName('section');



// Add class 'active' to section when near top of viewport
if (position >= target) {
    const newLocal = '#navigation > ul > li > a';
    $(newLocal).removeClass('active');
    $('#navigation > ul > li > a[href=#' + id + ']').addClass('active');
}


// Scroll to anchor ID using scrollTO event
var sectionIdTonavigationLink = {};
$sections.each( function(){
    sectionIdTonavigationLink[ $(this).attr('id') ] = $('#navigation > ul > li > a[href=\\#' + $(this).attr('id') + ']');
});s

// Build menu 
var sectionIdTonavigationLink = {};
for (var i = $sections.length-1; i >= 0; i--) {
	var id = $sections[i].id;
	sectionIdTonavigationLink[id] = document.querySelectorAll('nav > ul > li > a[href=\\#' + id + ']') || null;
}

// Scroll to section on link click
var sectionIdTonavigationLink = {};
$sections.each( function(){
    sectionIdTonavigationLink[ $(this).attr('id') ] = $('#navigation > ul > li > a[href=\\#' + $(this).attr('id') + ']');
});

// Set sections as active
function highlightNavigation() {
	// get the current vertical position of the scroll bar
	var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

	// iterate the sections
	for (var i = $sections.length-1; i >= 0; i--) {
		var currentSection = $sections[i];
		// get the position of the section
		var sectionTop = getOffset(currentSection).top;

	   // if the user has scrolled over the top of the section  
		if (scrollPosition >= sectionTop - 250) {
			// get the section id
			var id = currentSection.id;
			// get the corresponding navigation link
			var $navigationLink = sectionIdTonavigationLink[id];
			// if the link is not active
			if (typeof $navigationLink[0] !== 'undefined') {
				if (!$navigationLink[0].classList.contains('active')) {
					// remove .active class from all the links
					for (i = 0; i < $navigationLinks.length; i++) {
						$navigationLinks[i].className = $navigationLinks[i].className.replace(/ active/, '');
					}
					// add .active class to the current link
					$navigationLink[0].className += (' active');
				}
			} else {
					// remove .active class from all the links
					for (i = 0; i < $navigationLinks.length; i++) {
						$navigationLinks[i].className = $navigationLinks[i].className.replace(/ active/, '');
					}
			}	
			// we have found our section, so we return false to exit the each loop
			return false;
		}
	}
}

window.addEventListener('scroll',throttle(highlightNavigation,150));


