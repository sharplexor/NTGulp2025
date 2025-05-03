const config = {
   mode: "production",
   entry: {
      script: "./src/js/script.js",
      // module: './src/js/modules/module.js'
   },
   output: {
      filename: "[name].min.js",
   },
   module: {
      rules: [
         {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
         },
      ],
   },
};

export default config;
