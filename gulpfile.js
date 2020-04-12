const gulp = require('gulp');
const sass = require('gulp-sass');

function Style() {
    return gulp.src('./src/scss/*scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'));
}

gulp.task('default', function () {
    gulp.watch('./src/scss/*.scss',Style)
})