$(function($) {
    (function() {
            $('.returntop a').click(function() {
                $('html,body').animate({
                    'scrollTop': 0
                });
            });
            $(window).scroll(function() {
                if ($(window).scrollTop() >= 400) {
                    $(".returntop1").show();
                } else {
                    $(".returntop1").hide();
                }
            });
        }
    )();
    (function() {
            if (!$.support.leadingWhitespace) {
                $('.zhezhaobox').show();
            }
            if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE9.0") {
                $('.zhezhaobox').show();
            }
        }
    )();
    (function() {
            $('.wapmenu').click(function() {
                $(this).toggleClass('wapmenu_a');
                $('.h5-nav-list').toggleClass('wapmenu_open');
            });
        }
    )();
    $('.nav .nav_a').hover(function() {
        var _this = $(this);
        $('.nav .nav_a').find('i').removeClass('navonline_on');
        $(this).addClass('navonline_on');
        if (_this.hasClass('nav_b')) {
            $('.nav_cont').addClass('nav_contsc');
        } else {
            $('.nav_cont').removeClass('nav_contsc');
        }
    });
    $('.nav .nav_a').hover(function() {
        var _this = $(this);
        $('.nav .nav_a').next('.nav_menu').removeClass('nav_menusc');
        _this.next('.nav_menu').addClass('nav_menusc');
        _this.find('i').addClass('navonline_on');
        $('.nav .nav_a').find('em').removeClass('navem')
        _this.find('em').addClass('navem');
    });
    $('.header').mouseleave(function() {
        $('.nav_cont').removeClass('nav_contsc');
        $('.nav_menu').removeClass('nav_menusc');
        $('.nav .nav_a').find('em').removeClass('navem')
        $('.nav .nav_a').find('i').removeClass('navonline_on');
    });
    var searchTime = 0;
    function doSearch(node) {
        var searchValue = $(node).val();
        if ($.trim(searchValue) === "") {
            $(node).attr('placeholder', '总得输入点内容吧...');
            return;
        }
        ;if (searchValue.length >= 100) {
            $(node).val('').attr('placeholder', '输入太长，不合法...');
            return;
        }
        searchValue = $.trim(searchValue).replace(/\s/g, "+");
        location.href = 'https://www.etycx.com/search/search-' + searchValue + '.html';
    }
    $('.wapsearch').on('click', '.wapsearch_before_search', function() {
        $('.wapsearch').toggleClass('active');
        $('.waplogo').toggleClass('active');
        searchTime++;
    });
    $('.wapsearch').on('click', '.wapsearch_do_search', function() {
        searchTime++;
        doSearch('.wapsearch_input');
        if (searchTime === 3) {
            searchTime = 0;
            $('.wapsearch_input').attr('placeholder', '请输入关键词进行搜索...');
            $('.wapsearch').toggleClass('active');
            $('.waplogo').toggleClass('active');
        }
    });
    $('.wapsearch_input').on('keyup', function(e) {
        var e = e || window.event;
        if (e.keyCode === 13) {
            doSearch('.wapsearch_input');
        }
    })
    // var search = document.getElementsByClassName('search_web')[0];
    // var searchInput = search.getElementsByTagName('input')[0];
    // searchInput.onfocus = function() {
    //     if (this.classList)
    //         search.classList.add('active');
    //     else
    //         search.className += ' ' + 'active';
    // }
    // searchInput.onblur = function() {
    //     search.setAttribute('class', 'search_web');
    // }
    $('.search_web').on('click', '.kefudt_icon5 i', function() {
        doSearch('.pcsearch_input');
    });
    $('.pcsearch_input').on('keyup', function(e) {
        var e = e || window.event;
        if (e.keyCode === 13) {
            doSearch('.pcsearch_input');
        }
    })
    var _hmt = _hmt || [];
    // (function() {
    //         var hm = document.createElement("script");
    //         hm.src = "https://hm.baidu.com/hm.js?546bd89d65ae810ef0977ba57bf91acb";
    //         var s = document.getElementsByTagName("script")[0];
    //         s.parentNode.insertBefore(hm, s);
    //     }
    // )();
    window._pt_lt = new Date().getTime();
    window._pt_sp_2 = [];
    _pt_sp_2.push('setAccount,21f2b15d');
    var _protocol = (("https:" == document.location.protocol) ? "  https://" : "  http://");
    (function() {
            var atag = document.createElement('script');
            atag.type = 'text/javascript';
            atag.async = true;
            atag.src = _protocol + 'js.ptengine.cn/21f2b15d.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(atag, s);
        }
    )();
});
