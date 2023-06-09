const { deleteFiles, lines } = require("mrm-core");

function ignores() {
  // Read .gitignore if it exists
  deleteFiles(".husky/_/.gitignore");
  deleteFiles("husky/pre-commit");
  const husky = lines(".husky/pre-commit");

  husky.add(".husky/pre-commit", "npx lint-staged");
  // Update or create a file
  husky.save();
}

ignores.description = "Remove husky ignore for Habi Projects";
module.exports = ignores;
