/* global require, module */

var fs = require('fs');
var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.


var bootstrapPath = 'bower_components/bootstrap-sass-official/assets/';
var javascriptsPath = 'bower_components/ember-addons.bs_for_ember/dist/js/';
var jsFiles = fs.readdirSync(javascriptsPath);

var fontTree = pickFiles('bower_components/fontawesome/fonts', {
    srcDir: '/',
    files: ['*'],
    destDir: '/assets/fonts'
});

// Import css
//app.import(bootstrapPath + 'css/bootstrap-theme.css');
//app.import(bootstrapPath + 'css/bootstrap.css');
app.import('bower_components/ember-addons.bs_for_ember/dist/css/bs-growl-notifications.min.css');

// Import javascript files
app.import(javascriptsPath + 'bs-core.max.js'); // Import bs-core first

jsFiles.forEach(function (file) {
    var fileName = file.split('.')[0];
    app.import(javascriptsPath + fileName + '.max.js');
});

app.import(bootstrapPath + '/javascripts/bootstrap.js');

// Import glyphicons
app.import(bootstrapPath + 'fonts/bootstrap/glyphicons-halflings-regular.eot', { destDir: '/fonts' });
app.import(bootstrapPath + 'fonts/bootstrap/glyphicons-halflings-regular.svg', { destDir: '/fonts' });
app.import(bootstrapPath + 'fonts/bootstrap/glyphicons-halflings-regular.ttf', { destDir: '/fonts' });
app.import(bootstrapPath + 'fonts/bootstrap/glyphicons-halflings-regular.woff', { destDir: '/fonts' });

module.exports = mergeTrees([app.toTree(), fontTree]);
