/* Show and hide navbar */
$(document).ready(function(){

  'use strict';

  $(window).scroll(function(){

    'use script';

    if ($(window).scrollTop()<500){

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

//Active menu item on click
$(document).ready(function() {

  'use strict';

  $('.navbar-nav li a').click(function(){
    'use strict';

    $('.navbar-nav li a').parent().removeClass("active");
    $(this).parent().addClass("active");

  });

});

//Active menu item on scroll
$(document).ready(function() {

  'use strict';

  $(window).scroll(function(){
    'use strict';

    $("section").each(function(){

      'use strict';
      var idCurrent = $(this).attr("id");
      var height = $(this).outerHeight();
      var grttop = $(this).offset().top - 70;

      if ($(window).scrollTop()>grttop && $(window).scrollTop()<grttop+height){
        $(".navbar-nav li a[href='#"+idCurrent+"']").parent().addClass("active");
      }
      else{
        $(".navbar-nav li a[href='#"+idCurrent+"']").parent().removeClass("active");
        $(".navbar-nav li a[href='#home']").parent().removeClass("active");
      }


    });

  });

});

//Add wow animations -> initialize
$(document).ready(function() {

  'use strict';

  new WOW().init();

});

//Smooth scrolling
$(document).ready(function() {

  'use strict';

  $('.nav-item, .contact-down, .about-down, #to-top').click(function() {
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
