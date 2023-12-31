$(document).ready(function() {
    // pensiero
    $('.pensiero-img-box').on('mouseover', function () {
        $('.pensiero-sm-img').attr('src', 'assets/images/pensiero-sm-2.png');
    });

    $('.pensiero-img-box').on('mouseleave', function () {
        $('.pensiero-sm-img').attr('src', 'assets/images/pensiero-sm-1.png');
    });

    // penso
    $('.penso-img-box').on('mouseover', function () {
        $('.penso-sm-img').attr('src', 'assets/images/penso-sm-2.png');
    });

    $('.penso-img-box').on('mouseleave', function () {
        $('.penso-sm-img').attr('src', 'assets/images/penso-sm-1.png');
    });

    // Volto
    $('.volto-img-box').on('mouseover', function () {
        $('.volto-sm-img').attr('src', 'assets/images/volto-sm-2.png');
    });

    $('.volto-img-box').on('mouseleave', function () {
        $('.volto-sm-img').attr('src', 'assets/images/volto-sm-1.png');
    });

    // monaco
    $('.monaco-img-box').on('mouseover', function () {
        $('.monaco-sm-img').attr('src', 'assets/images/monaco-sm-2.png');
    });

    $('.monaco-img-box').on('mouseleave', function () {
        $('.monaco-sm-img').attr('src', 'assets/images/monaco-sm-1.png');
    });

    // nova
    $('.nova-img-box').on('mouseover', function () {
        $('.nova-sm-img').attr('src', 'assets/images/nova-sm-2.png');
    });

    $('.nova-img-box').on('mouseleave', function () {
        $('.nova-sm-img').attr('src', 'assets/images/nova-sm-1.png');
    });

    // monaco
    $('.bello-img-box').on('mouseover', function () {
        $('.bello-sm-img').attr('src', 'assets/images/bello-sm-2.png');
    });

    $('.bello-img-box').on('mouseleave', function () {
        $('.bello-sm-img').attr('src', 'assets/images/bello-sm-1.png');
    });

    let menutoggle = document.querySelector('.toggle');
    menutoggle.onclick = function () {
        menutoggle.classList.toggle('active');
    };

    $('.sidebar-menu-list').hide();
    $('.sidebar-toggle-btn').click(function () {
        $('.sidebar-menu-list').toggle();
    });

    window.onload = function () {
        document.getElementById('body').classList.add('loaded');
    };

    // sadadad
    $(document).ready(function () {
        const sections = $('.section');
        const navLinks = $('.sidebar-menu');

        function makeLinkActive() {
            let index = sections.length;
            while (
                --index &&
                $(window).scrollTop() + 50 < $(sections[index]).offset().top
            ) {}
            navLinks.removeClass('active');
            $(navLinks[index]).addClass('active');
        }

        // Add event listener for scrolling
        $(window).on('scroll', makeLinkActive);
    });

    $('.js-modal-btn').modalVideo();

    new fullpage('#fullpage', {
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        // autoScrolling: false,
        // navigation: true,
        anchors: [
            'section-one',
            'section-two',
            'section-three',
            'section-four',
        ],
        dragAndMove: true,
        // navigationPosition: 'left',
        // navigationTooltips: [
        //     'mypage',
        //     'secondPage',
        //     '3rdPage',
        //     '4thpage',
        //     'lastPage',
        // ],
        // showActiveTooltips: true,
    });

    // Slick Slider

    $('.pensiero-slider-1').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
    });

    $('.pensiero-slider-3').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
    });

    $('.pensiero-slider-4').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
    });
});