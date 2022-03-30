const express = require('express')
const asyncHandler = require('express-async-handler');
const citiesService = require("./cities.service");

const route = express.Router();

route.get('/:zipCode/', asyncHandler(async (req, res) => {
    const zipCode = req.params['zipCode'];
    const result = await citiesService.getCityByZipCode(zipCode);
   // console.log(result);
    res.send(result.toString());
}))

module.exports = route;
