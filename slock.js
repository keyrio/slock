

// ------------------------------------------
// Slock.js - v1.0.0
// Very Lightweight jQuery Parallax plugin 
// Copyright (c) 2017 KEYRIO (@keyrio)
// MIT license
// ------------------------------------------


jQuery.extend(jQuery.fn,
{		
    slock: function(parametres)
    {
    	var element = jQuery(this);
    	var dSpeed = parametres.speed;
    	
    	if (dSpeed > 1) dSpeed = 1;
    	if (dSpeed < -0.5) dSpeed = -0.5;
    	
    	var nScale = 1 + ((Math.abs(dSpeed)))
    	
		element.css("transform", "scale("+nScale+")");
		jQuery(document).on("scroll", window, function(e)
		{
			var nScrollTop = jQuery(window).scrollTop();
			
			element.each(function(index, object)
			{
				if (jQuery(object).data("bgposy") == undefined) 
				{ 
					jQuery(object).data("bgposy", jQuery(object).css("background-position-y")) 
				}
				
				jQuery(object).css("background-position-y", parseInt(jQuery(object).data("bgposy"))+(nScrollTop*dSpeed));
			});
			
		});
    }
});