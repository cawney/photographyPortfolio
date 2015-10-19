
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
Lazy Load
**************************************/


$(window).scroll(function() {
  //console.log('Lazy Load Running');
   $("p").removeClass("some_class");
   if($(window).scrollTop() + $(window).height() === $(document).height()) {
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
  //Works... Might change from 'tada' to something less in your face.
	$(this).toggleClass("tada"); //Makes imgage shake and draws attention to people to click on it.
});


$('.portfolio-list a').click(function(){
	console.log('denied!');
	event.preventDefault(); //Prevents user from following link
	var imgPath = $(this).attr('href'); //Put inside the link you're following
	console.log(imgPath); //Testing
	$('.lightbox').show();
	$('.lightbox').addClass("rotateIn"); //Makes it look a little nicer

	//Add the Image to lightbox
	var img = "<img class='lightbox-img'src='" + imgPath + "'>";
	var numberImg = $(img).length;

	
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

$(window).scroll(function(){
    var st = $(this).scrollTop(),
        winH = $(this).height(),
        /* you can set this add, 
        depends on where you want the animation to start
        for example if the section height is 100 and you set add of 50,
        that means if 50% of the section is revealed 
        on the bottom of viewport animate opacity
        */
        add = 20;
    
    $('div').each(function(){
        var pos = $(this).position().top;
        
        if(st + winH >= pos + add){
            $(this).stop().animate({opacity:1, marginTop:10},'fast');
        }else{
            $(this).stop().animate({opacity:0, marginTop:0},'fast');
        }
    });
});




