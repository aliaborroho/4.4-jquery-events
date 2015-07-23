var merge = require('broccoli-merge-trees');
var compileSass = require('broccoli-sass');

var includePaths = [
	'styles',
	'bower_components',
	'bower_components/fontawesome/scss',
	'bower_components/bourbon/app/assets/stylesheets',
	'bower_components/neat/app/assets/stylesheets',
];

var appCss = compileSass(includePaths, 'style.scss', 'style.css');

module.exports = merge(['public', 'bower_components', appCss]);
