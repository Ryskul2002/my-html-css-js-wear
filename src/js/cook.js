$('.header__btns').on('click', function () {
    // $('.overlay').addClass('overlay__active')
    $('.cook').fadeIn('slow')
    $('.cook__form').addClass('cook__form_active')
});


$('.cook__close').on('click', function () {
    $('.cook').fadeOut('slow')
    $('.overlay__form').removeClass('cook__form_active')
    $('.overlay__thanks').removeClass('cook__thanks_active')
});


$('.cook__btns').on('click', function (event) {
    event.preventDefault();
    $('.overlay__form').removeClass('overlay__form_active')
    $('.overlay__thanks').addClass('overlay__thanks_active')
});