/*
 * grunt-jjencode
 * 
 *
 * Copyright (c) 2013 Blai Pratdesaba <hello@blaipratdesaba.com>
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
    // load all npm grunt tasks
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp']
        },

        // Configuration to be run (and then tested).
        jjencode: {
            default_options: {
                options: {
                },
                files: {
                    'tmp/default_options.js': ['test/values.js']
                }
            },
            custom_options: {
                options: {
                    variable: 'encoded'
                },
                files: {
                    'tmp/custom_options.js': ['test/values.js']
                }
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'jjencode', 'nodeunit']);

    // By default, lint and run all tests.
    // grunt.registerTask('default', ['jshint', 'test']);
    grunt.registerTask('default', ['jjencode:default_task']);

};
