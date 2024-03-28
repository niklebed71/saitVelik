

//Burger      
   $(document).ready(function(){
      $(".icon-menu").click(function(event) {
         $(".icon-menu, .menu__body").toggleClass("active");
      });
  });

  //IBG  Js
document.querySelectorAll(".ibg").forEach(el => {
   if(el.querySelector('img')){
      el.style.backgroundImage = 'url('+el.querySelector('img').getAttribute('src')+')';
      el.querySelector('img').style.display = 'none';
   }
});

  //   ibg  Jquery
 /* function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();

//SLIDERS
if($('.slider__body').length>0){
	$('.slider__body').slick({
		//autoplay: true,
		//infinite: false,
		dots: true,
		arrows: false,
		accessibility:false,
		slidesToShow:1,
		autoplaySpeed: 3000,
		//asNavFor:'',
		//appendDots:
		//appendArrows:$('.mainslider-arrows .container'),
		nextArrow:'<button type="button" class="slick-next"></button>',
		prevArrow:'<button type="button" class="slick-prev"></button>',
		responsive: [{
			breakpoint: 768,
			settings: {}
		}]
	});
} 
*/ 
// SLIDER
$(document).ready(function(){
	$(".slider__body").slick({
		arrows:false,
		dots:true,
		adaptiveHeight:true
	}); 
	});
