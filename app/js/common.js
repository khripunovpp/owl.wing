var menu = function() {
    var menu = $('.b-menu'),
        tail = $('.w-body'),
        toggleBtn = $('.b-header__toggle'),
        closeBtn = $('.b-menu__close');

    $(toggleBtn).on('click', function(event) {
        event.preventDefault();
        $('body').addClass('menu-opened');
        $(tail).addClass('translated');
        $(menu).addClass('opened');
    });

    $(closeBtn).on('click', function(event) {
        event.preventDefault();
        $(menu).removeClass('opened');
        $(tail).removeClass('translated');
        $('body').removeClass('menu-opened');
    });
}

var isFocus = function() {
    $('.b-form__field').on('focus', function() {
        $(this).closest('.b-form__group').find('.b-form__label').fadeOut(200);
    });
    $('.b-form__field').on('blur', function() {
        var value = $(this).val();
        if(value.length == 0) $(this).closest('.b-form__group').find('.b-form__label').fadeIn(200);
    });
}

$(function() {

    menu()

    isFocus()

});