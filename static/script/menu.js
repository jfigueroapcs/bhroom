$(function() {
    const $menu = $("#navigation").clone();
    $menu.attr( "id", "mobile-menu" );
    $menu.mmenu({
        extensions	: [ 'effect-slide', 'pageshadow' ],
        header		: true,
        searchfield	: false,
        counters	: false
    });
});