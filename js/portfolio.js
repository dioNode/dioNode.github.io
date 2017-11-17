$(document).ready(function() {
	$("body").children().hide();
	$("body").children().fadeIn(2000);

	init_home_interaction();
	init_portfolio_hovers();
});

function init_portfolio_hovers() {
	$("#portfolios .work-container").hover(function(){
		$(this).addClass("bulge");
	}, function(){
		$(this).removeClass("bulge");
	})
}
