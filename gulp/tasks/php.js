import fileinclude from "gulp-file-include";
import webpHTML from "gulp-webp-html";
import changed from "gulp-changed";
import versionNumber from "gulp-version-number";

const fileincludeSettings = {
   prefix: "@@",
   basepath: "@file",
};

export const php = () => {
   return app.gulp
      .src(app.path.src.php)
      .pipe(
         app.plugins.plumber({
            errorHandler: app.plugins.notify.onError({
               title: "PHP",
               message: "Error <%= error.message %>",
               sound: false,
            }),
         })
      )
      .pipe(
         changed(app.path.build.php, { hasChanged: changed.compareContents })
      )
      .pipe(fileinclude(fileincludeSettings))
      .pipe(webpHTML())
      .pipe(app.plugins.replace(/@img\//g, "../files/img/"))
      .pipe(
         versionNumber({
            value: "%DT%",
            append: {
               ket: "_v",
               cover: 0,
               to: ["css", "js"],
            },
            output: {
               file: "gulp/version.json",
            },
         })
      )
      .pipe(app.gulp.dest(app.path.build.php))
      .pipe(app.plugins.browsersync.stream());
};
