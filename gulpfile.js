var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var watch = require('gulp-watch');

gulp.task("default", function () {
    return watch('src/**/*.ts', {verbose: true}, function() {
        return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
    })
});
