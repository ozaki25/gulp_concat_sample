'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');


gulp.task('html', function() {
    gulp.src(['header.html', 'templates/**/*.html', 'footer.html'])
        .pipe(concat('index.html'))
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['html']);
