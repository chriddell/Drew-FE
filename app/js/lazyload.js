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