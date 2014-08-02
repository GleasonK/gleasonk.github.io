// window.history.pushState("object or string", "Title", "/lol");
$(window).load(function(){
	$('<img/>').attr('src', 'Content/Fifty.svg').load(function() {
	   $(this).remove(); // prevent memory leaks as @benweet suggested
	});
	$('body').css('background-image', 'url(Content/Fifty.svg)');
	show();
});

function show(){
	var dtime = 2000
	$('#loading').hide('fast').fadeOut(
		function(){
			$("#container").removeClass("gone").fadeIn(2500);	
	});
}