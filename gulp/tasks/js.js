import webpack from "webpack-stream";
import webPackConfig from "../../webpack.config.js";
import babel from "gulp-babel";
import changed from "gulp-changed";

export const js = () => {
   return app.gulp
      .src(app.path.src.js)
      .pipe(changed(app.path.build.js))
      .pipe(
         app.plugins.plumber({
            errorHandler: app.plugins.notify.onError({
               title: "JS",
               message: "Error <%= error.message %>",
               sound: false,
            }),
         })
      )
      .pipe(babel())
      .pipe(
         webpack({
            config: webPackConfig,
         })
      )
      .pipe(app.gulp.dest(app.path.build.js))
      .pipe(app.plugins.browsersync.stream());
};
