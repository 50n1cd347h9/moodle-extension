const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    content: path.join(__dirname, "src/content.tsx"),
  },
  output: {
    path: path.join(__dirname,  "../../../../mnt/c/Users/syout/Documents/chrome_extension/js"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts",".tsx", ".js", ".json"],
  },
  plugins: [new CopyPlugin([{ from: ".", to: "../" }], { context: "public" })],
};
