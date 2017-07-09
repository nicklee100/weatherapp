const express = require('express')
const router = express.Router()
const chalk = require('chalk')
import axios from 'axios'
import {darkSky, googleGeo} from '../secrets.js'

// * not sure if googel geo location weill work based on wifiaccess point

// router.get('/initiallocation', function(req,res){
//   axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${googleGeo}`, {
//     considerIp: "true",
//   })          //do error handeling
//     .then((data)=> {
//       return axios.get(`http://maps.googleapis.com/maps/api/geocode/json?latlng=${data.data.location.lat},${data.data.location.lng}&sensor=false`)
//     })
//     .then(data => {
//       if (data.status !== "OK") return next( new Error('failed to get initail locatoin'))
//       else { res.send() }
//     }
//     console.log('$$$$$$$$$$$$$$:', data.data))

//   }
// )


router.get('/initiallocation', function(req,res) {
  console.log('hit route')
  axios.get("http://ipinfo.io")
  .then(({data}) =>{
    res.json({"city":data.city , "state":data.region, "country": data.country})
  })
})

module.exports = router
