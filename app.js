window.addEventListener('load', function() {
    new Glider(document.getElementById('carrusel'), {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: '.carousel__indicadores',
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        },
        responsive: [{
            // screens greater than >= 775px
            breakpoint: 450,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 4,
                slidesToScroll: 2
            }
        }, {
            // screens greater than >= 1024px
            breakpoint: 800,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2
            }
        }]
    });
});

window.addEventListener('load', function() {
    new Glider(document.getElementById('carrusel2'), {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: '.p-indicadores',
        arrows: {
            prev: '.p-anterior',
            next: '.p-siguiente'
        },
        responsive: [{
            // screens greater than >= 775px
            breakpoint: 450,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 4,
                slidesToScroll: 2
            }
        }, {
            // screens greater than >= 1024px
            breakpoint: 800,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2
            }
        }]
    });
});

window.addEventListener('load', function() {
    new Glider(document.getElementById('carrusel3'), {
        slidesToShow: 6,
        slidesToScroll: 2,
        dots: '.a-indicadores',
        arrows: {
            prev: '.a-anterior',
            next: '.a-siguiente'
        },
        responsive: [{
            // screens greater than >= 775px
            breakpoint: 450,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 6,
                slidesToScroll: 2
            }
        }, {
            // screens greater than >= 1024px
            breakpoint: 800,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 2
            }
        }]
    });
});

window.addEventListener('load', function() {
    new Glider(document.getElementById('carrusel4'), {
        slidesToShow: 6,
        slidesToScroll: 2,
        dots: '.a-indicadores2',
        arrows: {
            prev: '.a-anterior2',
            next: '.a-siguiente2'
        },
        responsive: [{
            // screens greater than >= 775px
            breakpoint: 450,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 6,
                slidesToScroll: 2
            }
        }, {
            // screens greater than >= 1024px
            breakpoint: 800,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 2
            }
        }]
    });
});

window.addEventListener('load', function() {
    new Glider(document.getElementById('carrusel5'), {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: '.a-indicadores5',
        arrows: {
            prev: '.a-anterior5',
            next: '.a-siguiente5'
        },
        responsive: [{
            // screens greater than >= 775px
            breakpoint: 450,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            // screens greater than >= 1024px
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }]
    });
});