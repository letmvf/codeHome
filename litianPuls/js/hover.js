(function() {
    $('.span').mouseenter(function(e) {
        var index = Number(e.target.dataset.type)
        if (index > -1) {
            $('.vevk').css('display', 'block')
        }
        $('.erji').eq(index).css('display', 'block')
        if ($(e.target).find('i').eq(0).prop('className') == 'top31-a') {
            return
        }
        $(e.target).find('i').eq(0).removeClass('top31-a1')
        $(e.target).find('i').eq(0).removeClass('keyframes')
        $(e.target).find('i').eq(0).removeClass('keyframes1')
        $(e.target).find('i').eq(0).addClass('top31-a1')
        $(e.target).find('i').eq(0).addClass('keyframes')
    })
    $('.span').mouseleave(function(e) {
        $('.erji').css('display', 'none')
        $('.vevk').css('display', 'none')
        if ($(e.target).find('i').eq(0).prop('className') == 'top31-a') {
            return
        }
        $(e.target).find('i').eq(0).addClass('keyframes1')
        $(e.target).find('i').eq(0).removeClass('keyframes')
    })
    $('.erji1').mouseover(function(e) {
        var index = Number(e.target.dataset.type)
        if (index > -1) {
        }
        $('.vevk').css('display', 'block')
        $('.erji').eq(index).css('display', 'block')
        var e_parent = null
        if ($(e.target).prop('className') == 'erji1') {
            e_parent = $(e.target)
        } else {
            e_parent = $(e.target).parent()
        }
        e_parent.find('.erji3').eq(0).css({
            'font-size': '18px',
            color: '#fff'
        })
        e_parent.find('.erji2').eq(0).css({
            color: '#fff'
        })
    })
    $('.erji1').mouseleave(function(e) {
        $('.vevk').css('display', 'none')
        $('.erji').css('display', 'none')
        var e_parent = null
        if ($(e.target).prop('className') == 'erji1') {
            e_parent = $(e.target)
        } else {
            e_parent = $(e.target).parent()
        }
        var e_parent1 = e_parent.parents('li').eq(0).find('i').eq(0)
        e_parent1.removeClass('keyframes1')
        e_parent1.removeClass('keyframes')
        e_parent1.addClass('keyframes1')
        e_parent.find('.erji3').eq(0).css({
            'font-size': '12px',
            color: '#18aef5'
        })
        e_parent.find('.erji2').eq(0).css({
            color: '#18aef5'
        })
    })
})()