module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        //Read the package.json (optional)
        pkg: grunt.file.readJSON('package.json'),

        // Task configuration.
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/my-grid.css': 'src/my-grid.scss'
                }
            }
        },
        watch: {
            scripts: {
                files: [
                    './**/*.scss'
                ],
                tasks: ['sass']
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['sass']);
};