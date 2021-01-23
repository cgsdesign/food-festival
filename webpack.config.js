  const webpack = require("webpack");
  const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
  const path = require("path");
  const WebpackPwaManifest = require("webpack-pwa-manifest");

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
                //return url()
              },
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
        }),
        new WebpackPwaManifest({
          name: "Food Event",
          short_name: "Foodies",
          description: "An app that allows you to view upcoming food events.",
          start_url: "../index.html",
          background_color: "#01579b",
          theme_color: "#ffffff",
          fingerprints: false,
          inject: false,
          publicPath: './',
          icons: [{
            src: path.resolve("assets/img/icons/icon-512x512.png"),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join("assets", "icons")
          }]
        })
      ],
      mode: 'development'

};

//module.exports = config;