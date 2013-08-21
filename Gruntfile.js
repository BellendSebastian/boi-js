module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            css: {
                files: '**/*.sass',
                tasks: ['sass'],
                options: {
                    livereload: 1337
                }
            },
            scripts: {
                files: 'src/js/**/*.js',
                tasks: [
                    'jshint',
                    'requirejs'
                ],
                options: {
                    livereload: 1337
                }
            },
        },
        jshint: {
            all: [
                'Gruntfile.js',
                'src/js/**/*.js'
            ],
            options: {
                ignores: [
                    'src/js/vendor/*.js'
                ],
                jshintrc: '.jshintrc'
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'compiled/css/style.css': 'src/sass/style.sass'
                }
            }
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: 'src/js',
                    name: 'main',
                    mainConfigFile: 'src/js/config.js',
                    out: 'compiled/js/script.min.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['sass', 'jshint', 'requirejs']);
};
