// JavaScript Document

// loader 
$(window).on('load', function () {
   $('.preloader').addClass('animated fadeOutUp');
   setTimeout(function(){ $('.preloader').addClass('d-none'); }, 1000);
});
// loader

$(document).ready(function()
{

// menu
$(document).ready(function()
{
    // $('.sidenav').sidenav(
    // 	{
    // 		edge: 'right',
    // 		inDuration : 500,
    // 		outDuration : 400
    // 	});
});
// menu

// distortion slider
var slidevalue = 1;
setInterval(function()
{
	if(slidevalue == 8){slidevalue = 0 ;}
	$(".section1 #slider .autoslide").attr('data-slide', slidevalue);
	$(".section1 #slider .autoslide").click();
	 slidevalue++;
},4000);
// distortion slider

// distortion hover
imagesLoaded( document.querySelectorAll('img'), () => {
        document.body.classList.remove('loading');
      });

      Array.from(document.querySelectorAll('.distortion_image')).forEach((el) => {
        const imgs = Array.from(el.querySelectorAll('img'));
        new hoverEffect({
          parent: el,
          intensity: el.dataset.intensity || undefined,
          speedIn: el.dataset.speedin || undefined,
          speedOut: el.dataset.speedout || undefined,
          easing: el.dataset.easing || undefined,
          hover: el.dataset.hover || undefined,
          image1: imgs[0].getAttribute('src'),
          image2: imgs[1].getAttribute('src'),
          displacementImage: el.dataset.displacement
        });
      });
// distortion hover

//button hover
$('.btn-effect1').on('mouseenter', function(e) 
{
  var parentOffset = $(this).offset(),
    relX = e.pageX - parentOffset.left,
    relY = e.pageY - parentOffset.top;
  $(this).find('span').css({top:relY, left:relX})
})
.on('mouseout', function(e) 
{
  var parentOffset = $(this).offset(),
    relX = e.pageX - parentOffset.left,
    relY = e.pageY - parentOffset.top;
  $(this).find('span').css({top:relY, left:relX})
});
//button hover

//scoll animation
$(window).scroll(function() {
    // get the variable of how far we've scrolled from the top
  var offset = $(window).scrollTop();
  offset1 = offset * 0.10;
  offset2 = offset * 0.16;

  // add css transform with the offset variable
  $('.section3 .img1,.section3 .img3').css({
    '-moz-transform': 'rotate(' + offset1 + 'deg)',
    '-webkit-transform': 'rotate(' + offset1 + 'deg)',
    '-o-transform': 'rotate(' + offset1 + 'deg)',
    '-ms-transform': 'rotate(' + offset1 + 'deg)',
    'transform': 'rotate(' + offset1 + 'deg)',
  });
  $('.section3 .img2').css({
    '-moz-transform': 'rotate(-' + offset2 + 'deg)',
    '-webkit-transform': 'rotate(-' + offset2 + 'deg)',
    '-o-transform': 'rotate(-' + offset2 + 'deg)',
    '-ms-transform': 'rotate(-' + offset2 + 'deg)',
    'transform': 'rotate(-' + offset2 + 'deg)',
  });
  
});
//scoll animation

//parallax animation
var rellax = new Rellax('.rellax');
//parallax animation

//garnish animation
var card = $(".garnish");

$(document).on("mousemove",function(e) {  
  var ax = -($(window).innerWidth()/2- e.pageX)/40;
  var ay = ($(window).innerHeight()/2- e.pageY)/100;
  card.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
});
//garnish animation


});





        