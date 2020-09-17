(function(){
  $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});
var myNav = document.querySelector('.navbar');
var collapsenav = document.querySelector('.navbar-collapse');
var button = document.querySelector('.navbar-toggler');
window.onscroll = function () { 
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};


var eventDate = new Date("Sept 11, 2020 10:00:00").getTime();
var reg=document.querySelectorAll("#register");
var Et = setInterval(function() {
    var current = new Date().getTime();
    var distance = eventDate - current;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var daysCount = Math.floor(Math.log10(days)+1);
    var hoursCount = Math.floor(Math.log10(hours)+1);
    var minutesCount = Math.floor(Math.log10(minutes)+1);
    var secondsCount = Math.floor(Math.log10(seconds)+1);
    if (daysCount>1)
    {
      document.getElementById("days").innerHTML = days;
    }
    else
    {
      document.getElementById("days").innerHTML = "0"+days;
    }
    if (hoursCount>1)
    {
      document.getElementById("hours").innerHTML = hours;
    }
    else
    {
      document.getElementById("hours").innerHTML = "0"+hours;
    }
    if(minutesCount>1)
    {
      document.getElementById("min").innerHTML = minutes;
    }
    else
    {
      document.getElementById("min").innerHTML = "0"+minutes;
    }
    if(secondsCount>1)
    {
      document.getElementById("seconds").innerHTML = seconds;
    }
    else
    {
      document.getElementById("seconds").innerHTML ="0"+seconds;
    }
    if (distance < 0) {
      clearInterval(Et);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    for(var x=0;x<reg.length;x++)
    {
      reg[x].classList.add("disabled");
      reg[x].innerHTML="REGISTRATION CLOSED"; 
    }
    
    }
  }, 1000);

  AOS.init({
    duration: 1200,
  })
  
  $('.modal').on('show.bs.modal', function () {
    $("body").css('overflow-y', 'hidden');
    $("html").css('overflow-y', 'hidden');
  });
  $('.modal').on('hide.bs.modal', function () {
    $("body").css('overflow-y', 'auto');
    $("html").css('overflow-y', 'auto');
  });
})();