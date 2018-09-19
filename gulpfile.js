
var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync').create();

var rename      = require('gulp-rename');
var svgstore    = require('gulp-svgstore');
var svgmin      = require('gulp-svgmin');

var plumber     = require('gulp-plumber');
var postcss     = require('gulp-postcss');
var autoprefixer= require('autoprefixer');
var mqpacker    = require('mqpacker');
var minify      = require('gulp-csso');
var rename      = require('gulp-rename');



gulp.task('sass', function() {
    gulp.src('./sass/style.scss')
    .pipe(plumber())                     //проверка ошибок
    .pipe(sass())
    .pipe(postcss([
        autoprefixer({browsers: [
            'last 1 version',
            'last 2 Chrome versions',
            'last 2 Firefox versions',
            'last 2 Opera versions',
            'last 2 Edge versions',
                    ]}),
        mqpacker({...})             
        ]))
    .pipe(gulp.dest('css'))
     
    .pipe(minify())                      //минификация
    .pipe(rename('style.min.css'))      
    .pipe(gulp.dest('css'));
})

gulp.task('sass', function() {           //преобразование scss ---> css
    return gulp.src('./sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream())
    });

gulp.task('browser-sync', function() {   //отображение в браузере, сервер-локальный
    browserSync.init({
        server: {
            baseDir: './'
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {  //отображение в терминале изменений scss, html, js файлов

    gulp.watch('./sass/*.scss', ['sass']);
    gulp.watch('./*.html', browserSync.reload);
    gulp.watch('./js/**/*.js', browserSync.reload);
});

