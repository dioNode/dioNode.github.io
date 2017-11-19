var experiences = {};
var min;
var max;

$(document).ready(function() {
	$("body").children().hide();
	$("body").children().fadeIn(2000);
	$("#experiences .exp").children().hide();

	AOS.init({
	    offset: 200,
	    duration: 1000,
	    easing: 'ease-in-sine',
	    delay: 100,
 	 });

	storeDates();
	arrangeExperiences();

	init_expand_interactions();
	init_home_interaction();
	init_skills_interaction();
});

function init_skills_interaction() {
	$("#skills .skill p").hide();
	$("#skills .skill").hover(function(){
		$(this).find("p").show();
	}, function() {
		$(this).find("p").hide();
	})
}

function init_expand_interactions() {
	$("#experiences .exp").click(expandExperience);
	$("section").click(function(event){
		event.preventDefault();
		if($(event.target).closest('#timeline .exp').length != 1){
			hideExperiences();
		}
	});
}



function expandExperience() {
	//this.prevendDefault();
	hideExperiences();
	$(this).addClass("expanded").find(".container").show();
	$(this).animate({
		width: $(this).get(0).scrollWidth,
		height: $(this).get(0).scrollHeight,
		opacity: 0.9
	}, 400);
	var imgurl = $(this).find(".background").attr("src");
	$(this).css("background-image", 'url("'+imgurl+'")');
}

function hideExperiences() {
	console.log(this.defaultPrevented);
	for (var date in experiences) {
		hideExperience(experiences[date]);
	}
}

function hideExperience(exp) {
	$(exp).children().hide();
	$(exp).removeClass("expanded");
	$(exp).animate({
		width: "30px",
		height:"30px",
		opacity: 1
	},200)
	var imgurl = $(exp).find(".icon").attr("src");
	$(exp).css("background-image", 'url("'+imgurl+'")');
}

function storeDates() {
	min = null;
	max = null;
	$( "#experiences .exp" ).each(function( index ) {
		var tag = $(this).attr("tag");
		experiences[tag] = $(this);
		if (min==null || tag < min)
			min = tag;
		if (max==null || tag > max)
			max = tag;
	});
}

function arrangeExperiences() {
	for (var date in experiences) {
		var percentage = 100*(date-min)/(max-min);
		$(experiences[date]).css("top",percentage+"%");
		var imgurl = $(experiences[date]).find(".icon").attr("src");
		$(experiences[date]).css("background-image", 'url("'+imgurl+'")');
	}
}
