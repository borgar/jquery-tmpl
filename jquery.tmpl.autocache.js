(function($){
	$(document).ready(function() {
		$("script[type='text/html'],.jquery-tmpl").each(function() {
			var name = this.id.replace(/^template[^\da-z]?|[^\da-z]?template$/i, "");

			$.templates[name] = $.tmpl(this.innerHTML);
		}).remove();
	});
})(jQuery);
