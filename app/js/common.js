var menu = function() {
    var menu = $('.b-menu'),
        link = $('.b-menu__link'),
        tail = $('.w-body'),
        toggleBtn = $('.b-header__toggle'),
        closeBtn = $('.b-menu__close');

    $(toggleBtn).on('click', function(event) {
        event.preventDefault();
        open()
    });

    $(closeBtn).on('click', function(event) {
        event.preventDefault();
        close()
    });

    function open() {
        $('body').addClass('menu-opened');
        $(tail).addClass('translated');
        $(menu).addClass('opened');
    }

    function close() {
        $(menu).removeClass('opened');
        $(tail).removeClass('translated');
        $('body').removeClass('menu-opened');
    }

    $(link).on('click', function() {
        close()
    });
}

var isFocus = function() {
    $('.b-form__field').on('focus', function() {
        $(this).closest('.b-form__group').find('.b-form__label').fadeOut(200);
    });
    $('.b-form__field').on('blur', function() {
        var value = $(this).val();
        if (value.length == 0) $(this).closest('.b-form__group').find('.b-form__label').fadeIn(200);
    });
}

$(function() {

    menu()

    isFocus()

    $('.b-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });

});