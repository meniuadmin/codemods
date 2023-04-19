// Mrm module to work with new line separated text files
const { lines, copyFiles } = require("mrm-core");

const path = require("path");

function a() {
  // Read .gitignore if it exists
  lines(".gitignore")
    // Add lines that do not exist in a file yet,
    // but keep all existing lines
    .add(["node_modules/", ".DS_Store"])
    .add(["teeeest"])
    // Update or create a file
    .save();

  copyFiles(__dirname, "eslint-config.js"); // Copy file
}
a();

module.exports = a;
