(function ($) {
    "use strict";
    jQuery(document).ready(function() {
        // Header Slider
        $('#header_slider').owlCarousel({
        	items: 1,
        	loop: true,
        	dots: false,
        	nav: true,
        	navText: ["<img src='./assets/img/icons/arrow-left.png'>","<img src='./assets/img/icons/arrow-right.png'>"]
        });

        // Footer Slider
        $('#footer_slider').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: true,
            navText: ["<img src='./assets/img/icons/arrow-left.png'>","<img src='./assets/img/icons/arrow-right.png'>"]
        });

        // Footer Slider
        $('#pizza_slide').owlCarousel({
        	items: 1,
        	loop: true,
        	dots: false,
        	nav: true,
        	navText: ["<i class='fa fa-chevron-left'>","<i class='fa fa-chevron-right'>"]
        });

        $('.main-menu').slicknav({
            appendTo: '.mobile-menu'
        });
    });
})(jQuery);