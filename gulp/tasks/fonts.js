import changed from "gulp-changed";

export const fonts = () => {
   return app.gulp
      .src(app.path.src.fonts)
      .pipe(changed(app.path.build.fonts))
      .pipe(app.gulp.dest(app.path.build.fonts))
      .pipe(app.plugins.browsersync.stream());
};
