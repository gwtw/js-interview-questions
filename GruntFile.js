module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jasmine_node: {
      options: {
        coverage: {},
        forceExit: true,
        match: '.',
        matchAll: false,
        specFolders: ['test'],
        extensions: 'js',
        specNameMatcher: 'spec',
        captureExceptions: true,
        junitreport: {
          report: false,
          savePath : './build/reports/jasmine/',
          useDotNotation: true,
          consolidate: true
        }
      },
      src: ['src/**/*.js']
    },

    eslint: {
      options: {
        configFile: '.eslintrc',
      },
      src: ['src/**/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.config('jsdoc', {
    dist : {
      src: ['index.js', 'src/**/*.js'],
      options: {
        destination: 'doc',
        readme: 'README.md'
      }
    }
  });

  var tasks = [
    'grunt-jasmine-node-coverage',
    'grunt-eslint'
  ];

  for (var i = 0; i < tasks.length; i++) {
    grunt.loadNpmTasks(tasks[i]);
  }
  grunt.registerTask('coverage', [
    'jasmine_node'
  ]);

  grunt.registerTask('default', [
    'eslint',
    'jsdoc',
    'coverage'
  ]);
};
