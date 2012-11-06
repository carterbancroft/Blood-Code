(function($) {
	$.fn.bloodCode = function(options) {
		var extended = $.extend({}, $.fn.bloodCode.defaults, options);
		
		return this.each(function() {
			var code = [65, 66, 65, 67, 65, 66, 66];  // A B A C A B B
			var keystrokes = [];

			$(window).keyup(function(event) {
				keystrokes.push(event.which);
				
				var success = false;
				for (var i = 0; i < keystrokes.length; i++) {
					if (keystrokes[i] === code[i]) {
						if (keystrokes.length === code.length && keystrokes[code.length - 1] === code[code.length - 1]) {
							success = true;
							keystrokes = [];
						}
					}
					else if (event.which === code[0]) {
						keystrokes = [code[0]];
					}
					else {
						keystrokes = [];
					}
				}
				
				if (success) {
					extended.fatality();
				}
			});
		});
	};
	
	$.fn.bloodCode.defaults = {
		fatality: null
	};
})(jQuery);