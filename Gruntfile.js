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
                src : [ 'assets/themes/bootstrap/css/style.css' ]
            }
        },

            
        concat : {
            js : {
                src : [ 'assets/themes/bootstrap/resources/bootstrap/js/bootstrap.min.js',
                        'assets/themes/bootstrap/resources/material/js/ripples.min.js',
                        'assets/themes/bootstrap/resources/material/js/material.min.js', 
                      ],
                dest : 'assets/themes/bootstrap/main.js'
            },
            css : {
                src : [ 'assets/themes/bootstrap/resources/material/css/material.min.css',
                        'assets/themes/bootstrap/resources/material/css/material-wfont.min.css',
                        'assets/themes/bootstrap/resources/bootstrap/css/bootstrap-paper.min.css',
                        'assets/themes/bootstrap/resources/material/css/ripples.min.css',
                        'assets/themes/bootstrap/css/style.css'   
                      ],
                dest : 'assets/themes/bootstrap/css/main.css'
            }
        },


        shell : {
            create : {
              command : 'touch _includes/css/critical_8bit.css &&  touch _includes/css/critical_index.css'
            },
            jekyllBuild : {
                command : 'jekyll build'
            },
            jekyllServe : {
                command : 'gnome-terminal -x sh -c  "jekyll serve" &'
            }, 
            jekyllKill : {
                command : 'killall jekyll'
            },
             updateManifest : {
                command : ' sed -i "s/#LASTMOD.*/#LASTMOD $(date) /g" cache.manifest'
            },
             clean : {
                command : 'rm assets/themes/bootstrap/css/main.css \
                 assets/themes/bootstrap/css/*.min.css \
                 assets/themes/bootstrap/main.js \
                 assets/themes/bootstrap/main.min.js'
            },

        },

        cssmin: {
        all: {
          files: [{
              expand: true,
              cwd: 'assets/',
              src:  '**/*.css',
              dest: 'assets/',
              ext: '.min.css'
          }]
      },
      

  },
   uglify: {
    options: {
      mangle: false
    },
    main: {
      files: {
        'assets/themes/bootstrap/main.min.js': ['assets/themes/bootstrap/main.js']
      }
    }
  },
   svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'assets/images/svg',
          src: ['**/*.svg', '!*binary_overlay.svg'],
          dest: 'assets/images/svg'
        }]
      }
    },


    imageoptim: {
      options: {
        quitAfter: true
      },
      distLossless: {
        options: {
          jpegMini: false,
          imageAlpha: true
        },
        files: [{
          expand: true,
          cwd: 'assets/images/',
          src: '**/*.{gif,png}',
          dest: 'assets/images/'
        }]
      },
      distLossy: {
        options: {
          jpegMini: false,
          imageAlpha: true
        },
        files: [{
          expand: true,
          cwd: 'assets/images/jpg',
          src: '**/*.{jpg,jpeg}',
          dest: 'assets/images/jpg'
        }]
      }
    },

pagespeed: {
      options: {
        locale: 'en_US',
        nokey: true,
        url: 'http://bytewise.io'
      },
      desktop: {
        options: {
          strategy: 'desktop'
        }
      },
      mobile: {
        options: {
          strategy: 'mobile'
        }
      }
    },

   phantomas: {
      prod: {
        options: {
          indexPath: 'about/perf/phantomas/',
          options   : {
            'film-strip': false,
            'no-externals': true,
            'timeout': 60
          },
          url: 'http://bytewise.io/',
          buildUi: true
        }
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
          cwd: '_site' ,
          src: ['**/*.html', '!about/perf/phantomas/**/*.html' ],
          dest: '_site'
      }]
  }
},
    penthouse: {
      index : {
        outfile : '_includes/css/critical_index.css',
        css : 'assets/themes/bootstrap/css/main.css',
        url : 'http://localhost:4000',
        width : 1280,
        height : 720
      },
       blog: {
        outfile : '_includes/css/critical_8bit.css',
        css : 'assets/themes/bootstrap/css/main.css',
        url : 'http://localhost:4000/8bit',
        width : 1280,
        height : 720
      }
    },
"closure-compiler": {
    frontend: {
      closurePath: 'node_modules/',
      js: 'assets/themes/bootstrap/main.js',
      jsOutputFile: 'assets/themes/bootstrap/main.js',
      maxBuffer: 500,
      options: {
        compilation_level: 'ADVANCED_OPTIMIZATIONS',
      }
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

    grunt.registerTask( 'optimize', [ 'imageoptim','svgmin' ] );
    grunt.registerTask( 'minimize', ['uglify', 'cssmin',] );
    grunt.registerTask( 'csslint', [ 'csslint'] );
    grunt.registerTask( 'test', ['phantomas', 'pagespeed'] );
    grunt.registerTask( 'build', [ 'concat', 'minimize' , 'shell:jekyllBuild', 'htmlmin'] );
    grunt.registerTask( 'deploy', ['build', 'shell:updateManifest'] );

};


//grunt-contrib-watch grunt-contrib-htmlmin grunt-autoprefixer grunt-csscomb grunt-contrib-jshint grunt-svgmin grunt-usemin grunt-imageoptim grunt-shell grunt-contrib-concat grunt-contrib-uglify grunt-contrib-cssmin grunt-contrib-csslint