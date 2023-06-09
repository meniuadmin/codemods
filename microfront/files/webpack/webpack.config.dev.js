const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const microCommon = require("./micro.common");

const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = merge(common, {
  mode: "development",
  devServer: {
    historyApiFallback: true,
    port: 3004,
    hot: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "habiCreditMicroDashboardMx",
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
});
