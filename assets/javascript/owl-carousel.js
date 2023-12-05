$(document).ready(function () {
    $('.testimonial-carousel').owlCarousel({
        items: 1,
        loop: true,
        // autoplay: true,
        autoplayTimeout: 2000,
        // autoplayHoverPause: true,  
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 2,

            },
            1000: {
                items: 2
            }
        },
        nav: true,
        navText: [
            '<button class="test-prev">Prev</button>',
            '<button class="test-next">Next</button>'
        ]
    });
});



$(document).ready(function () {
    $('.client-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        // autoplayHoverPause: true,  
        responsive: {
            0: {
                items: 3,

            },
            600: {
                items: 3,

            },
            1000: {
                items: 4,
            }
        }
    });
});




