//COLOUR PALETTE
/*
#D1D3CF - Linen
#757081 - Raisin
#6B82A8 - Lavender
#6C4F70 - Grape
#39324B - Black cherry

#0F1626 - Navy Blue
#AB987A - Leather
#FF533D - Coral
#F5F5F5 - EggShell
*/

var requestAnimationFrame = window.requestAnimationFrame || 
							window.mozRequestAnimationFrame ||
							window.webkitRequestAnimationFrame ||
							window.msRequestAnimationFrame;

var i = 0;
var counter = 0;
var requestID;

$(document).ready(function() {



	init_hovers();

	
	setTimeout(function(){
		$('body').addClass('loaded');
		start_main_animation();
	}, 2000);


});	

function start_main_animation() {
	$("#logo").fadeTo( 3000 , 0.3, function() {
  	});
    //fade_in_title();

    animate_title();
}

function fade_in_title() {
	$("#title .text").css("width",0);
	$("#title .text").animate({
		width: "+=50px"
	}, 5000, function() {
		// animation complete
	})
}

function animate_title() {
	swoop_symbol("#title h1", "Dion Lao", "_", 5, false);

}

function swoop_symbol(divtext, text, symbol, frameRate, infinite) {

	div = $(divtext);
	originText = text;
	if (i<text.length) {
		text = text.substring(0,i) + symbol + text.substring(i+1, text.length);
		$(div).html(text);
	} else if (i > text.length + 20) {
		i = 0;
		if (!infinite)
			return;
	} else {
		$(div).text(text);

	}
	counter ++;

	if (counter > frameRate) {
		i++;
		counter = 0;
	}

	requestID = requestAnimationFrame(function() {swoop_symbol(divtext, originText, symbol, frameRate, infinite)});

}

function init_hovers() {
	$( "#subheading-wrapper .right" ).hover(
		function() {
			//$( "#subheading-wrapper .right .text" ).slideIn("slow");
			console.log("in");
	  	}, function() {
	    	//$( "#subheading-wrapper .right .text" ).fadeOut("slow");
	  }
	);

	$("#title .text").mouseover(function() {
		i = 0;
		window.cancelAnimationFrame(requestID);
		//swoop_symbol("#title h1", "Dion Lao", "  ", 2, false);
		swoop_symbol("#title h2", "Information Technology and Mechatronics Engineering", "劉忠銘", 1, false);
	})
}
