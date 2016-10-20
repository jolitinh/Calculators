module.exports = {
  entry: [
    './app/app.js'
  ],
  module: {
    preLoaders: [
      {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
    ],
    loaders: [{
      test: /\.html?$/,
      loader: 'raw-loader'
    },{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
       query: {
        presets: ['es2015']
      }
    },{
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    },{ 
      test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, 
      loader: 'file-loader?name=fonts/[name].[ext]' 
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'dle.utilities.js'
  },
  devServer: {
    contentBase: './dist'
  },
  sassLoader: {
    includePaths: ['./src/sass']
  },
  eslint: {
    configFile: './.eslintrc'
  }
};