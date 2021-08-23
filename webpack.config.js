// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devtool: isProduction ? "none" : "source-map",
  devServer: {
    open: false,
    publicPath: "/",
    historyApiFallback: true,
    host: "localhost",
    port: 8080,
    hot: !isProduction,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),

    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@src": path.resolve(__dirname, "./src/"),
      "@components": path.resolve(__dirname, "./src/components/"),

      // "@styles": path.resolve(__dirname, "./src/styles/"),
      // "@constants": path.resolve(__dirname, "./src/constants/"),
      // "@redux": path.resolve(__dirname, "./src/redux"),
      // "@utils": path.resolve(__dirname, "./src/utils"),
      // "@images": path.resolve(__dirname, "./src/images"),
    },
    extensions: [
      ".tsx",
      ".ts",
      ".js",
      ".jsx",
      ".sass",
      ".scss",
      ".css",
      ".wasm",
      ".web.js",
      ".mjs",
      ".json",
      ".web.jsx",
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
