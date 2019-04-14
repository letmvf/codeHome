
(function ($) {
    $.fn.DuZhanBanner = function (options) {

        var defaults = {
            showtime: "5000",
            showclass: "showBanner",
            showspanindex: "",

        };
        var showindex = 0;
        var options = $.extend(defaults, options);
        var showlist = $(options.showclass + " ul li");
        //showlist.width($(document).width());//全屏
        showlist.width($(".indextop_left ul li").width());
        var showfirst = showlist.eq(0);
        var sWidth = showfirst.width();
        // alert(sWidth);

        $(options.showclass).height(showfirst.height());

        var widthbl = showfirst.height() / showfirst.width();
        var len = showlist.length;
        var index = 0;
        var picTimer;
        var showtimeline;
        var shownowclass = options.showclass;
        var showcur = "cur";
        showlist.show();
        $(options.showclass + " ul").css("position", "absolute");
        $(options.showclass + " ul").width(showlist.width() * (len + 1));
        $(options.showspanindex).html("");
        for (var i = 0; i < len; i++) {
            $(options.showspanindex).append("<span " + (i == 0 ? " class=\"" + showcur + "\"" : "") + ">" + (i + 1) + "</span>");
        }
        for (var i = 0; i < len; i++) {

            showlist.eq(i).find("img").attr("src", showlist.eq(i).find("img").attr("rel"));
        }
        var showspan = $(options.showspanindex + " span");
        showspan.first().addClass(showcur);
        picTimer = setInterval(AutoMove, options.showtime);
        $(window).resize(function () {
            clearInterval(picTimer);
            sWidth = $(".indextop_left ul li").width();
            showlist.width($(".indextop_left ul li").width());
            $(options.showclass + " ul").width(showlist.width() * (len + 1));
            $(options.showclass).height($(".indextop_left ul li").height());
            //alert($(".indextop_left ul li").height());
            $(options.showclass + " ul").height($(".indextop_left ul li").height());

            picTimer = setInterval(AutoMove, options.showtime);
        });
        $(showspan).mouseenter(function () {
            clearInterval(picTimer);
            index = $(showspan).index(this);
            showMove(index);
            picTimer = setInterval(AutoMove, options.showtime);
        })
        function AutoMove() {
            index++;
            if (index >= len) {
                showFirPic();
                index = 0;
            } else {
                showMove(index);
            }
        }

        function showMove(index) {
            if (index < len) {
                var nowLeft = -index * sWidth;
                $(options.showclass + " ul").stop(true, false).animate({ "left": nowLeft }, 500, function () {
                });
                showspan.removeClass(showcur).eq(index).addClass(showcur);
            } else {
                showFirPic();
                index = 0;
            }
        }

        function showFirPic() {
            $(shownowclass + " ul").append(showfirst.clone());
            var nowLeft = -len * sWidth;
            $(".banner-line-show").stop(true);
            $(shownowclass + " ul").stop(true, false).animate({ "left": nowLeft }, 500, function () {
                showspan.removeClass(showcur).eq(0).addClass(showcur);
                $(this).css("left", "0px");
                $(shownowclass + " ul li:last").remove();
            });
        }
    }
})(jQuery)