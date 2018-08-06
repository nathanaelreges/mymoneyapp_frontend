const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')


module.exports = {
   entry: './src/index.js',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, '../dist')
   },
   plugins: [
      new HTMLWebpackPlugin({
         template: './src/main.html',
         /*minify: {
            removeComments: false,
            collapseWhitespace: true
         }*/
      }),
      new webpack.ProvidePlugin({
         $: "jquery",
         jquery: "jquery",
         "window.jQuery": "jquery",
         jQuery: "jquery"
      })
   ],
   module: {
      rules: [{
         test: /\.js[x]?$/,
         exclude: /node_modules/,
         use: [{
            loader: 'babel-loader',
            options: {
               presets: ['react', 'env'],
               plugins: ['transform-object-rest-spread', 'react-hot-loader/babel']
            }
         }],
      },
      {
         test: [/\.(eot|svg|ttf|woff|woff2)$/],
         use: [{
            loader: 'file-loader',
            options: {/*
               name: '[name].[ext]',
               outputPath: 'fonts/'
            */}
         }]
      }]
   },
   resolve: {
      extensions: ['.js', '.jsx']
   }
}