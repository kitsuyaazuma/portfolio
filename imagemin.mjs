import { execSync } from "child_process";
import path from "path";

const nvmBinPath =
  process.env.NVM_BIN || execSync("echo $NVM_BIN").toString().trim();

// npm install -g imagemin-webp imagemin-keep-folder
const imageminKeepFolderPath = path.join(
  nvmBinPath,
  "../lib/node_modules/imagemin-keep-folder/index.js",
);
const imageminWebpPath = path.join(
  nvmBinPath,
  "../lib/node_modules/imagemin-webp/index.js",
);

const { default: imagemin } = await import(imageminKeepFolderPath);
const { default: imageminWebp } = await import(imageminWebpPath);

await imagemin(["./images/**/*.{jpg,jpeg,png}"], {
  plugins: [imageminWebp({ quality: 50 })],
  replaceOutputDir: (output) => {
    return output.replace(/images\//, "./public/images/");
  },
});

console.log("Images optimized");
