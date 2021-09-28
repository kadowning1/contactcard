// let time = document.getElementById("time").innerHTML
setInterval(myFunction, 1000);
function myFunction() {
  /*function to produce current time*/
  {
    var currentDate = new Date(); /* creating the date*/
    var hour = currentDate.getHours(); /*uses local time according to MDN*/
    var min = currentDate.getMinutes();
    var sec = currentDate.getSeconds();

    hour = changeTime(hour);
    min = changeTime(min);
    sec = changeTime(sec);
  }

  function changeTime(i) {
    /*adding zeros to all var if under 10*/
    if (i < 10) {
      return "0" + i;
    } else {
      return i
    }
  }
  var digitalClock = hour + " : " + min + " : " + sec

  document.getElementById("time").innerHTML = digitalClock; /* adding to the html div.  this part took me the longest to figure out */
}

myFunction();