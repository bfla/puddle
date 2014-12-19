var async = require('async');
var _ = require('underscore');
var RiverSpeech = require('./river_speech');

River = {
  start: function() {
    RiverSpeech.test();
  }
}

module.exports = River;