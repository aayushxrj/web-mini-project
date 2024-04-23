var countDownDate = new Date("May 7, 2024 00:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  
  var distance = countDownDate - now;
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.querySelector(".countdown-time .d").innerHTML = days;
  document.querySelector(".countdown-time .h").innerHTML = hours < 10 ? "0" + hours : hours;
  document.querySelector(".countdown-time .m").innerHTML = minutes < 10 ? "0" + minutes : minutes;
  document.querySelector(".countdown-time .s").innerHTML = seconds < 10 ? "0" + seconds : seconds;
  
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".countdown-time").innerHTML = "EXPIRED";
  }
}, 1000);
document.addEventListener("DOMContentLoaded", function() {
        var dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(function(dropdown) {
            dropdown.addEventListener('click', function() {
                this.querySelector('.dropdown-content').classList.toggle('show');
            });
        });

        window.addEventListener('click', function(event) {
            dropdowns.forEach(function(dropdown) {
                if (!dropdown.contains(event.target)) {
                    dropdown.querySelector('.dropdown-content').classList.remove('show');
                }
            });
        });
    });
