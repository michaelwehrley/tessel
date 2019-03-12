// Import the interface to Tessel hardware
var tessel = require('tessel');



// Blink!
setInterval(function () { tessel.led[0].toggle(); }, 200);
setInterval(function () { tessel.led[1].toggle(); }, 300);
setInterval(function () { tessel.led[2].toggle(); }, 400);
setInterval(function () { tessel.led[3].toggle(); }, 500);

// setInterval(function () {
//   {tessel.led[0].toggle();}, 100
//   {tessel.led[1].toggle();}, 200
//   {tessel.led[2].toggle();}, 300
//   {tessel.led[3].toggle();}, 400
// }

console.log("I'm blinking! (Press CTRL + C to stop)");