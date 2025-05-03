import fileinclude from "gulp-file-include";

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
      .pipe(fileinclude(fileincludeSettings))
      .pipe(app.gulp.dest(app.path.build.php))
      .pipe(app.plugins.browsersync.stream());
};
