const { json } = require("mrm-core");

function recommendedExtensions() {
  // Read .gitignore if it exists
  const extensions = json(".vscode/extensions.json");
  // Add lines that do not exist in a file yet,
  // but keep all existing lines
  extensions.set("recommendations", [
    "esbenp.prettier-vscode",
    "SonarSource.sonarlint-vscode",
    "dbaeumer.vscode-eslint",
  ]);
  // Update or create a file
  extensions.save();
}

recommendedExtensions.description =
  "Configure recommendations for Habi Projects in VSCode";
module.exports = recommendedExtensions;
