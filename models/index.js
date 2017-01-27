'use strict';

const db = require('./db');

// require all the models
const Hotel = require('./hotel');
const Place = require('./place');
const Activity = require('./activity');
const Restaurant = require('./restaurant');

Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Restaurant.belongsTo(Place);

module.exports = db;
