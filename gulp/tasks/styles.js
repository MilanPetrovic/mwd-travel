var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    postcssvars = require('postcss-simple-vars'),
    nestedcss = require('postcss-nested'),
    postcssImport = require('postcss-import');

gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([postcssImport, postcssvars, nestedcss, autoprefixer]))
        .on('error', function() {
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});