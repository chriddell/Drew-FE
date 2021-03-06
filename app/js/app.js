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