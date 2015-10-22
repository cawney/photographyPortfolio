/*
This is all the extra JS that is needed for the site. If you want ot add any
extra JS, please add it here. Organization is pretty clear: It is broken up 
into sections and then they have a discription of what each section does.
There are a few notes sprinkled into the code so that you will know the logic
behind why it is set up that way.



/**************************************
Smooth Scrolling
**************************************/


//Allows you to jump from section to section using the menu
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
 

//Animate image to draw attention and make users want to click it
$('.portfolio-img').hover(function(){
	$(this).toggleClass("tada"); 
});

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


// $(window).scroll(function(){
//     var st = $(this).scrollTop(),
//         winH = $(this).height(),
        
//          you can set this add, 
//         depends on where you want the animation to start
//         for example if the section height is 100 and you set add of 50,
//         that means if 50% of the section is revealed 
//         on the bottom of viewport animate opacity
        
//         add = 20;
    
//     $('div').each(function(){
//         var pos = $(this).position().top;
        
//         if(st + winH >= pos + add){
//             $(this).stop().animate({opacity:1, marginTop:10},'fast');
//         }else{
//             $(this).stop().animate({opacity:0, marginTop:0},'fast');
//         }
//     });
// });



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
  //Make a function so that this won't appear if the screen size is mobile
  

});




