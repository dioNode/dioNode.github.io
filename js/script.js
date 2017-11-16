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

function init_home_interaction() {


	$("#cover .home").click(function(){
		transitionHome();
	})

	$( "#cover .home" ).hover(
	  function() {
	    $( this ).stop().animate({opacity:"1"},200);
	  }, function() {
	    $( this ).stop().animate({opacity:"0.7"},200);
	  }
	);
}


function transitionHome() {
	$("body").children().fadeOut(1000, function(){window.open ('../index.html','_self',false)});
}