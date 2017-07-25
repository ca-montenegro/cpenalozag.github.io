/* Show and hide navbar */
$(document).ready(function(){

  'use strict';

  $(window).scroll(function(){

    'use script';

    if ($(window).scrollTop()<80){

      $('.navbar').css({

        'margin-top':'-100px',
        'opacity':'0'

      });
      $('.navbar-default').css({

        'background-color':'rgba(21,46,71,0)'
      });
    }
    else{

      $('.navbar').css({
        'margin-top':'0px',
        'opacity':'1'
      });
      $('.navbar-default').css({
        'visibility':'visible',
        'background-color':'rgba(21,46,71,0.9)',
        'border-color':'#132c44'
      });

    }

  });

});

//add smooth scrolling
$(document).ready(function() {

    'use strict';


    $('.nav-item, .contact-down, .about-down').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


});
