var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync').create();

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

