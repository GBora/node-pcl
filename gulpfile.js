var gulp = require('gulp');
var ts = require('gulp-typescript');
var typedoc = require("gulp-typedoc");

var tsProject = ts.createProject('tsconfig.json');
 
gulp.task('default', function () {
    return gulp.src('src/*.ts')
               .pipe(tsProject())
               .pipe(gulp.dest('release'));
});


 
gulp.task("typedoc", function() {
    return gulp
        .src(["src/*.ts"])
        .pipe(typedoc({
            // TypeScript options (see typescript docs) 
            module: "commonjs",
            target: "es5",
            includeDeclarations: true,
 
            // Output options (see typedoc docs) 
            out: "./docs",
 
            // TypeDoc options (see typedoc docs) 
            name: "node-pcl",
            ignoreCompilerErrors: false,
            version: true,
        }))
    ;
});