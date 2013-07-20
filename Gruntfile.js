module.exports = function (grunt) {
	
	// Sass
	grunt.initConfig({
		sass: {
			main: {
				files: {
					'main.css': 'scss/main.scss'
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-sass');
	
	grunt.registerTask('default', ['sass']);
	
};