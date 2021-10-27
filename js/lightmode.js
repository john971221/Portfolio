window.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('#lightbtn')
    btn.addEventListener('click', function () {
        el = $(this);
        el2 = document.querySelector('#lightbtn img');
        if (el.attr('class') == 'darker') {
            el.removeClass('darker');
            el.addClass('lighter');
            el2.src = './img/darkmode.png';
            $('html').css({
                background: '#fff'
            })
            $('body').addClass('light');
            $('body').removeClass('dark');
            $('header span a').css({
                color: '#000'
            });
            $('#full_menu').css({
                background: '#fff'
            });
            $('#full_menu a').css({
                color: '#000'
            });
            $('#menu span').css({
                background: '#000'
            });
            $('#full_menu ul li span').eq(1).find('a').css({
                color:'transparent',
                '-webkit-text-stroke': '2px #000'
            });
            $('#full_menu ul li span').eq(3).find('a').css({
                color:'transparent',
                '-webkit-text-stroke': '2px #000'
            });
            $('.about_2 p span').css({
                color: '#000'
            });
        } else {
            el.removeClass('lighter');
            el.addClass('darker');
            $('html').css({
                background: '#000'
            })
            el2.src = './img/lightmode2.png';
            $('body').addClass('dark');
            $('body').removeClass('light');
            $('header span a').css({
                color: '#fff'
            });
            $('#full_menu').css({
                background: '#000'
            });
            $('#full_menu a').css({
                color: '#fff'
            });
            $('#menu span').css({
                background: '#fff'
            });
            $('#full_menu ul li span').eq(1).find('a').css({
                color:'transparent',
                '-webkit-text-stroke': '2px #fff'
            });
            $('#full_menu ul li span').eq(3).find('a').css({
                color:'transparent',
                '-webkit-text-stroke': '2px #fff'
            });
            $('.about_2 p span').css({
                color: '#fff'
            });
        }
    })
})
