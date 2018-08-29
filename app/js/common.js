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

var sendForm = function(btn) {
    $(btn).on('click', function(event) {
        event.preventDefault();
        var form = $(this).closest('form');
        ajax(form);
    });
}

var ajax = function(form) {

    function randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1)
        rand = Math.round(rand);
        return rand;
    }

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    var sessionNumber = randomInteger(10000, 99999);

    // var formtarget = form,
    //     msg = $(formtarget).serialize(),
    //     jqxhr = $.post("./ajax.php", msg, onAjaxSuccess);











    /* данные для теста */

    $.getJSON("./data.json", function(data) {
        onAjaxSuccess(data);
    });

    /* данные для теста */






    

    function onAjaxSuccess(json) {

        // var json = JSON.parse(data),
        var status = json.status,
            message = json.message;

        if (status === 'success') {
            $('input, textarea, button', form).each(function() {
                $(this).prop("disabled", "true");
                $(this).parent().addClass('disabled')
            });

        }

        clearNotify();
        addNotify(status, message, sessionNumber)

    }

    var addNotify = function(status, message, id) {
        $('body').append('<p class="c-notify c-notify--' + status + '" id="' + id + '">' + message + '</p>');
        setTimeout(function() {
            clearNotify(id)
        }, 8000)
    }

    var clearNotify = function(id) {
        var selector = '.c-notify';
        if (isNumeric(id)) selector = '#' + id;

        $('body').find(selector).remove();
    }

}

$(function() {

    menu()

    isFocus()

    sendForm('.b-form__btn');

    if ($('.b-slider').length > 0) {
        $('.b-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
        })
    }

});