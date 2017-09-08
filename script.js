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

var timer;

$(document).ready(function(){

	$(window).scroll(function (event) {
	    var scroll = $(window).scrollTop();
	    var sections = $("section");
	    var temp = [];
	    var milestones = $(".milestone");
	    if (milestones.length!= 0){
	    	temp.push(sections[0]);
	    	for (var i=0; i<milestones.length;i++){
	    		temp.push(milestones[i]);
	    	}
	    	sections = temp;
	    }
	    console.log(sections);
	    var section = 0;
	    for (var j = 0; j<sections.length; j++){
	    	var sectionScroll = $(sections[j]).offset().top-400;
	    	if (scroll>sectionScroll){
	    		section=j;
	    	}
	    }
	    $(".pointers").removeAttr("id");
	    section+=2;
		$(".pointers:nth-of-type("+section+")").attr("id","current");
	});

	$( "#toolbar" ).hover(
		function() {
			$("#tools").stop().slideDown();
		}, function() {
			$("#tools").stop().slideUp();
		}
	);

	$( "#infoCover" ).hover(
		function() {
			$("#infoCover .extra").stop().slideDown();
		}, function() {
			$("#infoCover .extra").stop().slideUp();
		}
	);

})

$(document).mousemove(function() {
  $("#downScroll").fadeIn();
  $("#nav").fadeIn();
  $("header").fadeIn();
  clearTimeout(timer);
  timer = setTimeout(mouseStop,1500);
});

function mouseStop(){
	$("#downScroll").fadeOut();
	$("#nav").fadeOut();
	$("header").fadeOut();
}

function selectPointer(event){
	$(".pointers").removeAttr("id");
	$(event.target).attr("id","current");
}

function scrollTo(id) {
	$("html, body").animate({scrollTop: $(id).offset().top }, 1000);
}

function scroll(direction) {
	switch(direction){
		case 0:
			var pointer = $("#current").prev();
			pointer.click();
			break;
		case 1:
			var pointer = $("#current").next();
			pointer.click();
			break;	
	}

}

function dropDown(){
	$("#headerContent").slideDown();
	$("#dropDownArrow").attr("src","images/uparrow.png");
	$("#dropDownArrow").attr("onclick","liftUp()");
}

function liftUp(){
	$("#headerContent").slideUp();
	$("#dropDownArrow").attr("src","images/downarrow.png");
	$("#dropDownArrow").attr("onclick","dropDown()");
}

$( function() {
    $( ".draggable" ).draggable();
  } );