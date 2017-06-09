$(document).ready(function() {

//slider on home page
var mySwiper = new Swiper('.swiper-container.swiper-main', {
    speed: 400,
    spaceBetween: 100,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    pagination: '.swiper-pagination-main',
    paginationClickable: true
});

function filterViewSlide() {
    var mySwiper = new Swiper('.mob_slide_prod', {
        speed: 400,
        slidesPerView: 3,
    		breakpoints: {
              1200: {
                slidesPerView: 1,
                autoplay: 4000
              }
            }
    });
}
filterViewSlide();
$(window).resize(function() { 
    filterViewSlide();
});



//countdown
$(".getting-started")
  .countdown("2017/05/25", function(event) {
    $(this).text(
      event.strftime('%H:%M:%S')
    );
});

//mobile menu
$(document).on("click", ".hamburger", function(){
	$(this).toggleClass("is-active");
    $(".toggleMenu").toggleClass("menu-open");
});

$(document).on("click", ".sidebar", function(){
    $(".sidebar_arrow").toggleClass("rotate");
});

// cut function
function filterView() {
 if (window.matchMedia('(max-width: 991px)').matches) {  
        $('.sidebar').detach().appendTo('.product-section .title_sub_title');
    } 
    else{  
        $('.sidebar').detach().prependTo('._display');
    };
}
filterView();
$(window).resize(function() { 
    filterView();
});



//slider on detail page
var galleryTop = new Swiper('.gallery-top', {
	speed: 400,
    spaceBetween: 10,
    grabCursor: true,
    slideToClickedSlide: false
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 15,
    slidesPerView: 3.5,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    nextButton: '.thumbs-next',
    prevButton: '.thumbs-prev',
     breakpoints: {
        991: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        544: {
          slidesPerView: 2.7,
          spaceBetween: 20
        },
    },
    // loop:true,
    loopedSlides: 1
});
galleryTop.params.control = galleryThumbs;
galleryThumbs.params.control = galleryTop;
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})





// cut function
function filterView2() {
		if (window.matchMedia('(max-width: 991px) and (min-width: 767px)').matches) {  
        $('.fan-box').detach().appendTo('.grey-box');
    } 
    else{  
        $('.fan-box').detach().appendTo('.slider-item-box');
    };
}
filterView2();
$(window).resize(function() { 
    filterView2 ();
});