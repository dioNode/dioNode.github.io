$(document).ready(function() {
	$("body").children().hide();
	$("body").children().fadeIn(2000);

	init_home_interaction();
	init_portfolio_hovers();
	init_portfolio_interactions();
});

function init_portfolio_hovers() {
	$("#portfolios .work-container").hover(function(){
		$(this).addClass("bulge");
	}, function(){
		$(this).removeClass("bulge");
	})
}

function init_portfolio_interactions() {
	$("#popup-container").click(function(){
		event.preventDefault();
		if($(event.target).closest("#info-container").length != 1){
			closePortfolio();
		}
	})

	$("#portfolios .work-container").click(function(){
		openPortfolio();
		var heading = $(this).find("h1").text();
		var subheading = $(this).find("h2").text();
		$("#popup-container h1").text(heading);
		$("#popup-container h2").text(subheading);
	})
}

function openPortfolio() {
	$("#popup-container").fadeIn(300);
}

function closePortfolio() {
	$("#popup-container").fadeOut(300);
}
