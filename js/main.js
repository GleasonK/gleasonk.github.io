/////////////////////
//Parallax Background
/////////////////////

$(document).ready(function(){
	$(window).scroll(function(){
		var topPos = $(window).scrollTop();
		topPos = -topPos;
		var windowSize = $(window).height()
		var bottomOfScreen = topPos - windowSize;
		
		var mTop = topPos - topPos/3;
		var banSpeed =  105 + topPos + topPos/4;
		var waveSpeed = topPos + topPos/4
		var daylightSpeed = (topPos * 0.1) * 3
		var nightlightSpeed = (topPos * 0.1) * 5.5;
		var dayPos = $('#day-change').offset().top
		var nightPos = dayPos+250;
		
		$('#banner-text').css({
		 'margin-top' : mTop + 'px',
		 'opacity': 1+topPos/300 
		});
		$('#banner-wave.wave1').css('background-position-x', waveSpeed/10 + 'px');
		$('#banner-wave.wave2').css('background-position-x',-25 + -waveSpeed/7 + 'px');
		$('#banner-wave.wave3').css('background-position-x', -50  -waveSpeed/2.5 + 'px');

		var dayDegree = 180 + -daylightSpeed;
		var nightDegree = -50 + - nightlightSpeed;
		if (bottomOfScreen < (-dayPos) && dayDegree < 440) {
			$('#hemisphere.sun-orbit').css('-webkit-transform', 'rotate(' + dayDegree + 'deg)');
			$('#globe').css('-webkit-transform', 'rotate(' + (60 + dayDegree) + 'deg)');
		}
		if (bottomOfScreen < (-nightPos) && nightDegree < 435){
			$('#hemisphere.moon-orbit').css('-webkit-transform', 'rotate(' + (nightDegree) + 'deg)');
/* 			alert(nightDegree); */
		}
	})
});

///////////////////
//Background Colors
///////////////////

$(document).ready(function(){ 
    var scroll_pos = 0;
    var animation_begin_pos = 0; 
    var animation_end_pos = 2000;
    var beginning_color = new $.Color( 'rgb(239, 64, 54)' );    //Red
    var beginning_color_r =  new $.Color( 'rgb(255, 255, 0)' ); //Yellow
    var ending_color = new $.Color( 'rgb(0, 179, 227)' );   //Blue 
    var ending_color_r = new $.Color( 'rgb(115, 0, 255)' ); //Purple
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop(); 
        if(scroll_pos >= animation_begin_pos && scroll_pos <= animation_end_pos ) { 
            var percentScrolled = scroll_pos / ( animation_end_pos - animation_begin_pos );
            var newRed = beginning_color.red() + ( ( ending_color.red() - beginning_color.red() ) * percentScrolled );
            var newGreen = beginning_color.green() + ( ( ending_color.green() - beginning_color.green() ) * percentScrolled );
            var newBlue = beginning_color.blue() + ( ( ending_color.blue() - beginning_color.blue() ) * percentScrolled );
            var newColor = new $.Color( newRed, newGreen, newBlue );
            
            var newRed_r = beginning_color_r.red() + ( ( ending_color_r.red() - beginning_color_r.red() ) * percentScrolled );
            var newGreen_r = beginning_color_r.green() + ( ( ending_color_r.green() - beginning_color_r.green() ) * percentScrolled );
            var newBlue_r = beginning_color_r.blue() + ( ( ending_color_r.blue() - beginning_color_r.blue() ) * percentScrolled );
            var newColor_r = new $.Color( newRed_r, newGreen_r, newBlue_r );
            $('#bg-gradient').css({ background: "-webkit-gradient(linear, left top, right bottom, from("+ newColor +"), to("+ newColor_r +"))"});
        } else if ( scroll_pos > animation_end_pos ) {
             $('#bg-gradient').css({ background: "-webkit-gradient(linear, left top, right bottom, from("+ ending_color +"), to("+ ending_color_r +"))"});
        } else if ( scroll_pos < animation_begin_pos ) {
             $('#bg-gradient').css({ background: "-webkit-gradient(linear, left top, right bottom, from("+ beginning_color +"), to("+ beginning_color_r +"))"});
        } else { } 
    });
});

///////////////////////
// Scroll To Top Button
///////////////////////

$("a[href='#scrollToTop']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, 1000);
  return false;
});

$(document).ready(function(){  
    $("a[href='#scrollToTop']").hover(function() {
      $(this).stop().animate({ opacity: 1 });
    },
    function() {
      $(this).stop().animate({ opacity: 0.5 }); 
    });
});

////////////////////////
//Noteable Works Slider
////////////////////////

$(document).ready(function(){
	$('#All-button').click(function(){
		$('.selected').removeClass('pf-selected');
		$(this).addClass('pf-selected');
		$('.js, .ja, .ht, .ot').hide();
		$('.js, .ja, .ht, .ot').show('clip');
	});
	$('#JavaScript-button').click(function(){
		$('.selected').removeClass('pf-selected');
		$(this).addClass('pf-selected');
		// $(".active-button").removeClass(".active-button");
		// $('#JavaScript-button').addClass(".active-button");
		$('.ja, .ht, .ot').hide('clip');
		$('.js').delay(400).show('clip');
	});
	$('#HTML-button').click(function(){
		$('.selected').removeClass('pf-selected');
		$(this).addClass('pf-selected');
		$('.ja, .ot, .js').hide('clip');
		$('.ht').delay(400).show('clip');	
		
	});
	$('#Java-button').click(function(){
		$('.ht, .js, .ot ').hide('clip');
		$('.ja').delay(400).show('clip');	
	});
	$('#Other-button').click(function(){
		$('.ht, .js, .ja ').hide('clip');
		$('.ot').delay(400).show('clip');	
	});
	$("#All-button, #JavaScript-button, #HTML-button, #Java-button, #Other-button").click(function(){
		$('.pf-selected').removeClass('pf-selected');
		$(this).addClass('pf-selected');
	});
});

$(document).ready(function(){
	$('#notable-content').sortable();
	$('#notable-content li').hover(function(){
	    $(this).find('img').stop().fadeTo('fast',0.1);
	    $(this).find('span').stop().fadeTo('fast',1);
		}, 
	function(){
	    $(this).find('img').stop().fadeTo('fast',1);
	    $(this).find('span').stop().fadeTo('fast',0);
	});
});

$(document).ready(function(){
	var scoreH = 0;
	var scoreA = 0;
	$('#ball').draggable({ revert: "valid" });
	$( "#hoop1" ).droppable({
      	drop: function( event, ui ) {
      		scoreH += 2;
        	$("#home-score").find("p").html(scoreH);
      }
    });
    $( "#hoop2" ).droppable({
      	drop: function( event, ui ) {
      		scoreA += 2;
        	$("#away-score").find("p").html(scoreA);
      }
    });
});