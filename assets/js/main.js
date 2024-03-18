// Fade kg-binary on scroll down
(function() {
    function hideKgBinaryOnScroll() {
        if ($(this).scrollTop() > 175) {
            $('#kg-binary').fadeOut("slow", function () {
                $('#kg-binary').css({'visibility': 'hidden'});
            });
        } else {
            $('#kg-binary').css({'visibility': 'visible'});
            $('#kg-binary').fadeIn("slow", function () {});
        }
    }
    $(window).scroll(hideKgBinaryOnScroll);
    $(document).ready(hideKgBinaryOnScroll);
})();

// Update social stats
(function(){
    // github forks and stars
    $.get("https://api.github.com/users/gleasonk/repos?per_page=200", function(data){
        window.data = data;
        let stars=0;
        let forks=0;
        data.map(repo => {
            stars += repo.stargazers_count;
            forks += repo.forks;
        });
        $('#kg-gh-stars').html(stars);
        $('#kg-gh-forks').html(forks);
    });

    // github followers
    //$.get("https://api.github.com/users/gleasonk", function(data){
    //    window.follower_data = data;
    //    $('#kg-gh-followers').html(data.followers);
    //});
})();

// Experience toggler
function toggleExperience(li, id) {
    $('.kg-experience-active').each(function(){
        $(this).removeClass('kg-experience-active');
    });
    $('.kg-experience-items .show').each(function(){
        $(this).removeClass('show');
    });
    $(li).addClass('kg-experience-active');
    $(id).addClass('show', 1000);
}


// Helper functions
function scrollToId(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}




// Trigger CSS animations on scroll.
// Detailed explanation can be found at http://www.bram.us/2013/11/20/scroll-animations/
// Taken from: https://codepen.io/bramus/pen/AzmevE
jQuery(function($) {
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');

    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }

    // Check all animatables and animate them if necessary
    $animatables.each(function(i) {
       var $animatable = $(this);
            if (($animatable.offset().top + 200) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
            }
    });

  };

  // Hook doAnimations on scroll, and trigger a scroll
  $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});
