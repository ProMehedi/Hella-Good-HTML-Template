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

        // BBQ Testimonial Slider
        $('#bbq_testimonial_slide').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: false,
        });

        // Dounts Slider
        $('#dounts_slide').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: false,
        });

        // Dounts Testimonial Slider
        $('#dounts_testimonial_slide').owlCarousel({
            items: 3,
            loop: true,
            dots: false,
            nav: false,
            margin: 30,
            responsive : {
                0 : {
                    items: 1,
                },
                480 : {
                    items: 1,
                },
                768 : {
                    items: 2,
                },
                1100 : {
                    items: 3,
                }
            }
        });

        // Burrito Testimonial Slider
        $('#burrito_testimonial_slide').owlCarousel({
        	items: 3,
        	loop: true,
        	dots: false,
        	nav: false,
            margin: 30,
            responsive : {
                0 : {
                    items: 1,
                },
                480 : {
                    items: 1,
                },
                768 : {
                    items: 2,
                },
                1100 : {
                    items: 3,
                }
            }
        });

        // Mobile Menu / Activate slicknav
        $('.main-menu').slicknav({
            appendTo: '.mobile-menu'
        });

        // Subs Image Slider
        var $owl = $('#subs_img');

        $owl.children().each( function( index ) {
          $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
        });
        $owl.owlCarousel({
          center: true,
          loop: true,
          items: 3,
          responsive : {
            0 : {
                items: 1,
            },
            480 : {
                items: 1,
            },
            768 : {
                items: 1,
            },
            1100 : {
                items: 3,
            }
        }
        });
        $(document).on('click', '.owl-item .single-subs-img', function() {
            $owl.trigger('to.owl.carousel', $(this).data( 'position' ) );
        });

        // Burrito Image Slider
        var $owl_burrito = $('#burrito_img');
        $owl_burrito.children().each( function( index ) {
          $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
        });
        $owl_burrito.owlCarousel({
          center: true,
          loop: true,
          items: 3,
          nav: true,          
          navText: ["<img src='./assets/img/burrito/arrow-left.png'>","<img src='./assets/img/burrito/arrow-right.png'>"],
          responsive : {
            0 : {
                items: 1,
            },
            480 : {
                items: 1,
            },
            768 : {
                items: 1,
            },
            1100 : {
                items: 3,
            }
        }
        });

        $(document).on('click', '.owl-item .single-subs-img', function() {
            $owl_burrito.trigger('to.owl.carousel', $(this).data( 'position' ) );
        });

        // Activate the Isotope Plugin for Portfolio
        var portfolio = $('#works');
        var $grid = $('#works');

        $grid.isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer'
            }
        });

        // filter items on button click
        $('.portfolio-filters li').on( 'click', function(e) {
            e.preventDefault();
            var filterValue = $(this).attr('data-filter');
            portfolio.isotope({ filter: filterValue });
            $('.portfolio-filters li').removeClass('active');
            $(this).addClass('active');
        });

    });
})(jQuery);