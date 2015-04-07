module.exports = function( grunt ) {
    // load time-grunt and all grunt plugins found in the package.json
    require( 'time-grunt' )( grunt );
    require( 'load-grunt-tasks' )( grunt );
    grunt.initConfig({
        csslint : {
            test : {
                options : {
                    import : 2
                },
                src : [ 'assets/themes/bootstrap/css/style.css',
                'assets/themes/bootstrap/css/snippets.css' ]
            }
        },

        concat : {
            dist : {
                src : [ 'assets/themes/bootstrap/css/style.css', 
                'assets/themes/bootstrap/css/snippets.css'],
                dest : 'assets/themes/bootstrap/css/main.css'
            }
        },


        shell : {
            jekyllBuild : {
                command : 'jekyll build'
            },
            jekyllServe : {
                command : 'jekyll serve'
            }
        },

        cssmin: {
          target: {
            files: [{
              expand: true,
              cwd: 'assets/themes/bootstrap/css/',
              src: ['*.css', '!*.min.css'],
              dest: 'assets/themes/bootstrap/css/',
              ext: '.min.css'
          }]
      }
  },

  htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          keepClosingSlash: true,
          minifyCSS: true,
          minifyJS: true
      },
      files: [{
          expand: true,
          cwd: ['_site/' ],
          src: ['*.html'],
          dest: '_site/'
      }]
  }
},
csscomb: {
    dist: {
        options: {
            config: '.csscomb.json'
        },
        files: {
            'assets/themes/bootstrap/css/main-sorted.css': ['assets/themes/bootstrap/css/main.css']
        }
    }
},

prettify: {

  // Prettify a directory of files 
  all: {
    expand: true,
    cwd: './',
    ext: '.html',
    src: ['**/*.html'],
    dest: './'
  }
},

watch : {
    files : [ '_layouts/*.html',
    '_posts/*.markdown',
    'css/*.css',
    'css/libs/*.css',
    '_config.yml',
    'index.html',
    '404.html' ],
    tasks : [ 'concat',
    'cssmin',
    'shell:jekyllServe' ],
    options : {
        spawn : false,
        interrupt : true,
        atBegin : true,
        livereload : true
    }
}
});

    // register custom grunt tasks

    grunt.registerTask( 'clean', [ 'prettify'] );
    grunt.registerTask( 'lint', [ 'csslint'] );
    grunt.registerTask( 'test', [ 'lint' ] );
    grunt.registerTask( 'optimize', [ 'concat', 'csscomb', 'cssmin', 'htmlmin'] );
    //grunt.registerTask( 'deploy', [ ] )
};


//grunt-contrib-watch grunt-contrib-htmlmin grunt-autoprefixer grunt-csscomb grunt-contrib-jshint grunt-svgmin grunt-usemin grunt-imageoptim grunt-shell grunt-contrib-concat grunt-contrib-uglify grunt-contrib-cssmin grunt-contrib-csslint
