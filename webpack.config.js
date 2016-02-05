var webpack = require("webpack");

module.exports = {
  entry: './entry.js',
  output: {
    filename: './dst/vodichka.js',
    libraryTarget: "var",
    library: "WaterSports"
  },
  loaders: [
    {
      test: /\.js?$/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    },
    {
      loader: 'script-loader'
    }
  ],
  devtool: "source-map",
//  plugins: [
//    new webpack.optimize.UglifyJsPlugin({minimize: true})
  //]
};
