 window.onload = function () {
     setTimeout(function () {
         scrollTo(0, 0);

     }, 0);
 } //새로고침 위치고정

 window.addEventListener('DOMContentLoaded', function () {

     setTimeout(function loadfont() {
         $('.p1 h2 span').css({
             transform: 'translateY(0%)'
         })
     }, 100);

     var pages_num = $('#about>article').length;
     var c_num = 0;
     var scrEvent = false;
     var aa = $('.about_2');

     $('html,body').on('mousewheel', function (e) {
         var dir = e.originalEvent.deltaY;
         var vh = $('.about_1').height();
         console.log(dir)
         if (dir < 0 && scrEvent == false && c_num >= 1) {
             scrEvent = true;
             c_num--;
             $('html,body').stop().animate({
                 scrollTop: vh * c_num
             }, {
                 duration: 100,
                 complete: function () {
                     scrEvent = false;
                 }
             });
         } else if (dir > 0 && scrEvent == false && c_num < pages_num) {
             scrEvent = true;
             c_num++;
             $('html,body').stop().animate({
                 scrollTop: vh * c_num
             }, {
                 duration: 100,
                 complete: function () {
                     scrEvent = false;
                 }
             });
         }; //scroll
         if (c_num == 1) {
             setTimeout(function () {
                 $('.about_2 > h2 span').css({
                     top:'0'
                 })
             }, 500)
             setTimeout(function () {
                 $('.about_2 .basic_info p').css({
                     transform: 'translateY(0%)'
                 })
             }, 700)
         };

     });



 })
