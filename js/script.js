$(function () {

    //切換漢堡按鈕
    $('.hamburger').click(function () {
        //切換 三 & X 加入 & 刪除class
        $(this).toggleClass('is-active');
        $('.navigation').toggleClass('show');
    });

});

//jquery smoove
$('.smoove').smoove();