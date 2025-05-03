import imagemin from "gulp-imagemin";
import changed from "gulp-changed";
import webp from "gulp-webp";

export const images = () => {
   return app.gulp
      .src(app.path.src.images, { encoding: false })
      .pipe(changed(app.path.build.images))
      .pipe(webp())
      .pipe(app.gulp.dest(app.path.build.images))
      .pipe(app.gulp.src(app.path.src.images, { encoding: false }))
      .pipe(changed(app.path.build.images))
      .pipe(imagemin({ verbose: true }))
      .pipe(app.gulp.dest(app.path.build.images))
      .pipe(app.plugins.browsersync.stream());
};
