module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        //Read the package.json (optional)
        pkg: grunt.file.readJSON('package.json'),

        // Task configuration.
        sass: {
            options: {
                sourceMap: false
            },
            dist: {
                files: {
                    'dist/my-grid.css': 'src/my-grid.scss',
                    'dist/my-grid-ie8.css': 'src/my-grid-ie8.scss',
                }
            }
        },
        cssmin: {
            "my-grid": {
                src: 'dist/my-grid.css',
                dest: 'dist/my-grid.min.css'
            },
            "my-grid-ie8" : {
                src: 'dist/my-grid-ie8.css',
                dest: 'dist/my-grid-ie8.min.css'
            }
        },
        watch: {
            scripts: {
                files: [
                    './**/*.scss'
                ],
                tasks: ['sass','cssmin']
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['sass','cssmin']);
};