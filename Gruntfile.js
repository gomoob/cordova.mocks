module.exports = function(grunt) {

    /**
     * An object which defines the Grunt Project configuration.
     */
    var gruntConfiguration = {

        /**
         * Reads the 'package.json' file and puts its content into a 'pkg' Javascript object.
         */
        pkg : grunt.file.readJSON('package.json'),
        
        /**
         * Clean task.
         */
        clean : ['target/**/*'],
        
        /**
         * JSHint Task.
         */
        jshint : {
            lint : {
                src : [
                    'Gruntfile.js',
                    'src/**/*.js',
                    'test/**/*.js'
                ]
            }
        },
        
        /**
         * Mocha Test Task.
         */
        mochaTest : {
            spec : {
                options : {
                    require : 'test/setup/node.js',
                    reporter : 'dot',
                    clearRequireCache : true,
                    mocha : require('mocha')
                },
                src : [
                    'test/spec/**/*.js'
                ]
            }
        },
        
        /**
         * Configures task used to pre process files
         */
        preprocess : {  
            lib : {
                src : 'src/cordova.mocks.js',
                dest : 'dist/cordova.mocks.js'
            }
        }, 
        
        /**
         * Task used to minify the library.
         */
        uglify: {   
            lib: {
                src: 'dist/cordova.mocks.js',
                dest: 'dist/cordova.mocks.min.js',
                options: {
                    sourceMap: true
                }
            }
        }

    };  /* Grunt project configuration object */

    // This has to be done before calling 'initConfig' (see https://github.com/sindresorhus/time-grunt)
    require('time-grunt')(grunt);
    
    // Initialize the Grunt Configuration
    grunt.initConfig(gruntConfiguration);

    // Load the Grunt Plugins
    require('load-grunt-tasks')(grunt);

    /**
     * Task used to execute the unit tests of the project.
     */
    grunt.registerTask(
        'test', 
        'Test the library',
        [
            'jshint', 
            'preprocess', 
            'mochaTest' 
        ]
    );

    /**
     * Task used to generate a coverage report.
     */
    grunt.registerTask(
        'coverage', 
        'Generate coverage report for the library', 
        [
            'jshint',
            'env:coverage',
            'instrument',
            'mochaTest',
            'storeCoverage',
            'makeReport',
            'coveralls'
        ]
    );
    
    /**
     * Task used to build the library.
     */
    grunt.registerTask(
        'build', 
        'Build the library',
        [
            'test',
            'uglify'
        ]
    );

    /**
     * Default task.
     */
    grunt.registerTask('default', [ 'clean', 'build']);

};
