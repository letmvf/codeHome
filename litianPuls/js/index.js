

var xuanzewomen = function() {
    var w = $(window).width()
    var bili = (1920 / w).toFixed(2)
    var xuanze = $('.main2')
    if (w > 1920) {
        var h = (Math.round(bili * 10000)/100).toFixed(2) + '%'
        xuanze.css({
            'background-size': '100%' + h
        })
    } else {
        var ww = (Math.round(bili * 10000)/100).toFixed(2) + '%'
        xuanze.css({
            'background-size': ww + '100%'
        })
    }
}

var donghua = function() {
    $('.main4-index-1').mouseover(function(e) {
        $(e.target).find('.main4-index-11').eq(0).removeClass('keyframes4')
        $(e.target).find('.main4-index-11').eq(0).addClass('keyframes3')
    })
    $('.main4-index-2').mouseover(function(e) {
        $(e.target).find('.main4-index-11').eq(0).removeClass('keyframes4')
        $(e.target).find('.main4-index-11').eq(0).addClass('keyframes3')
    })
    // $('.main4-index-1').mouseleave(function(e) {
    //     $(e.target).find('.main4-index-11').eq(0).removeClass('keyframes3')
    //     $(e.target).find('.main4-index-11').eq(0).addClass('keyframes4')
    // })
    // $('.main4-index-2').mouseleave(function(e) {
    //     $(e.target).find('.main4-index-11').eq(0).removeClass('keyframes3')
    //     $(e.target).find('.main4-index-11').eq(0).addClass('keyframes4')
    // })
    $('.main4-index-11').mouseleave(function(e) {
        $('.main4-index-11').removeClass('keyframes3')
        $(e.target).eq(0).addClass('keyframes4')
    })
    // $('.main4-index-11').mouseover(function(e) {
    //     $('.main4-index-11').addClass('keyframes4')
    //     $(e.target).eq(0).addClass('keyframes3')
    // })
}

var sendAsk = function(){
    var lis = document.querySelector('.main2')
    //swHeight=滚动的高度+窗体的高度；当li的offset高度<=swHeight,那么说明当前li显示在可视区域了
    var swHeight=$(window).height();
    var mTop = lis.getBoundingClientRect().top;
    if(mTop <= swHeight) {
        $('.main2-1').addClass('keyframes2')
        window.onscroll = function() {}
    }
}

var __main = function() {
    xuanzewomen()
    donghua()
    window.onscroll = function () {
        sendAsk()
    }
}

__main()