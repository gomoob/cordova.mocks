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
         * Mocha unit testing.
         */
        blanket_mocha : {
            
            test : {
                src : ['src/js/test.html'],
                options : {
                    log: true,
                    logErrors: true,
                    run: true,

                    // Specify a custom Mocha Reporter which outputs to the console using the 'Specs' reporter and 
                    // create an xUnit XML file in parallel (which is then used by Jenkins to display testing charts)
                    reporter: process.cwd() + '/src/test/mocha-xunit-file-reporter.js',
                    threshold: 0
 
                }
            }
            
        },
        
        /**
         * Clean task.
         */
        clean : ['target/**/*'],
        
        /**
         * Runs a Web Server during the execution of Grunt.
         */
        connect: {

            server: {

                options: {
                    hostname : '127.0.0.1',
                    port: 8888,
                    base: '.'

                    // Use those properties only for testing purpose in development
                    /*
                    ,debug: true,
                    keepalive : true,
                    open: {
                        target: 'http://127.0.0.1:8888/src/test/js/test.html'
                    }
                    */
                    
                }
        
            }
          
        },
        
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
        }, /* JSHint Task */
        
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
    grunt.loadNpmTasks('grunt-blanket-mocha');
    grunt.loadNpmTasks('grunt-check-modules');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-execute');
    grunt.loadNpmTasks('grunt-preprocess');

    /**
     * Task used to execute the unit tests of the project.
     */
    grunt.registerTask(
        'test', 
        'Test the library',
        [/*
            'connect', 
            'blanket_mocha' 
         */
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
            'jshint',
            'test',
            'preprocess', 
            'uglify'
        ]
    );

    /**
     * Default task.
     */
    grunt.registerTask('default', [ 'clean', 'build']);

};
