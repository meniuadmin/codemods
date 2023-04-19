// Mrm module to work with new line separated text files
const { lines, copyFiles } = require("mrm-core");

const path = require("path");

module.exports = function mrm() {
  // Read .gitignore if it exists
  lines(".gitignore")
    // Add lines that do not exist in a file yet,
    // but keep all existing lines
    .add(["node_modules/", ".DS_Store"])
    .add(["HABI_TEST"])
    // Update or create a file
    .save();

  // Copy file
  copyFiles(path.join(__dirname, "files"), "eslint-config.js");
};
