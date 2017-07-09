const express = require('express')
const router = express.Router()
const chalk = require('chalk')
import axios from 'axios'
import {darkSky, googleGeo} from '../secrets.js'


//add error handeling
// * note: not sure if google geo location based on wifiaaccess points will work when deployed
router.get('/', function(req,res ){
  console.log('---------------------------000000000')
  axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${googleGeo}`, {
    considerIp: "true",
  })
  .then((data) => {
    return {'lat': data.data.location.lat, 'lng':data.data.location.lng}})
  .then(data => {
    return  axios.get(`https://api.darksky.net/forecast/${darkSky}/${data.lat},${data.lng}`)
  })
  .then(data => {    console.dir(data)
    return {'current' : data.data.currently} })
  .then(data => {
    console.log(data)
    res.send(data)})
});

module.exports = router
