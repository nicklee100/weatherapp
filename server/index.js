const path = require('path')
const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, '..', 'public')))


const data = [{
  id: 1,
  name: 'Taylor',
  image: 'https://designerdoginfo.files.wordpress.com/2013/01/puggle-puppy-4.jpg?w=584'
}, {
  id: 2,
  name: 'Reggie',
  image: 'http://images.shape.mdpcdn.com/sites/shape.com/files/styles/slide/public/puppy-2_0.jpg'
}];


app.get('/data',function(req, res){
  res.json(data.map(({id, name}) => ({id, name})));
})

app.get('/healthCheck', function(req, res){
	res.send('is ok')
})



app.listen(3000, function(){
	console.log('skeletan is running')
})

