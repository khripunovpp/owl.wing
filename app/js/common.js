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

$(function() {

    menu()

});