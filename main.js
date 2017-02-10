$(function(){
  $('.share').hide();
  $('.share').fadeIn(1500);
  $('.content').animate({bottom:'+=30px', opacity: 1} , 1000 );
  $('#playbutton').on('click', function() {
      var music = document.getElementById("music");
      if(music.paused){
          music.play();
          $("#music_btn").attr("src","image/stop.svg");
          $('#wave').fadeIn(500);
      } else {
          music.pause();
          $("#music_btn").attr("src","image/play.svg");
          $('#wave').hide();
      }
    });
  var SW9 = new SiriWave({
      speed:0.08,
      amplitude: 1,
      frequency:1,
      container: document.getElementById('wave'),
      autostart: true,
      style: 'ios9'
    });
});

$(function() {
        setInterval("GetTime()", 10);
    });
function GetTime() {
       var now = new Date();
       var month = now.getMonth()+1;
       $(".time").html(
        "<nobr>" + now.getFullYear() +"年"+ month +"月"+ now.getDate() +"日"+ "</nobr>");
}



// $(function() {
//         setInterval("GetTime()", 1000);
//     });
//
//     function GetTime() {
//         var mon, day, now, hour, min, ampm, time, str, tz, end, beg, sec;
//         /*
//         mon = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug",
//                 "Sep", "Oct", "Nov", "Dec");
//         */
//         mon = new Array("一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月",
//                 "九月", "十月", "十一月", "十二月");
//         /*
//         day = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
//         */
//         day = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六");
//         now = new Date();
//         hour = now.getHours();
//         min = now.getMinutes();
//         sec = now.getSeconds();
//         if (hour < 10) {
//             hour = "0" + hour;
//         }
//         if (min < 10) {
//             min = "0" + min;
//         }
//         if (sec < 10) {
//             sec = "0" + sec;
//         }
//         $("#Timer").html(
//                 "<nobr>" + day[now.getDay()] + ", " + mon[now.getMonth()] + " "
//                         + now.getDate() + ", " + now.getFullYear() + " " + hour
//                         + ":" + min + ":" + sec + "</nobr>");
//
//     }

// $(document).ready(function(){
//   setInterval(showTime, 1000);
//   function timer(obj,txt){
//   obj.text(txt);
//   }
//   function showTime(){
//   var today = new Date();
//   var y=today.getFullYear()+"年";
//   var month=today.getMonth()+"月";
//   var td=today.getDate()+"日";
//   timer($("#Y"),y);
//   timer($("#MH"),month);
//   timer($("#TD"),td);
//   }
// })

// $('.time' function(){document.write(Date())})
