$(document).ready(function(){

/* JS for Slider work*/
var sldWidth = 480;
var sldTime;

$(".slider-block").width($(".slider-block").children().size()*sldWidth);
sldTime = setInterval(nextSlide, 2000);

$(".slider-block").hover(function(){
	clearInterval(sldTime);
},function(){
	sldTime = setInterval(nextSlide,2000);
});

function nextSlide(){
	var currentSlide = parseInt($(".slider-block").data("current"));
	currentSlide++;
	
	if(currentSlide >= $(".slider-block").children().size()){
		currentSlide = 0;
		$(".slider-block").animate({left:0}, 0).data("current", currentSlide);
	};

	$(".slider-block").animate({left:-sldWidth*currentSlide}, 300).data("current", currentSlide);
};
});