//note: npm init to get package.json
//notes npm i -D webpack webpack-cli to inital webpack (-D makes hidden sort-of)
//to check webpack install: npm run webpack -v
// thuch webpack.config.js to make file we use
//For a basic configuration, we need to provide webpack with three properties: entry, output, and mode. 
//** NOte- if I am using JQuery etc. It is a dependency and will need to be added */
        //npm i jquery

//npm run build


const path = require("path");
const webpack = require("webpack");











module.exports = {
    entry: './assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
      },
      //dependent plugins here
      plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
          }),
      ],
      mode: 'development'

};