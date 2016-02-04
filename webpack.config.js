var webpack = require("webpack");

module.exports = {
  entry: './entry.js',
  output: {
    filename: './dst/river.js',
    libraryTarget: "var",
       // name of the global var: "Foo"
    library: "Reka"
  },
  loaders: [
    {
      test: /\.js?$/,
      loader: 'babel', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['es2015']
      }
    }
  ],
  devtool: "source-map"
//  plugins: [
//    new webpack.optimize.UglifyJsPlugin({minimize: true})
//  ]
};
