const hrs = document.querySelector("#hr");
const mins = document.querySelector("#min");
const secs = document.querySelector("#sec");


function upclock(){
  var date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes() ;
  let sec = date.getSeconds();
  let hours = hr*360/12 + ((min * 360/60)/12) ;
  let minutes = (min * 360/60) + (sec* 360/60)/60;
  let seconds = sec * 360/60;

  hrs.style.transform = "rotate(" + hours + "deg)";
  mins.style.transform = "rotate(" + minutes + "deg)";
  secs.style.transform = "rotate(" + seconds + "deg)";
}


var interval = setInterval(upclock, 1000);