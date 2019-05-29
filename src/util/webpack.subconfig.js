const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const wpkgUtils = require("@cubbles/wpkg-utils");
const webpackageName = wpkgUtils.getWebpackageName;
const elementName = webpackageName + "-" + __dirname.split(path.sep).pop();
const distFolder = path.resolve(
  __dirname,
  global.cubx.distFolderWebpackage,
  elementName
);

const config = {
  // make this configuration independent from the current working directory
  context: path.resolve(__dirname),
  // define the entry module for the bundle to be created
  entry: `./leaflet.js`,
  output: {
    path: distFolder,
    filename: `leaflet.bundle.js`
  },
  plugins: [
    new CopyWebpackPlugin([
        { from: "**/*.*", to: distFolder },
    ], {}),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: "bundleReport.html",
      openAnalyzer: false
    })
  ]
};
module.exports = config;
