'use strict'

let gulp       = require("gulp")
let sourceMaps = require("gulp-sourcemaps")
let babel      = require("gulp-babel")

gulp.task("build", () => {
  return gulp.src(["src/*.js", "src/**/*.js"])
    .pipe(sourceMaps.init())
    .pipe(babel())
    .pipe(sourceMaps.write("."))
    .pipe(gulp.dest("dist"))
})