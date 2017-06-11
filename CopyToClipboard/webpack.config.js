var webpack = require("webpack"),
  path = require("path"),
  fileSystem = require("fs"),
  env = require("./utils/env"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  WriteFilePlugin = require("write-file-webpack-plugin");

// load the secrets
var alias = {};

var secretsPath = path.join(__dirname, ("secrets." + env.NODE_ENV + ".js"));

if (fileSystem.existsSync(secretsPath)) {
  alias["secrets"] = secretsPath;
}

var options = {
  entry: {
    index: path.join(__dirname, "src", "index.js"),
    // background: path.join(__dirname, "src", "scripts", "background.js"),
  },
  chromeExtensionBoilerplate: {
    notHotReload: ["index"]
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].bundle.js",
    publicPath: '/'
  },
  module: {
    rules: [
      { 
        test: /\.css$/, 
        loader: "style-loader!css-loader", 
        exclude: /node_modules/ 
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader?name=images/[name].[ext]'
      }
    ]
  },
  resolve: {
    alias: alias
  },
  plugins: [
    // expose and write the allowed env vars on the compiled bundle
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(env.NODE_ENV)
    }),
    new WriteFilePlugin()
  ]
};

if (env.NODE_ENV === "development") {
  options.devtool = "cheap-module-eval-source-map";
}

module.exports = options;
