const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = require("./paths");
const Dotenv = require("dotenv-webpack");
const webpack = require("webpack");
const processBrowser = require.resolve("process/browser");

module.exports = {
  entry: {
    main: ["./src/index.ts"],
  },
  output: {
    path: paths.build,
    filename: "[name].[contenthash].js",
    clean: true,
    publicPath: "auto",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      favicon: `${paths.public}/favicon.png`,
      template: `${paths.public}/index.html`,
    }),
    new Dotenv({
      path: `${paths.env}/${process.env.COUNTRY}/.env.general`,
    }),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
      process: "process/browser",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
      {
        test: /\.(css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { sourceMap: true, importLoaders: 1, modules: false },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [paths.src, "node_modules"],
    extensions: [".ts", ".tsx", ".json", ".js"],
    fallback: { "process/browser": processBrowser },
    alias: {
      "@": paths.src,
      "@hooks": `${paths.src}/hooks`,
      "@utils": `${paths.src}/utils`,
      "@services": `${paths.src}/services`,
      "@assets": `${paths.src}/static/assets`,
      "@components": `${paths.src}/components`,
      "@i18n": `${paths.src}/i18n`,
      "@pages": `${paths.src}pages`,
      "@redux": `${paths.src}redux`,
    },
  },
  stats: "errors-only",
};
