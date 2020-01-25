const { dest, src } = require("gulp");
const sass = require("gulp-dart-sass");
const prefix = require("gulp-autoprefixer");
const csso = require("gulp-csso");

function scss() {
	return src("scss/**/*.scss")
		.pipe(sass())
		.pipe(prefix())
		.pipe(csso())
		.pipe(dest("./"));
}

exports.scss = scss;
