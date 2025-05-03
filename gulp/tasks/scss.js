import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import groupMedia from "gulp-group-css-media-queries";

const sass = gulpSass(dartSass);

export const scss = () => {
   return app.gulp
      .src(app.path.src.scss)
      .pipe(
         app.plugins.plumber({
            errorHandler: app.plugins.notify.onError({
               title: "SCSS",
               message: "Error <%= error.message %>",
               sound: false,
            }),
         })
      )
      .pipe(sass())
      .pipe(groupMedia())
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(app.plugins.browsersync.stream());
};
