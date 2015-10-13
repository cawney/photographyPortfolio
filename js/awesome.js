
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
Lazy Load
**************************************/


$(window).scroll(function() {
  console.log('Lazy Load Running');
   $("<p>").removeClass("some_class");
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       //you are at bottom
       console.log('You are at bottom');
       $("<p>").addClass("animated fadeInUp");
   }
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

