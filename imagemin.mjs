import imagemin from "imagemin-keep-folder";
import imageminWebp from "imagemin-webp";

await imagemin(["./images/**/*.{jpg,jpeg,png}"], {
    plugins: [imageminWebp({ quality: 50 })],
    replaceOutputDir: (output) => {
        return output.replace(/images\//, "./public/images/");
    },
});

console.log("Images optimized");
