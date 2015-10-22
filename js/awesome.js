/*
This is all the extra JS that is needed for the site. If you want ot add any
extra JS, please add it here. Organization is pretty clear: It is broken up 
into sections and then they have a discription of what each section does.
There are a few notes sprinkled into the code so that you will know the logic
behind why it is set up that way.



/**************************************
Smooth Scrolling
**************************************/



/*
This is used to have a cool effect of sliding down the parge when a user clicks
on something in the nav bar. They will be taken down to it using the magic of JS
*/
(function (jQuery) {
  jQuery.mark = {
    jump: function (options) {
      var defaults = {
        selector: 'a.scroll-smooth'
      };
      if (typeof options === 'string') {
        defaults.selector = options;
      }

      options = jQuery.extend(defaults, options);
      return jQuery(options.selector).click(function (e) {
        var jumpobj = jQuery(this);
        var target = jumpobj.attr('href');
        var thespeed = 1000;
        var offset = jQuery(target).offset().top;
        jQuery('html,body').animate({
          scrollTop: offset
        }, thespeed, 'swing');
        e.preventDefault();
      });
    }
  };
})(jQuery);


jQuery(function(){  
  jQuery.mark.jump();
});



/**************************************
Mobile Navbar
**************************************/



/*
Makes the nav bar mobile friendly. When you get to a certian screen width the 
nav bar at the top will change to a mobile version for UX purposes.
*/
$(document).ready(function() {
  var menuToggle = $('#js-mobile-menu').unbind();
  $('#js-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-navigation-menu').slideToggle(function(){
      if($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
      }
    });
  });
});



/**************************************
Lightbox
**************************************/
 


/*
Used for the portfolio section of the website. When you click on the portfolio
it will fade over the page and have the image appear over top of the screen.
It's easily editable, so jump in and change stuff if you want.
*/

//Animate image to draw attention and make users want to click it
$('.portfolio-img').hover(function(){
	$(this).toggleClass("pulse"); 
});

//The actual lightbox function
$('.portfolio-list a').click(function(){
	event.preventDefault(); //Prevents user from following link
	var imgPath = $(this).attr('href'); //Put inside the link you're following
	$('.lightbox').show(); //Makes lightbox appear
	$('.lightbox').addClass("fadeIn"); //Makes it look a little nicer

	//Add the Image to lightbox
	var img = "<img class='lightbox-img'src='" + imgPath + "'>";
	$('.lightbox-content').append(img);
	
	//Hide the Lightbox
	$('.lightbox p').click(function(){
		$('.lightbox').hide();
		$('.lightbox-img').remove(); //Removes image so you don't have multiple images showing up overtop of eachother.
	});
});



/**************************************
Fading Text appearing
**************************************/



//This will be used to make text appear like it is fading up from no the bottom
//We will use fadeInUp for the animation to make it work.


//Leaving off just so it won't bloat up the site, if you like this sort of thing, uncomment it and edit it if you like
/*
$(window).scroll(function(){
	var top = $(this).scrollTop(),
		windowHeight = $(this).height(),
		extra = 20;

	$('section').each(function(){
		var pos = $(this).position().top;

		if(top + windowHeight >= pos + extra){
			$(this).addClass('animated');
			$(this).addClass('fadeIn');
		} else {
			$(this).removeClass('fadeIn');
		}

	});
});
*/


