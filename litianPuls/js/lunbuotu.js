window.onload = function() {
    var w = $(window).width()
    $('#ul').width((w * 4) + 'px')
    $('#ul li').width(w + 'px')
    $('.all ol').width(w + 'px')

    var screen = document.getElementById("screen");
    var ul = screen.children[0];
    var ol = screen.children[1];
    var div = screen.children[2];
    var imgWidth = screen.offsetWidth;
    var tempLi = ul.children[0].cloneNode(true);
    ul.appendChild(tempLi);
    for (var i = 0; i < ul.children.length - 1; i++) {
        var newOlLi = document.createElement("li");
        // newOlLi.innerHTML = i + 1;
        ol.appendChild(newOlLi);
    }
    var olLiArr = ol.children;
    olLiArr[0].className = "current";
    for (var i = 0, len = olLiArr.length; i < len; i++) {
        olLiArr[i].index = i;
        olLiArr[i].onmouseover = function(ev) {
            for (var j = 0; j < len; j++) {
                olLiArr[j].className = "";
            }
            this.className = "current";
            key = square = this.index;
            animate(ul, -this.index * imgWidth);
        }
    }
    var key = 0;
    var square = 0;
    var timer = setInterval(autoPlay, 3000);
    screen.onmouseover = function(ev) {
        clearInterval(timer);
        div.style.display = "block";
    }
    screen.onmouseout = function(ev) {
        timer = setInterval(autoPlay, 3000);
        div.style.display = "none";
    }
    var divArr = div.children;
    divArr[0].onclick = function(ev) {
        key--;
        if (key < 0) {
            ul.style.left = -(ul.children.length - 1) * imgWidth + "px";
            key = 4;
        }
        animate(ul, -key * imgWidth);
        square--;
        if (square < 0) {
            square = 3;
        }
        for (var k = 0; k < len; k++) {
            olLiArr[k].className = "";
        }
        olLiArr[square].className = "current";
    }
    divArr[1].onclick = autoPlay;

    function autoPlay() {
        key++;
        if (key > ul.children.length - 1) {
            ul.style.left = 0;
            key = 1;
        }
        animate(ul, -key * imgWidth);
        square++;
        if (square > 2) {
            square = 0;
        }
        for (var k = 0; k < len; k++) {
            olLiArr[k].className = "";
        }
        olLiArr[square].className = "current";
    }

    function animate(ele, target) {
        clearInterval(ele.timer);
        var speed = target > ele.offsetLeft ? 10 : -10;
        ele.timer = setInterval(function() {
            var val = target - ele.offsetLeft;
            ele.style.left = ele.offsetLeft + speed + "px";
            if (Math.abs(val) < Math.abs(speed)) {
                ele.style.left = target + "px";
                clearInterval(ele.timer);
            }
        }, 10)
    }

}