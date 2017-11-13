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
var toggleSpeed = 500;
var expandDistance = 200;
var transitionTimer = 2000;

$(document).ready(function() {

	init_hovers();
	init_transition_animations();

	
	setTimeout(function(){
		$('body').addClass('loaded');
		start_main_animation();
	}, 2000);


});	

function start_main_animation() {
	$("#logo").fadeTo( 3000 , 0.3, function() {
  	});
  	$("#title .text").fadeTo(3000, 1);
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
	//swoop_symbol("#title h1", "Dion Lao", "_", 5, false);

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

function init_transition_animations() {
	$("#subheading-wrapper .right").click(transitionRight);
	$("#subheading-wrapper .left").click(transitionLeft);
}

function transitionRight() {
	$("#subheading-wrapper .right").unbind("mouseenter mouseleave").removeClass("highlighted");
	$("#subheading-wrapper .right").children().fadeOut(transitionTimer);
	$(":not(#subheading-wrapper .right)").fadeOut(transitionTimer);
	$("#subheading-wrapper .right").animate({opacity:"1", width:"100%", zIndex:"1004", backgroundColor:"white"}, transitionTimer);
}

function transitionLeft() {
	$("#subheading-wrapper .left").unbind("mouseenter mouseleave").removeClass("highlighted");
	$("#subheading-wrapper .left").children().fadeOut(transitionTimer);
	$(":not(#subheading-wrapper .left)").fadeOut(transitionTimer);
	$("#subheading-wrapper .left").animate({opacity:"1", width:"100%", zIndex:"1004", backgroundColor:"white"}, transitionTimer);
}

function init_hovers() {
	$( "#subheading-wrapper .left .text" ).animate({fontSize:"toggle"}, toggleSpeed);
	$( "#subheading-wrapper .right .text" ).animate({fontSize:"toggle"}, toggleSpeed);


	$("#title .text").mouseover(function() {
		//i = 0;
		//window.cancelAnimationFrame(requestID);
		//swoop_symbol("#title h1", "Dion Lao", "劉忠銘", 2, false);
		if (i==0)
			swoop_symbol("#title h2", "Information Technology and Mechatronics Engineering", "&nbsp &nbsp", 1, false);
	})


	$( "#subheading-wrapper .right" ).hover(
		function() {
			$("#subheading-wrapper .right").addClass("highlighted");
			$("#subheading-wrapper .right .text" ).stop( true, true ).animate({fontSize:"toggle"}, toggleSpeed);
			$("#subheading-wrapper .right .upper.cogwheel").addClass("spin").stop( true, true ).animate({top:"-="+expandDistance+"px"}, toggleSpeed);
			$("#subheading-wrapper .right .lower.cogwheel").addClass("spin").stop( true, true ).animate({top:"+="+expandDistance+"px"}, toggleSpeed);
			$("#subheading-wrapper .right .orb").stop( true, true ).animate({height: ""+expandDistance*2+"px", top: "-="+expandDistance+"px"}, toggleSpeed);
	  	}, function() {
	    	$("#subheading-wrapper .right .text" ).stop( true, true ).animate({fontSize:"toggle"}, toggleSpeed);
	    	$("#subheading-wrapper .right .upper.cogwheel").removeClass("spin").stop( true, true ).animate({top:"+="+expandDistance+"px"}, toggleSpeed);
	    	$("#subheading-wrapper .right .lower.cogwheel").removeClass("spin").stop( true, true ).animate({top:"-="+expandDistance+"px"}, toggleSpeed);
	    	$("#subheading-wrapper .right .orb").stop( true, true ).animate({height: "10px", top: "+="+expandDistance+"px"}, toggleSpeed);
	    	$("#subheading-wrapper .right").removeClass("highlighted");
	  }
	);


	$( "#subheading-wrapper .left" ).hover(
		function() {
			$("#subheading-wrapper .left").addClass("highlighted");
			$("#subheading-wrapper .left .text" ).stop( true, true ).animate({fontSize:"toggle"}, toggleSpeed);
			$("#subheading-wrapper .left .upper.cogwheel").addClass("spin").stop( true, true ).animate({top:"-="+expandDistance+"px"}, toggleSpeed);
			$("#subheading-wrapper .left .lower.cogwheel").addClass("spin").stop( true, true ).animate({top:"+="+expandDistance+"px"}, toggleSpeed);
			$("#subheading-wrapper .left .orb").stop( true, true ).animate({height: ""+expandDistance*2+"px", top: "-="+expandDistance+"px"}, toggleSpeed);
	  	}, function() {
	    	$("#subheading-wrapper .left .text" ).stop( true, true ).animate({fontSize:"toggle"}, toggleSpeed);
	    	$("#subheading-wrapper .left .upper.cogwheel").removeClass("spin").stop( true, true ).animate({top:"+="+expandDistance+"px"}, toggleSpeed);
	    	$("#subheading-wrapper .left .lower.cogwheel").removeClass("spin").stop( true, true ).animate({top:"-="+expandDistance+"px"}, toggleSpeed);
	    	$("#subheading-wrapper .left .orb").stop( true, true ).animate({height: "10px", top: "+="+expandDistance+"px"}, toggleSpeed);
	    	$("#subheading-wrapper .left").removeClass("highlighted");
	  }
	);

	
/*	$( "#subheading-wrapper .top" ).hover(
		function() {
			$("#subheading-wrapper .top").addClass("highlighted");
			$("#subheading-wrapper .top .text" ).stop( true, true ).animate({fontSize:"toggle"}, toggleSpeed);
			$("#subheading-wrapper .top .lefter.cogwheel").addClass("spin").stop( true, true ).animate({left:"-="+expandDistance+"px"}, toggleSpeed);
			$("#subheading-wrapper .top .righter.cogwheel").addClass("spin").stop( true, true ).animate({left:"+="+expandDistance+"px"}, toggleSpeed);
			$("#subheading-wrapper .top .orb").stop( true, true ).animate({width: ""+expandDistance*2+"px", left: "-="+expandDistance+"px"}, toggleSpeed);
	  	}, function() {
	    	$("#subheading-wrapper .top .text" ).stop( true, true ).animate({fontSize:"toggle"}, toggleSpeed);
	    	$("#subheading-wrapper .top .lefter.cogwheel").removeClass("spin").stop( true, true ).animate({left:"+="+expandDistance+"px"}, toggleSpeed);
	    	$("#subheading-wrapper .top .righter.cogwheel").removeClass("spin").stop( true, true ).animate({left:"-="+expandDistance+"px"}, toggleSpeed);
	    	$("#subheading-wrapper .top .orb").stop( true, true ).animate({width: "10px", left: "+="+expandDistance+"px"}, toggleSpeed);
	    	$("#subheading-wrapper .top").removeClass("highlighted");
	  }
	);*/

	
}
