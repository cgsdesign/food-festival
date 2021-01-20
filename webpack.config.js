//note: npm init to get package.json
//notes npm i -D webpack webpack-cli to inital webpack (-D makes hidden sort-of)
//to check webpack install: npm run webpack -v
// thuch webpack.config.js to make file we use
//For a basic configuration, we need to provide webpack with three properties: entry, output, and mode. 
//** NOte- if I am using JQuery etc. It is a dependency and will need to be added */
        //npm i jquery
//Time to Interactive = (TTI)
//npm run build
//npm install -D webpack-bundle-analyzer 

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