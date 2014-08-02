// window.history.pushState("object or string", "Title", "/lol");
$(window).load(function(){
	$('<img/>').attr('src', 'Content/Fifty.svg').load(function() {
	   $(this).remove(); // prevent memory leaks as @benweet suggested
	});
	$('body').css('background-image', 'url(Content/Fifty.svg)');
	show();
});

function show(){
	$('#loading').delay(20000).hide()
	$("#container").fadeIn("slow");	
}

$(document).ready(function() {
   $(".coming-soon").fadeIn("slow");
});