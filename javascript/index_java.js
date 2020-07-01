if (jQuery(window).width() > 0) {
    jQuery(window).on("scroll",function(ev){
        if(jQuery(window).scrollTop() > 150 ) { 
            jQuery('.button').addClass('fixed');  
        }
        else{
			jQuery('.button').removeClass('fixed');
        }
        return false;
    });
	}
	
	$(function(){
	   $('a[href^=#]').click(function() {
		  var speed = 800;
		  var href= $(this).attr("href");
		  var target = $(href == "#" || href == "" ? 'html' : href);
		  var position = target.offset().top;
		  $('body,html').animate({scrollTop:position}, speed, 'swing');
		  return false;
	   });
	});
