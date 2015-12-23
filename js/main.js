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
		var waveSpeed = topPos + topPos/4;
		
		$('#banner-text').css({
		 'margin-top' : mTop + 'px',
		 'opacity': 1+topPos/300 
		});
		$('#banner-wave.wave1').css('background-position', waveSpeed/10 + 'px 0');
		$('#banner-wave.wave2').css('background-position',-25 + -waveSpeed/7 + 'px 0');
		$('#banner-wave.wave3').css('background-position', -50  -waveSpeed/2.5 + 'px 0');
		
		var dayChangeBox = $('#day-change');
		if ( !dayChangeBox.length ) return; // Skip if not on Day Change page
		var daylightSpeed = (topPos * 0.1) * 3;
		var nightlightSpeed = (topPos * 0.1) * 5.5;
		var dayPos = dayChangeBox.offset().top;
		var nightPos = dayPos+250;
		var dayDeg   = 180 + 0.5*(-bottomOfScreen - dayPos);
		var nightDeg = 180 + (-bottomOfScreen - nightPos);
		var DAY_MAX = 440;
		var NIGHT_MAX = 435;
		if (bottomOfScreen < (-dayPos)) {
			if (dayDeg < 440){
				transformAll($('#hemisphere.sun-orbit'), dayDeg);
				transformAll($('#globe'), (60+dayDeg));
			} else {
				transformAll($('#hemisphere.sun-orbit'), DAY_MAX);
				transformAll($('#globe'), (60+DAY_MAX));
			}
		}
		if (bottomOfScreen < (-nightPos)){
			if (nightDeg < 435) transformAll($('#hemisphere.moon-orbit'), nightDeg);
			else transformAll($('#hemisphere.moon-orbit'), NIGHT_MAX);
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
	gradientAll($('#bg-gradient'), beginning_color, beginning_color_r);
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
            gradientAll($('#bg-gradient'), newColor, newColor_r);
            // $('#bg-gradient').css({ background: "-webkit-gradient(linear, left top, right bottom, from("+ newColor +"), to("+ newColor_r +"))"});
        } else if ( scroll_pos > animation_end_pos ) {
            gradientAll($('#bg-gradient'), ending_color, ending_color_r);
             // $('#bg-gradient').css({ background: "-webkit-gradient(linear, left top, right bottom, from("+ ending_color +"), to("+ ending_color_r +"))"});
        } else if ( scroll_pos < animation_begin_pos ) {
            gradientAll($('#bg-gradient'), beginning_color, beginning_color_r);
             // $('#bg-gradient').css({ background: "-webkit-gradient(linear, left top, right bottom, from("+ beginning_color +"), to("+ beginning_color_r +"))"});
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

/////////////////////
// Notable Works Fade
/////////////////////

$(document).ready(function(){
	$('#notable-content li').hover(function(){
	    $(this).find('img').stop().fadeTo('fast',0.1);
	    $(this).find('span').stop().fadeTo('fast',1);
		}, 
	function(){
	    $(this).find('img').stop().fadeTo('fast',1);
	    $(this).find('span').stop().fadeTo('fast',0);
	});
});


//////////////////
// Welcome Message
//////////////////

console.log("Welcome!");
console.log("Looking at the JS console on a personal page, you're a true dev.");
console.log("Here is your reward:");
console.log("https://bitly.com/98K8eH");
console.log("       - Kevin");
