'use strict';

const db = require('../models/index');
const router = require('express').Router();
const Hotel = require('../models/hotel');
const Activity = require('../models/activity');
const Restaurant = require('../models/restaurant');




router.get('/', function (req, res, next) {
  const findingHotels =  Hotel.findAll()
  const findingActivities =  Activity.findAll()
  const findingRestaurants =  Restaurant.findAll()
  Promise.all([findingHotels, findingActivities, findingRestaurants])
  .then( (results)=> {
      res.render('index', {hotels: results[0], activities: results[1], restaurants: results[2]});
  })
  .catch(next);

});



module.exports = router;
