$(document).ready(function () {
    $('.burger').on('click' ,function () {
        $('.header__menu').toggleClass('header__menu_bot')
    });


    $('.header__btn').on('click', function () {
        // $('.overlay').addClass('overlay__active')
        $('.overlay').fadeIn('slow')
        $('.overlay__form').addClass('overlay__form_active')
    });


    $('.overlay__close').on('click', function () {
        $('.overlay').fadeOut('slow')
        $('.overlay__form').removeClass('overlay__form_active')
        $('.overlay__thanks').removeClass('overlay__thanks_active')
    });


    $('.overlay__btn').on('click', function (event) {
        event.preventDefault();
        $('.overlay__form').removeClass('overlay__form_active')
        $('.overlay__thanks').addClass('overlay__thanks_active')
    })
});