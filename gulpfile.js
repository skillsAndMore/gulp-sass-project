const { dest, src, watch } = require("gulp");
const sass = require("gulp-dart-sass");
const prefix = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const sourcemaps = require("gulp-sourcemaps");

function scss() {
	return src("scss/**/*.scss")
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(prefix())
		.pipe(csso())
		.pipe(sourcemaps.write("."))
		.pipe(dest("./"));
}

exports.scss = scss;
exports.default = function() {
	watch("scss/**/*.scss", scss);
};
