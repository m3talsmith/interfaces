'use strict'

let requireDir = require('require-dir')
let gulp       = require('gulp')

requireDir('build/tasks')

gulp.task('default', ['build'])