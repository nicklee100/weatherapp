import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from '../../webpack.config.dev';
const initialWeather = require('../routes/index.js')
const search = require('../routes/search.js')
const compiler = webpack(config);
const bodyParser = require('body-parser')

const port = 3000;
const app = express()

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

app.use('/initialweather', initialWeather)

app.use('/search', search)

app.listen(port, function (error) {
  if(error) {
    console.log(error)
  } else {
     console.log('app running on port:', port)
  }
})
