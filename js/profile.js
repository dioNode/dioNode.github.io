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

	$("#experiences .exp").click(expandExperience);
});

function expandExperience() {
	hideExperiences();
	$(this).addClass("expanded").children().show();
	$(this).animate({
		width: $(this).get(0).scrollWidth,
		height: $(this).get(0).scrollHeight,
		opacity: 0.9
	}, 400);

}

function hideExperiences() {
	$("#experiences .exp").children().fadeOut();
	$("#experiences .exp").animate({
		width: "30px",
		height:"30px",
		opacity: 1
	},200)
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
		var imgurl = $(experiences[date]).find("img").attr("src");
		console.log(imgurl);
		$(experiences[date]).css("background-image", 'url("'+imgurl+'")');
	}
}
