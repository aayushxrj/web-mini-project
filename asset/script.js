var countDownDate = new Date("May 7, 2024 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

  // Get the current date and time
  var now = new Date().getTime();
  
  // Calculate the distance between now and the countdown date
  var distance = countDownDate - now;
  
  // Calculate days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Display the countdown
  document.querySelector(".countdown-time .d").innerHTML = days;
  document.querySelector(".countdown-time .h").innerHTML = hours < 10 ? "0" + hours : hours;
  document.querySelector(".countdown-time .m").innerHTML = minutes < 10 ? "0" + minutes : minutes;
  document.querySelector(".countdown-time .s").innerHTML = seconds < 10 ? "0" + seconds : seconds;
  
  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".countdown-time").innerHTML = "EXPIRED";
  }
}, 1000);