$(document).ready(function () {
    $('.testimonial-carousel').owlCarousel({
        items: 1,
        loop: true,
        // autoplay: true,
        autoplayTimeout: 2000,
        // autoplayHoverPause: true,  
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
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
                items: 3
            },
            768: {
                items: 3
            },
            992: {
                items: 5
            }
        }
    });
});