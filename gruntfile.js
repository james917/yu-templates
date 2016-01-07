module.exports = function(grunt) {
    
    grunt.initConfig({
        // Init the config object
        pkg:grunt.file.readJSON('package.json'),
        // less to css 
        less: {
          root: {
            options: {
              compress:false
            },
            files: {
              'css/main.css' : 'less/main.less'
            }
          }
        },
        
    concat: {
      options:{
        stripBanners:false,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */',
      },
      root_bootstrap:{
        src: ['./bower_components/bootstrap/js/transition.js',
          './bower_components/bootstrap/js/alert.js',
          './bower_components/bootstrap/js/button.js',
          './bower_components/bootstrap/js/carousel.js',
          './bower_components/bootstrap/js/collapse.js',
          './bower_components/bootstrap/js/dropdown.js',
          './bower_components/bootstrap/js/modal.js',
          './bower_components/bootstrap/js/tooltip.js',
          './bower_components/bootstrap/js/popover.js',
          './bower_components/bootstrap/js/scrollspy.js',
          './bower_components/bootstrap/js/tab.js',
          './bower_components/bootstrap/js/affix.js'],
        dest: 'js/yu-bootstrap.js'
      },
      root_yu:{
        src: ['scripts/main.js'],
        dest: 'js/yu-main.js'
      }, 
      root_libs:{
        src: ['scripts/libs/*.js'],
        dest: 'js/yu-libs.js'
      }, 
      

    },
        
    watch: {
       root_bootstrap:{
            files:['./bower_components/bootstrap/js/transition.js',
              './bower_components/bootstrap/js/alert.js',
              './bower_components/bootstrap/js/button.js',
              './bower_components/bootstrap/js/carousel.js',
              './bower_components/bootstrap/js/collapse.js',
              './bower_components/bootstrap/js/dropdown.js',
              './bower_components/bootstrap/js/modal.js',
              './bower_components/bootstrap/js/tooltip.js',
              './bower_components/bootstrap/js/popover.js',
              './bower_components/bootstrap/js/scrollspy.js',
              './bower_components/bootstrap/js/tab.js',
              './bower_components/bootstrap/js/affix.js'],
            tasks:['concat:root_bootstrap'],
            options:{
              livereload: true
            }
         },
       root_yu: {
            files:['scripts/*.js'],
            tasks:['concat:root_yu'],
            options:{
              livereload: true
            }
      }, 
       root_yu: {
            files:['scripts/libs/*.js'],
            tasks:['concat:root_libs'],
            options:{
              livereload: true
            }
      }, 
       less:{
                files:['css/*.css', 'less/**/*.less'],
                tasks:['less'],
                options:{
                    livereload: true
                    }
                }
     }
    

    });
    
    
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less','concat', 'watch' ]);

    
    
}//end