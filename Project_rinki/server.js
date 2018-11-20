const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();
const bodyParser = require('body-parser');

// data routes setup
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

// keep these before the app.get('*') routes to make them get picked up before the catch all.
// this way all /api/ routes will work as expected

// /api/articles [GET]
app.get('/api/articles', (req, res) => {
  // replace this with your own data call
  res.send(["one", "two", "three", "four"]);
});

// /api/search [GET]
app.get('/api/search', (req, res) => {
  // replace this with your own data call
  res.send("dummy result for " + req.param('q'));
});

if (isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: './app',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.use(express.static(__dirname + '/app'));
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
} else {
  app.use(express.static(__dirname + '/dist'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

  app.listen(port, '0.0.0.0', function onStart(error) {
    if (error) {
      console.log(error);
    }
    console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
  });