var merge = require('broccoli-merge-trees');
var Sass = require('broccoli-sass');
var funnel = require('broccoli-funnel');
var injectLivereload = require('broccoli-inject-livereload');

var publicWithReload = injectLivereload('public');

var includePaths = [
  'styles',
  'bower_components',
  'bower_components/fontawesome/scss',
  'bower_components/bourbon/app/assets/stylesheets',
  'bower_components/neat/app/assets/stylesheets'
];
funnel('bower_components', {
  files:['jquery/dist/jquery.min.js']
});

var appCss = Sass(includePaths, 'accordian.scss', 'accordian.css');

module.exports = merge(['public', 'bower_components', appCss]);
