// menu.js

(function(){

	// menu vars
	var menuTrigger = document.querySelector( '#toggle-nav-menu' ),
			menu 				= document.querySelector( '#nav-menu' ),
			activeClass	= 'is-active';

	function toggleMenu() {
		menu.classList.toggle(activeClass);
		menuTrigger.classList.toggle(activeClass);
	}

	menuTrigger.addEventListener( 'click', toggleMenu );

})();