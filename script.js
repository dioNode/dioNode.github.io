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

$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
		start_main_animation();
	}, 2000);
	
});

function start_main_animation() {
	$("#logo").fadeTo( 3000 , 0.3, function() {
    	animate_title();
  	});
}

function animate_title() {
	var title = "Dion sup";
}
