'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var heroSchema = new Schema({
    name: String,
    hero: String,
    url: String,
    age: Number,
    origin: String,
    history: String,
    sex: String
});

module.exports = mongoose.model('Hero', heroSchema);