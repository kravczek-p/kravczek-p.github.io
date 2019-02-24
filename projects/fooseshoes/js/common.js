

(function ($) {
    $(document).ready(function () {
        console.log('click');
        $('.mobile-menu').on('click', function () {
         
            $('.mobile-menu__icon').toggleClass('open');
            $('.menu__nav').toggleClass('opened');
        });
    });

})(jQuery);