import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import webpCss from "gulp-webp-css";
import groupMedia from "gulp-group-css-media-queries";
import autoPrefixer from "gulp-autoprefixer";
import changed from "gulp-changed";
import csso from "gulp-csso";

const sass = gulpSass(dartSass);

export const scss = () => {
   return app.gulp
      .src(app.path.src.scss)
      .pipe(changed(app.path.build.css))
      .pipe(
         app.plugins.plumber({
            errorHandler: app.plugins.notify.onError({
               title: "SCSS",
               message: "Error <%= error.message %>",
               sound: false,
            }),
         })
      )
      .pipe(app.plugins.replace(/@img\//g, "../files/img/"))
      .pipe(sass())
      .pipe(webpCss())
      .pipe(groupMedia())
      .pipe(autoPrefixer())
      .pipe(csso())
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(app.plugins.browsersync.stream());
};
