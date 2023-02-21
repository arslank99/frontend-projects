// First Slider carousel
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:1,
        margin:10,
        autoHeight:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
    });
    
});

// 2nd Slider carousel
$('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
})
