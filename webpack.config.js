//note: npm init to get package.json
//notes npm i -D webpack webpack-cli to inital webpack (-D makes hidden sort-of)
//to check webpack install: npm run webpack -v
// thuch webpack.config.js to make file we use
//For a basic configuration, we need to provide webpack with three properties: entry, output, and mode. 
//** NOte- if I am using JQuery etc. It is a dependency and will need to be added */
        //npm i jquery
//Optimize JS
        //npm install -D webpack-bundle-analyzer =Makes it easier to analize how the JS is getting split and how much it is saving us
//Optimize images
        //npm install -D file-loader
        //npm i image-webpack-loader  - makes images optimized
//npm run build

//VOCAB:
//Time to Interactive = (TTI)
//Loaders pre-process the assets on a file by file basis before and during the build
  //Loaders are used mostly for non JavaScript files such as image, CSS, and HTML files.
//Plugins are scoped more on the bundle level and deliver changes at the end of the build
  //While loaders are configured in the module property of the webpack configuration object, plugins are configured in the plugins array.


const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: "./assets/js/script.js",
    events: "./assets/js/events.js",
    schedule: "./assets/js/schedule.js",
    tickets: "./assets/js/tickets.js"
  },
  output: {
    filename: "[name].bundle.js",//[name] specifies the file anme that we have in out JS that is bundled
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        //above ideonifies .jpg files etc
        use: [
          {
            loader: "file-loader",
            options: {
              name (file) {
                return "[path][name].[ext]"
              },
              //above allows the files to keep an understandable filename
              //below puts the files into a dist subfolder
              publicPath: function(url) {
                return url.replace("../", "/assets/")
              }
            }  
          },
          {
            //optimise file size (note load first THEN optimize)
            loader: 'image-webpack-loader'
          }
        ]
      }
    ]
  },
      //dependent plugins here
      plugins: [
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
        }),
        new BundleAnalyzerPlugin({
          analyzerMode: "static", // the report outputs to an HTML file in the dist folder
        })
      ],  
      mode: 'development'

};