$(document).ready(function(){
/*Global variable*/
/*--------------Start slider code -----------------------*/
var sliderWork;
var sldChild = $(".slider-block").children().size();
var currentSlide = parseInt($(".slider-block").data("current"));

sliderWork = setInterval(nextSlide, 5000);

$(".slider-block, label").hover(function(){
	clearInterval(sliderWork);
},function(){
	sliderWork = setInterval(nextSlide,5000);
});

$('input[type="radio"]').click(function(){
	var numCarItem = parseInt($(this).attr("id"));
	$(".slider-block li").eq(numCarItem).animate({opacity:1},1000).data("current",numCarItem);
	$(".slider-block li").eq(currentSlide).animate({opacity:0},2000);
	currentSlide = numCarItem;
});
function nextSlide(){
	$(".slider-block li").eq(currentSlide).animate({opacity:0},3000);
	currentSlide++;
	if(currentSlide == sldChild){
		currentSlide =0;
	}
	$(".slider-block li").eq(currentSlide).animate({opacity:1},1000);
	$(".slider-block").data("current",currentSlide);
	$('input[type="radio"]').eq(currentSlide).prop("checked",true);

};
/*----------------end slider ---------------------*/

});