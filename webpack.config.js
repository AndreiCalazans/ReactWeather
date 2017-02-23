var path = require('path');


module.exports = {
  entry: './app/app.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    // root: path.resolve(__dirname),
    // alias: {
    //   Greeter: 'public/components/Greeter.js',
    //   GreeterMessage: 'public/components/GreeterMessage.js',
    //   GreeterForm: 'public/components/GreeterForm.js'
    // },
    modules: [
    path.resolve('./app/components'),
    path.resolve('./node_modules'),
    path.resolve('./app/api/')
    ],
    extensions: [" " ,".js", "jsx"]
  },
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['react','es2015', 'stage-0']
      }
    },
    {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
  ]
},
devtool: 'cheap-module-eval-source-map'
};
