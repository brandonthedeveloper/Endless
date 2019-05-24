module.exports = function( grunt ) {
	'use strict';

	// Load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// Project configuration
	grunt.initConfig( {
		pkg:    grunt.file.readJSON( 'package.json' ),
		concat: {
			options: {
				stripBanners: true,
				// - <%= grunt.template.today("yyyy-mm-dd") %>
				banner: '/*! <%= pkg.title %> - v<%= pkg.version %>\n' +
					' * <%= pkg.homepage %>\n' +
					' * Copyright (c) <%= grunt.template.today("yyyy") %>;' +
					' * Licensed GPLv2+' +
					' */\n'
			},
			endless: {
				src: [
					'assets/js/src/**.js'
				],
				dest: 'assets/js/endless.min.js'
			}
		},
		jshint: {
			browser: {
				all: [
					'assets/js/src/**/*.js',
					'assets/js/test/**/*.js'
				],
				options: {
					jshintrc: '.jshintrc'
				}
			},
			grunt: {
				all: [
					'Gruntfile.js'
				],
				options: {
					jshintrc: '.gruntjshintrc'
				}
			}
		},
		test:   {
			files: ['assets/js/test/**/*.js']
		},

		sass:   {
			all: {
				options: {
					style: 'expanded'
				},
				files: {
					'assets/css/endless.css': 'assets/css/sass/endless.scss'
				}
			}
		},

		cssmin: {
			options: {
				banner: '/*! <%= pkg.title %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
					' * <%= pkg.homepage %>\n' +
					' * Copyright (c) <%= grunt.template.today("yyyy") %>;' +
					' * Licensed GPLv2+' +
					' */\n'
			},
			minify: {
				expand: true,

				cwd: 'assets/css/',
				src: ['endless.css'],

				dest: 'assets/css/',
				ext: '.min.css'
			}
		},
	} );

	// Default task.

	grunt.registerTask( 'default', ['concat', 'sass', 'cssmin'] );


	grunt.util.linefeed = '\n';
};
