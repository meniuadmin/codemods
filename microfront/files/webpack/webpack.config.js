const { merge } = require("webpack-merge");
const microCommon = require("./micro.common");
const common = require("./webpack.common");

const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = merge(common, {
  mode: "production",
  devtool: false,
  plugins: [
    new ModuleFederationPlugin({
      name: "[REPLACE_NAME]",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./provider": "./src/bootstrap",
        "./routes": "./src/routes/routes",
        "./translations": "./src/i18n/resources",
      },
      shared: microCommon.dependencies,
    }),
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});
