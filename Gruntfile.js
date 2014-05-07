
module.exports = function(grunt) {

	grunt.initConfig({
	
		pkg: grunt.file.readJSON('package.json'),
		
		clean: {
			src: ['dist']
		},
		
		copy: {
			dist: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: ['**', '.htaccess', '!**/Thumbs.db'],
					dest: 'dist'
				}]
			}
		},
		
		csslint: {
			// Lint CSS files
			lint: {
				src: ['src/css/*.css'],
				options: {
					"duplicate-background-images": false,
					"box-sizing": false,
					"box-model": false,
					"outline-none": false,
					"gradients": false
				}
			}
		},
		
		cssmin: {
			dist: {
				files: [{
					expand: true,
					cwd: 'dist/',
					src: ['css/**/*.css'],
					dest: 'dist'
				}]
			}
		},
		
		jshint: {
			// Lint JS files
			files: ['Gruntfile.js', 'src/js/*.js']
		},
		
		uglify: {
			dist: {
				files: [{
					expand: true,
					cwd: 'dist/',
					src: ['js/*.js'],
					dest: 'dist'
				}]
			}
		}
		
	});
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	// Run 'grunt' to lint JS and CSS
	grunt.registerTask('default', ['jshint', 'csslint']);
	
	// Run 'grunt dist' to distribute the website
	grunt.registerTask('dist', ['jshint', 'clean', 'copy', 'uglify', 'cssmin']);

};


