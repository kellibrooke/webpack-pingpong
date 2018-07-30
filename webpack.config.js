// "require statements" go here; this is anything that webpack requires to run
const path = require('path');
// Readme #18: add require statement for HTMLWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Readme#21: add require statement for CleanWebpackPlugin
const CleanWebpackPlugin = require('clean-webpack-plugin');
// Readme#23: add require statement for UglifyJsPlugin
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
// we specify an entry point for our program; webpack will enter our application here (main.js) and will use a dependency graph to load all other required .js files
  entry: './src/main.js',
// we specify an output; this is where our code will go after it's processed and bundled, in this case into a file called bundle.js within a folder called dist
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
// Readme #26: specify 'eva;-source-map' as a dev tool and set up a bsic configuration for our development server.
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },
// Readme #18: Add plugins section to configuration module
  plugins: [
// Readme #23: instantiate new UglifyJsPlugin
// Readme #26: we add an argument into UglifyJsPlugin in order to allow our dev tool to work on minified code
    new UglifyJsPlugin({ sourceMap: true }),
// Readme #21: instantiate new CleanWebpackPlugin and specify which folder we want it to clean up "dist"
    new CleanWebpackPlugin(['dist']),
//instantiate a new HtmlWebpackPlugin with 3 arguments: what we want our title of the bundled HTML file to be, location of HTML file we will bundle, and where we want to put our script files in the HTML (in this case after body)
    new HtmlWebpackPlugin({
      title: 'Ping Pong',
      template: './src/index.html',
      inject: 'body'
    })
  ],
// Readme #14: Here we add specific rules to configure our module
  module: {
    rules: [
      {
// #14: test tells webpack where to look for files that use the specified loaders; test line uses a regular expression / / to find files with a .css extension
        test: /\.css$/,
// #32: Specify that ESLint should lint all javascript files except for those in our nodemodules_directory because they are external javascript libraries that have already been tested
        exclude: /node_modules/,
        loader: "eslint-loader"
// #14: the loaders listed in the "use" segment transform our CSS into javascript so it can be bundled by webpack
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
