import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from '../../webpack.config.dev';

const compiler = webpack(config);

const port = 3000;
const app = express()

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

app.get('/initialWeather', function(req,res ){
  console.log('test')
  res.send('hit route')


});

app.listen(port, function (error) {
  if(error) {
    console.log(error)
  } else {
     console.log('app running on port:', port)
  }
})
