const path = require('path');

module.exports = {
   entry: './src/js/main.js',
   mode: 'development',
   watch: true,
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      library: 'myApp',
   },
   module: {
      rules: [
         {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
               options: {
                  presets: ['@babel/preset-env']
               }
            }
         },
         {
            test: /\.css$/i,
            // use: ["style-loader", "css-loader"],
            use: [
               { loader: "style-loader", options: { injectType: "linkTag" } },
               { loader: "file-loader" },
            ],
         },
      ]
   }
};

