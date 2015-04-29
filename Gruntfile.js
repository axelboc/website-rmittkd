
module.exports = function(grunt) {

	grunt.initConfig({
	
		pkg: grunt.file.readJSON('package.json'),
		
		clean: {
			pre: ['dist'],
			post: ['dist/css/*.css', '!dist/css/*.min.css', 'dist/css/lib', 'dist/js/*.js', '!dist/js/*.min.js']
		},
		
		copy: {
			dist: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: ['**', '.htaccess', '!**/Thumbs.db', '!data/error.log'],
					dest: 'dist'
				}]
			}
		},
		
		jshint: {
			// Lint JS files
			files: ['Gruntfile.js', 'src/js/*.js']
		},
		
		useref: {
			html: ['dist/includes/head_css.php', 'dist/includes/foot_js.php'],
			temp: 'dist'
		}
		
	});
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-useref');
	
	// Run 'grunt dist' to distribute the website
	grunt.registerTask('default', ['jshint', 'clean:pre', 'copy', 'useref', 'concat', 'uglify', 'cssmin', 'clean:post']);

};


