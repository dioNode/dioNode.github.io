var experiences = {};
var min;
var max;

$(document).ready(function() {
	$("body").children().hide();
	$("body").children().fadeIn(2000);
	$("#experiences .exp").children().hide();

	init_scroll_fades();

	storeDates();
	arrangeExperiences();

	init_expand_interactions();
	init_home_interaction();
	init_skills_interaction();
	init_hobby_floats();
	
});


function init_hobby_floats() {
	$(".hobby").jqFloat({
		width: $("#hobbies .container").width()*0.7,
		height: $("#hobbies .container").height()*0.7,
		speed: 4000
	});
	$(".hobby").children().hide();
	$(".hobby").each(function(){
		var icon = $(this).find(".icon").attr("src");
		$(this).css("background-image","url('"+icon+"')");
	});


	$(".hobby").click(function(){
		$(this).jqFloat("stop");
		$(this).children(":not(img)").fadeIn();
		if (isOverflow($(this))){
			inflate($(this));
		}
		$(this).css("background-image", "none");
	})

	$(".hobby").hover(function(){

		$(this).addClass("hovering");
		$(this).stop().jqFloat("stop");
		
	}, function(){

		$(this).animate({
			width: "70px",
			height: "70px"
		}, {
			duration: 400,
			complete: function() {
				$(this).jqFloat("play");
			}
		})
		$(this).removeClass("hovering");
		$(this).children().hide();
		var icon = $(this).find(".icon").attr("src");
		$(this).css("background-image","url('"+icon+"')");
		
	})
}

function inflate(div) {
	$(div).animate({
		width : "+=10px",
		height: "+=10px",
	}, {
		duration: 40,
		complete: function() {
			if (isOverflow(div))
				inflate($(div));
			console.log("cool");
		}
	});
}

function isOverflow(div) {
	return $(div)[0].scrollHeight > $(div)[0].clientHeight || $(div)[0].scrollWidth > $(div)[0].clientWidth;
}

function init_scroll_fades() {
	AOS.init({
	    offset: 200,
	    duration: 1000,
	    easing: 'ease-in-sine',
	    delay: 0,
 	 });

}

function init_skills_interaction() {
	$("#skills .skill").hover(function(){

		$(this).stop().animate({
			height: $(this).get(0).scrollHeight
		}, 400);

	}, function() {
		$(this).stop().animate({
			height: "15px"
		}, 400);
	})

	$("#skills .skill").each(function() {
		var progress = $(this).attr("tag");
		$(this).find(".progress").get(0).style.setProperty("--progress",progress);
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

	$("#experiences .exp").hover(function(){
		if ($(this).hasClass("expanded"))
			return;
		$(this).stop().animate({width:"40px", height: "40px"},200);
		$(this).append("<div class='age'>"+Math.floor($(this).attr("tag"))+"</div>");
		/*var icon = $(this).find(".icon").attr("src");
		$(this).css("background-image",icon);*/
	}, function() {
		if ($(this).hasClass("expanded"))
			return;
		$(this).stop().animate({width:"30px", height:"30px"}, 200);
		$(".age").remove();

		//$(this).css("background-image","none");
	})
}



function expandExperience() {
	//this.prevendDefault();
	hideExperiences();
	$(this).addClass("expanded").find(".container").show();
	$(this).stop().animate({
		width: $(this).get(0).scrollWidth,
		height: $(this).get(0).scrollHeight,
		opacity: 0.9
	}, 400);
	var imgurl = $(this).find(".background").attr("src");
	$(this).css("background-image", 'url("'+imgurl+'")');
	$(this).css("z-index",101);
}

function hideExperiences() {
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
	$(exp).css("z-index",100);
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
	/*min = 1997;
	var d = new Date();
	max = d.getFullYear();*/
	for (var date in experiences) {
		var percentage = 100*(date-min)/(max-min);
		$(experiences[date]).css("top",percentage+"%");
		var imgurl = $(experiences[date]).find(".icon").attr("src");
		$(experiences[date]).css("background-image", 'url("'+imgurl+'")');
	}
}
