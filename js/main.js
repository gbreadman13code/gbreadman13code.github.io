jQuery(document).ready(function($) {
	$('.lang').hover(function() {
		$('.lang-list').removeClass('d-none');
	}, function() {
		$('.lang-list').addClass('d-none');
	});
});
	$('.select-wrapper').click(function({
		showDropdown($('select')[0]);
		showDropdown = function (element) {
		    var event;
		    event = document.createEvent('MouseEvents');
		    event.initMouseEvent('mousedown', true, true, window);
		    element.dispatchEvent(event);
};
	});