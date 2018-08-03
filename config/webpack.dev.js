const merge = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common')
const webpack = require('webpack')

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
      content: path.join(__dirname, '/.././dist')
   }
})