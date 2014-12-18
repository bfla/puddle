var async = require('async');
var _ = require('underscore')
var say = require('say');

// This uses npm say
// Linux requires Festival
// Example: https://www.npmjs.com/package/say

var RiverSpeech = {
  test: function () {
    async.waterfall([
      function(cb) {
        say.speak('Agnes', 'Agnes says... whats up, dog?', cb);
      },
      function(cb) {
        say.speak(null, 'Default voice says... Hello!', cb);
      },
      function(cb) {
        say.speak('Kathy', 'Kathy says, hows it goin?', cb);
      },
      function(cb) {
        say.speak('Princess', 'Princess says, hi there   hehe?', cb);
      },
      function(cb) {
        say.speak('Vicki', 'Vicki says, aloha friend?', cb);
      },
      function(cb) {
        say.speak('Victoria', 'Victoria says, howdy partner', cb);
      }
    ], null);
  }
}

module.exports = RiverSpeech;