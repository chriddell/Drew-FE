// menu.js

(function(){

	// menu vars
	var menuTrigger		= document.querySelector( '#toggle-nav-menu' ),
			menu 					= document.querySelector( '#nav-menu' ),
			activeClass		= 'is-active',
			noScrollClass	= 'js-no-scroll';

	function toggleMenu() {
		menu.classList.toggle(activeClass);
		menuTrigger.classList.toggle(activeClass);
		document.body.classList.toggle(noScrollClass);
	}

	menuTrigger.addEventListener( 'click', toggleMenu );

})();