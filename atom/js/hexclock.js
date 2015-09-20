(function() {
  'use strict';

  function displayHexClock() {
    var clock = new Date(),
        h = clock.getHours(),
        m = clock.getMinutes(),
        s = clock.getSeconds();

    if(h <= 9) h = '0' + h;
    if(m <= 9) m = '0' + m;
    if(s <= 9) s = '0' + s;

    var time = h + ':' + m + ':' + s;
    var color = '#' + h + m + s;

    document.body.style.background = color;
    document.getElementById('time').innerHTML = time;
    //document.getElementById('hexColor').innerHTML = color;
  }
  displayHexClock();
  setInterval(displayHexClock, 1000);
}());
