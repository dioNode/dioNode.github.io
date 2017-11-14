$(document).ready(function() {
	$("body").children().hide();
	$("body").children().fadeIn(2000);

	AOS.init({
      offset: 200,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 100,
    });
});	