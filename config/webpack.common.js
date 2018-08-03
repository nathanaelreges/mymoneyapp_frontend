const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')


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
               plugins: ['transform-object-rest-spread']
            }
         }]
      }]
   },
   resolve: {
      extensions: ['.js', '.jsx']
   }
}