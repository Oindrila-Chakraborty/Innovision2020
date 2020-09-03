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


var eventDate = new Date("Sept 12, 2020 10:00:00").getTime();

var Et = setInterval(function() {
    var current = new Date().getTime();
    var distance = eventDate - current;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    if (distance < 0) {
      clearInterval(Et);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    }
  }, 1000);

  AOS.init({
    duration: 1200,
  })
  