$(document).ready(function() {
    $("#owl-demo02").owlCarousel({
        autoPlay: false,
        items : 3,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [979,4],
        itemsTablet: [768,4],
        itemsMobile : [479,3],


 // Navigation
 navigation : true,
 navigationText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
 rewindNav : true,
 scrollPerPage : false,

 
//Mouse Events
dragBeforeAnimFinish : true,
mouseDrag : true,
touchDrag : true,

//Pagination
pagination : false,
paginationNumbers: false,
});

});
