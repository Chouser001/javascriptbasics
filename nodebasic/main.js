// require
// player.name = "Paul";
// player.life = 120;
// console.log(player.name);
// player.challenge();

// player.name = "Julie";
// console.log(player.name);
// console.log(player.life);

var killer = require('./monster.js');
var player = require('./player.js');

var paul = player();
paul.name = "Paul";
console.log(paul.name);

var julie = player();
julie.name = "Julie";
console.log(julie.name);

var rodger = killer();
rodger.name = "Rodger";
console.log(rodger.sound);


