var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    rename    = require('gulp-rename');

gulp.task('default', ['css', 'cssmin']);

gulp.task('css', function(){
    gulp.src('rwdreset.sass')
        .pipe(sass({outputStyle: 'expanded', indentedSyntax: true}))
        .pipe(gulp.dest(''))
});

gulp.task('cssmin', function(){
    gulp.src('rwdreset.sass')
        .pipe(rename('rwdreset.min.css'))
        .pipe(sass({outputStyle: 'compressed', indentedSyntax: true}))
        .pipe(gulp.dest(''));
});