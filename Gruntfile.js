module.exports = function (grunt) {
	
	// Sass
	grunt.initConfig({
		sass: {
			main: {
				files: {
					'main.css': 'scss/main.scss'
				}
			}
		},
		watch: {
			files: ['./scss/*'],
			tasks: ['default']
		}
	});
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default', ['sass']);
	
};