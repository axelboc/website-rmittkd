
var MUNGER_CSS = 'css';
var MUNGER_JS = 'js';


/**
 * DOM Munger callback for `css_read` and `js_read` targets. 
 * @param {String} type - (MUNGER_CSS|MUNGER_JS)
 * @param {jQuery} $
 */
function mungerReadCb(type, $) {
	var refsProp = type + 'Refs';
	var refs = this.config.data.dom_munger.data[refsProp];
	
	// Prepend 'src' to each reference
	this.config.data.dom_munger.data[refsProp] = refs.map(function (ref) {
		return 'src' + ref;
	});

	// Nothing to write
	return false;
}


/**
 * DOM Munger callback for `css_write` and `js_write` targets. 
 * @param {String} type - (MUNGER_CSS|MUNGER_JS)
 * @param {jQuery} $
 */
function mungerWriteCb(type, $) {
	// Build regex
	var regex = new RegExp('main\\.' + type);
	
	// Find filename with hash created by grunt-filerev
	var filename;
	for (var key in this.filerev.summary) {
		if (regex.test(key)) {
			filename = this.filerev.summary[key].match(/main\.[^\.]+\.(css|js)/)[0];
			break;
		}
	}

	if (!filename) {
		throw new Error(type.toUpperCase() + ' filename with hash not found');
	}
	
	// Append the new DOM element
	switch (type) {
		case MUNGER_CSS:
			$('link[rel="publisher"]').after('\n<link rel="stylesheet" href="/css/' + filename + '">');
			break;
		case MUNGER_JS:
			$('script').after('\n<script src="/js/' + filename + '">');
			break;
		default:
			throw new Error('Unsupported type: ' + type);
	}
}


module.exports = function(grunt) {

	grunt.initConfig({
	
		pkg: grunt.file.readJSON('package.json'),
		
		jshint: {
			// Lint JS files
			files: ['Gruntfile.js', 'src/js/*.js']
		},
		
		clean: {
			// Clean `dist` folder
			pre: ['dist']
		},
		
		copy: {
			dist: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: [
						'**', '.htaccess', '!**/Thumbs.db', '!data/error.log', '!core/config-sample.php',
						'!css/**', '!js/**'
					],
					dest: 'dist'
				}]
			}
		},
		
		dom_munger: {
			css_read: {
				src: 'dist/includes/head_css.php',
				options: {
					read: { selector: 'link[rel="stylesheet"]', attribute: 'href', writeto: 'cssRefs', isPath: false },
					callback: mungerReadCb.bind(grunt, MUNGER_CSS)
				}
			},
			js_read: {
				src: 'dist/includes/foot_js.php',
				options: {
					read: { selector: 'script[src^="/js"]', attribute: 'src', writeto: 'jsRefs', isPath: false },
					callback: mungerReadCb.bind(grunt, MUNGER_JS)
				}
			},
			css_write: {
				src: 'dist/includes/head_css.php',
				options: {
					remove: 'link[rel="stylesheet"]',
					callback: mungerWriteCb.bind(grunt, MUNGER_CSS)
				}
			},
			js_write: {
				src: 'dist/includes/foot_js.php',
				options: {
					remove: 'script[src^="/js"]',
					callback: mungerWriteCb.bind(grunt, MUNGER_JS)
				}
			}
		},
		
		cssmin: {
			dist: {
				src: '<%= dom_munger.data.cssRefs %>',
				dest: 'dist/css/main.css'
			}
		},
		
		uglify: {
			dist: {
				src: '<%= dom_munger.data.jsRefs %>',
				dest: 'dist/js/main.js'
			}
		},
		
		filerev: {
			dist: {
				src: ['dist/css/main.css', 'dist/js/main.js']
			}
		},
		
		watch: {
			dist: {
				files: ['*', 'src/**/*'],
				tasks: ['build'],
				options: {
					atBegin: true
				}
			}
		}
		
	});
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-dom-munger');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-filerev');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	// Run 'grunt build' to distribute the website
	grunt.registerTask('build', [
		'jshint',
		'clean', 'copy',
		'dom_munger:css_read', 'cssmin',
		'dom_munger:js_read', 'uglify',
		'filerev',
		'dom_munger:css_write', 'dom_munger:js_write'
	]);

	// Run 'grunt' to distribute and watch for changes
	grunt.registerTask('default', [
		'watch'
	]);

};
