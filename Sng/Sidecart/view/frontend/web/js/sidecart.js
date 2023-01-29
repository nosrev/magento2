require(['jquery'], function($){
	$('#minicart-content-wrapper').prepend('<div class="icon-close"><div class="minicart-close"></div></div>');

	$('.minicart-wrapper > .action.showcart').on("click", function() {
		$('body').addClass('minicart-opened');
		$('.minicart-wrapper').addClass('open');
	});
	
	$(document).on("click", '.minicart-wrapper #minicart-content-wrapper .icon-close', function() {
		$('body').removeClass('minicart-opened');
		$('.minicart-wrapper').removeClass('open');
	});
});
