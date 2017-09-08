const express = require('express')
const router = express.Router()
const chalk = require('chalk')
import axios from 'axios'
import {darkSky, googleGeo} from '../secrets.js'
import {returnCoordGoogleGeo} from '../utilities/index.js'


router.get('/:location', function(req, res) {
  axios.get(`http://maps.google.com/maps/api/geocode/json?address=${req.params.location}`)
    .then(returnCoordGoogleGeo)
    .then((data) => {
        return  axios.get(`https://api.darksky.net/forecast/${darkSky}/${data.lat},${data.lng}`)
    })
    .then(({data}) => {
      res.send({'current':data.currently,coordinates:{lat:data.latitude,lng:data.longitude}})
    })
})

module.exports = router
