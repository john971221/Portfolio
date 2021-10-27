window.addEventListener('DOMContentLoaded', function () {

    var bar = $('header #menu span');


    $('#menu').on('click', function () {
        el = $('#full_menu');

        if (el.attr('class') == 'active') {
            el.removeClass('active');
            el.addClass('active_2');
            setTimeout(function () {
                el.removeClass('active_2');
            }, 500);
            bar[0].style.transform = 'translateX(0%)';
            bar[2].style.transform = 'translateX(0%)'
            setTimeout(function () {
                bar[1].style.transform = 'translateX(0%)';
                bar[3].style.transform = 'translateX(0%)'
            }, 200)
        } else {
            bar[0].style.transform = 'translateX(-200%)';
            bar[2].style.transform = 'translateX(-200%)'; 
            setTimeout(function(){
              bar[2].style.transform = 'translateX(-200%) translateY(6px) rotate(45deg)';   
            },600)
            setTimeout(function () {
                bar[1].style.transform = 'translateX(-200%)';
                bar[3].style.transform = 'translateX(-200%)';
            }, 200);
            setTimeout(function(){
                bar[3].style.transform = 'translateX(-200%) translateY(-4px) rotate(-45deg)';
            },800)
            el.addClass('active');
            el.removeClass('active_2');
        };


    })

})
