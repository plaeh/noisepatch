// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

$(document).ready(function() {
	if ( $('#tickets').length == 0) {
		return
	}

	$('#resolved_tickets').hide()
	$('#show_resolved_tickets').click(function() {
		$('#resolved_tickets').show()

		$('body').animate({
            scrollTop: $("#resolved_tickets").offset().top
        }, 2000);
	})
})