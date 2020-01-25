const { dest, src } = require("gulp");
const sass = require("gulp-dart-sass");
const prefix = require("gulp-autoprefixer");

function scss() {
	return src("scss/**/*.scss")
		.pipe(sass())
		.pipe(prefix())
		.pipe(dest("./"));
}

exports.scss = scss;
