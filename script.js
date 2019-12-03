let display = document.querySelector("#time");

//generate time
function getTime() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  //add 0 to beginning of sec if < 10
  if (sec < 10) {
    sec = "0" + sec;
  }
 //add 0 to beginning of hour if < 10
  if (hour < 10) {
      hour = '0' + hour;
  }
 //add 0 to beginning of min if < 10
  if (min < 10) {
      min = '0' + min;
  }

  return hour + ":" + min + ":" + sec;
}

//call flicker every 3 seconds
setInterval(function() {
    flicker();
}, 3000);

// update time every .5 seconds
window.setInterval(function() {
  display.textContent = getTime();
}, 500);

function flicker() {
    setInterval(function() {
    display.classList.toggle('flicker');

    if(display.classList.contains('flicker')) {
        display.classList.remove('shadow');
    } else {
        display.classList.add('shadow');
    }
//randomize flicker pattern interval
}, Math.floor(Math.random) * 5 + '000')}