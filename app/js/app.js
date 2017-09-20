// lazyload.js

(function(){

	// We're using blazy.js
	// http://dinbror.dk/blog/blazy/

	// init and set options
	var bLazy = new Blazy({

		breakpoints: [{
			width: 767, // max-width
			src: 'data-src-small'
		}]
	});

})();
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