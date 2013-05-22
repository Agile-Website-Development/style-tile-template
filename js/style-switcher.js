/* From http://www.cssnewbie.com/simple-jquery-stylesheet-switcher/ */

$(document).ready(function() { 
	$("#style-switcher ul li a").click(function() { 
		$("link.main_stylesheet").attr("href",$(this).attr('rel'));
		return false;
	});
});