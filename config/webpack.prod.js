const merge = require('webpack-merge')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

const common = require('./webpack.common')

module.exports = merge(common, {
   mode: 'production',
   optimization: {
      minimizer: [
         new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true // set to true if you want JS source maps
         }),
         new OptimizeCSSAssetsPlugin()
      ]
   },
   plugins: [
      new MiniCSSExtractPlugin({
         filename: 'styles.css'
      })
   ],
   module: {
      rules: [{
         test: /\.css$/,
         use: [{
            loader: MiniCSSExtractPlugin.loader
         },
            'css-loader'
         ]
      }]
   }
})