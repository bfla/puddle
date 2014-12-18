var express = require('express');
var async = require('async');
var _ = require('underscore');
var logger = require('morgan');

var app = express();

var RiverSpeech = require('./river_speech')

app.use(logger('dev'));

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

RiverSpeech.test();

module.exports = app;
