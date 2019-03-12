// Import the interface to Tessel hardware
var tessel = require('tessel');

// Turn one of the LEDs on to start.
tessel.led[3].on();

// [3,"y",7, "ppp"] // array

// Blink!
setInterval(function () {
  tessel.led[0].toggle();
  tessel.led[1].toggle();
  tessel.led[2].toggle();
  tessel.led[3].toggle();
}, 100);

console.log("I'm blinking! (Press CTRL + C to stop)");