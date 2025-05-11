// Получаем имя папки проекта
import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

// Константы конечных путей
const buildFolder = "./dist"; // Также можно использовать rootFolder
const srcFolder = "./src";

export const path = {
   build: {
      php: `${buildFolder}/`,
      images: `${buildFolder}/files/img/`,
      files: `${buildFolder}/files/other/`,
      fonts: `${buildFolder}/files/fonts/`,
      css: `${buildFolder}/css/`,
      js: `${buildFolder}/js/`,
   },
   src: {
      php: `${srcFolder}/**/*.php`,
      images: `${srcFolder}/files/img/**/*.{jpg,jpeg,png,svg,gif,webp}`,
      files: `${srcFolder}/files/other/**/*`,
      fonts: `${srcFolder}/files/fonts/*.{otf,ttf,woff,woff2}`,
      scss: `${srcFolder}/scss/main.scss`,
      js: `${srcFolder}/js/**/*.js`,
   },
   watch: {
      php: `${srcFolder}/**/*.php`,
      images: `${srcFolder}/files/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
      files: `${srcFolder}/files/other/**/*`,
      fonts: `${srcFolder}/files/fonts/*.{otf,ttf,woff,woff2}`,
      scss: `${srcFolder}/scss/**/*.scss`,
      js: `${srcFolder}/js/**/*.js`,
   },
   clean: buildFolder,
   buildFolder: buildFolder,
   srcFolder: srcFolder,
   rootFolder: rootFolder,
   ftp: "",
};
