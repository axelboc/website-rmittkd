
module.exports = function(grunt) {

	grunt.initConfig({
	
		pkg: grunt.file.readJSON('package.json'),
		
		csslint: {
			// Lint CSS files
			lint: {
				src: ['src/css/*.css'],
				options: {
					"duplicate-background-images": false,
					"box-sizing": false,
					"box-model": false,
					"outline-none": false
				}
			}
		},
		
		jshint: {
			// Lint JS files
			files: ['Gruntfile.js', 'src/js/*.js']
		}
		
	});
	
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	
	// Run 'grunt' to lint JS and CSS
	grunt.registerTask('default', ['jshint', 'csslint']);

};


