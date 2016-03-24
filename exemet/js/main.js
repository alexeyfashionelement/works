$(document).ready(function () {

    $(".ca-item img:first").load(function () {
        init();
    });
    //слайдер, высота scroll_block
    init();

    //галлерея
    $(".mainSlider").slides({
        preload: true,
        preloadImage: 'images/loading.gif',
        play: 5000,
        slideSpeed: 550,
        pause: 3500,
        hoverPause: true,
        generateNextPrev: true,
        generatePagination: false
    });
    $(".zoom").colorbox({width: "75%"});
    $(".inline").colorbox({inline: true, width: "75%"});

    //меню мобильная версия
    $(".menu-btn").click(function () {
        $(".header-menu").slideToggle(300);
    });

    $(".header-menu li").click(function () {
        var li = $(this), ul = li.find("ul");

        if (li.hasClass("opened")) {
            li.removeClass("opened");
            ul.slideUp(300);
        } else {
            $(".header-menu li ul").hide();
            $(".header-menu li").removeClass("opened");
            li.addClass("opened");
            ul.slideDown(300);
        }
    });

    //карта
    map();

});

$(window).resize(function () {
    init();
});
function init() {
    var win_height = $(window).height();
    var page_height = win_height - 110;
    $("#scroll_block").height(page_height);


    var w = $(window).width() - 60;
    if ($(window).width() - 60 > 800) w = 700;
    if ($(window).width() - 60 > 1087) w = 1015;

    if (w < 240) w = 240;
    var h = $(".ca-item img").height();
    $(".ca-container, .ca-item").css("height", h);
    $(".ca-item, .main-page-block1 .container").css("width", w);
    $(".ca-nav").remove();
    $('.ca-container').contentcarousel({
        sliderSpeed: 500, // Скорость анимации проскальзывания
        sliderEasing: 'easeOutExpo', // Эффект анимации проскальзывания
        itemSpeed: 200, // Скорость анимации открытия/закрытия пункта
        itemEasing: 'easeOutExpo',  // Скорость анимации открытия/закрытия пункта
        scroll: 1 // Количество пунктов для прокручивания за один шаг
    });
    $(".ca-nav-prev, .ca-nav-next").css("top", h / 2 - $(".ca-nav-prev").height());
    $(".slides_control").css("width", $(this).parent().width());

    $(".small-preview li a").click(function(){
        var href = $(this).attr("href");
        $(".preview-img img").attr("src", href);
        return false;
    });
}
function map() {
    var div = $("#map");
    if (div.length > 0)
        div.gMap({
            latitude: 55.683482,
            longitude: 37.663812,
            zoom: 13,
            markers: [
                { latitude: 55.683482,
                    longitude: 37.663812 }
            ],
            icon: { image: "images/marker.png",
                iconsize: [36, 40],
                iconanchor: [36, 40],
                infowindowanchor: [12, 0] }});
};