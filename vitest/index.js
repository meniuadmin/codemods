// Mrm module
const { copyFiles, packageJson, install } = require("mrm-core");

const path = require("path");

function vite() {
  // Copy file
  copyFiles(path.join(__dirname), "vite.config.ts");

  const pkg = packageJson();

  pkg
    .setScript("test", "vitest")
    .setScript("coverage", "vitest run --coverage")
    .setScript("test:ui", "vitest --ui")
    .save();

  install(
    [
      "@vitejs/plugin-react",
      "@vitest/coverage-c8",
      "@vitest/ui",
      "vite-tsconfig-paths",
      "vitest",
    ],
    {
      versions: {
        "@vitejs/plugin-react": "^4.0.0",
        "@vitest/coverage-c8": "^0.30.1",
        "@vitest/ui": "^0.30.1",
        "vite-tsconfig-paths": "^4.2.0",
        vitest: "^0.30.1",
      },
      yarn: true,
    }
  );
}

vite.description = "Configure Vitetest for Habi Projects";
module.exports = vite;
