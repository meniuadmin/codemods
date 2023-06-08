// Mrm module
const { copyFiles, packageJson, install, lines } = require("mrm-core");

const path = require("path");

function microfront({ microName }) {
  // Copy file
  copyFiles(path.join(__dirname, "files"));

  const pkg = packageJson();

  pkg
    .setScript(
      "start",
      "cross-env COUNTRY=MX cross-env env=development webpack-cli serve --config webpack/webpack.config.dev.js"
    )
    .setScript(
      "build:dev",
      "cross-env COUNTRY=MX cross-env env=development webpack --config webpack/webpack.config.js"
    )
    .setScript(
      "build:prod",
      "cross-env COUNTRY=MX cross-env env=production webpack --config webpack/webpack.config.js"
    )
    .save();

  install(["dotenv-webpack", "clean-webpack-plugin", "webpack"], {
    yarn: true,
  });
}

microfront.description = "Create a new Microfront for Habi Projects";
module.exports.parameters = {
  microName: {
    type: "input",
    message: "New Microfrontend Name",
    validate(value) {
      return value ? true : "microName is required";
    },
  },
};
module.exports = microfront;
