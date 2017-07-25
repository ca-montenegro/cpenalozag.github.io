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
