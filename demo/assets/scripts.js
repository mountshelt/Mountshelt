
		$('.sponsors-slider').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav: false,
            autoplay: true,
			autoplayTimeout: 2500,
            navText: ["<i class='icofont icofont-thin-left'></i>", "<i class='icofont icofont-thin-right'></i>"],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });



	