module.exports = function (grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            /*css: {
                src: [''],
                dest: ''
            },*/
            js: {
                src: ['./js/*.js', './js/*/*.js'],
                dest: './application.js'
            }
        },
        cssmin: {
            css: {
                src: '',
                dest: ''
            }
        },
        uglify: {
            js: {
                src: './application.js',
                dest: './application.min.js'
            }
        },
        watch: {
            /*css: {
                files: [''],
                tasks: ['concat:css', 'cssmin:css']
            },*/
            js: {
                files: ['./js/*.js', './js/*/*.js'],
                tasks: ['concat:js']
            }
        }
    });

    // 2. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 3. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'watch']);

};
