/**
 * Export project config
 */

var pkg = require('../package.json');

var sourceFolder = 'src';
var distFolder = 'dist';

module.exports = {
	verbose: false,
	port: 8080,
	src: sourceFolder,
	dist: distFolder,
	autoprefixer: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
	copyFiles: [
		sourceFolder + '/scripts/vendor/modernizr.custom.29734.js',
		sourceFolder + '/styles/fonts/**/*.{ttf,woff,eot,svg}'
	],
	banner: ['/**',
		' * ' + pkg.name,
		' * ' + pkg.description,
		' * Compiled: ' + Date(),
		' * @version v' + pkg.version,
		' * @link ' + pkg.homepage,
		' * @copyright ' + pkg.license,
		' */',
		''
	].join('\n')
};
