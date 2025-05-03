// Основной модуль
import gulp from "gulp";
// Импорт путей
import { path } from "./gulp/config/path.js";
// Импорт плагинов
import { plugins } from "./gulp/config/plugins.js";

// Передаем значения в глобальную переменную
global.app = {
   isDev: !process.argv.includes("--build"),
   isBuild: process.argv.includes("--build"),
   gulp: gulp,
   path: path,
   plugins: plugins,
};

// Импорт тасков
import { php } from "./gulp/tasks/php.js";
import { scss } from "./gulp/tasks/scss.js";
import { images } from "./gulp/tasks/images.js";
import { files } from "./gulp/tasks/files.js";
import { fonts } from "./gulp/tasks/fonts.js";
import { server } from "./gulp/tasks/server.js";
import { reset } from "./gulp/tasks/reset.js";

// Наблюдатель
function watcher() {
   gulp.watch(path.watch.php, php);
   gulp.watch(path.watch.images, images);
   gulp.watch(path.watch.files, files);
   gulp.watch(path.watch.fonts, fonts);
   gulp.watch(path.watch.scss, scss);
   /*   gulp.watch(path.watch.js, js);*/
}

// Основные задачи
const mainTasks = gulp.parallel(php, scss, images, files, fonts);

// Построение сценариев
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
/*const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);*/

// Экспорт сценариев
export { dev };
/*export { build };
export { deployZIP };*/

// Выполняем сценарии
gulp.task("default", dev);
