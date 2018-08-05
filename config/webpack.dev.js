const merge = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common')
const webpack = require('webpack')
const history = require('connect-history-api-fallback')
const convert = require('koa-connect')

module.exports = merge(common, {
   mode: 'development',
   plugins: [],
   devtool: 'inline-source-map',
   module: {
      rules: [{
         test: /\.css$/,
         loader: 'style-loader!css-loader' 
      }]
   },
   serve:{
      content: path.join(__dirname, '/.././dist'),
      port: 8080,
      add: (app, middleware, options) => {
         app.use(convert(history()))
      }
   }
})