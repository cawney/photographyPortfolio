
/**************************************
Smooth Scrolling
**************************************/


(function (jQuery) {
  jQuery.mark = {
    jump: function (options) {
      var defaults = {
        selector: 'a.scroll-smooth'
      };
      if (typeof options == 'string') {
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
Background Header Image
**************************************/


/*
$(document).ready(function(){
	console.log("Begin Function");
	var n = $('.header-img').height();
	console.log("The height is " + n);
	console.log("End Function");
});
*/


/**************************************
Lazy Load
**************************************/


$(window).scroll(function() {
  //console.log('Lazy Load Running');
   $("p").removeClass("some_class");
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       //you are at bottom
    //   console.log('You are at bottom');
       $("<p>").addClass("animated fadeInUp");
   }
});


window.scroll(function(){
	console.log("begin function");
	var h = $(document).scrollTop();
	console.log(h);

	console.log("end function");
});


//$('p').console.log("ScrollTop():" + );


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
 


$('.portfolio-img').hover(function(){
	$(this).toggleClass("tada"); //Makes imgage shake and draws attention to people to click on it.
});

$(".portfolio-img").click(function(){ //Makes lightbox appear

	console.log("Begin Function");
	$(".lightbox").toggleClass('hide'); //Reveals the lightbox //Originally set to hide.

	//Get the image and display it dynamically
	$('.portfolio-img').ready(function() {

		//Get the image source
		var imgSrc = $('.portfolio-img').attr('src');

		//Add an image to the lightbox with correct source
		$('.lightbox-img').append('<img src="' + imgSrc + '">'); //Adds img attribute with source to HTML

	});
	

	//Button to leave the lightbox when needed.
	$('button').click(function(){ //Makes the button hide the JS
		$('.lightbox').addClass('hide');
	});

	console.log("End Function");
});
//Closes the lightbox
	// $(".ligthbox>p").click(function(){
	// 	alert("Testing");
	// }); 





