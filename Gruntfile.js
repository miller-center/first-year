module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss', 'bower_components/slick-carousel/slick']
      },
      dist: {
        options: {
          outputStyle: 'nested',
          sourceMap: true,
        },
        files: {
          'css/first-year.css': 'scss/first-year.scss',
          'css/home.css': 'scss/home.scss',
          'css/issue.css': 'scss/issue.scss',
          'css/essay.css': 'scss/essay.scss'
        }
      }
    },

    jade: {
        compile: {
            options: {
                client: false,
                pretty: true
            },
            files: [ {
              cwd: "jade",
              src: '*.jade',
              dest: "html",
              expand: true,
              ext: ".html"
            } ]
        }
    },

    watch: {
      grunt: {
        options: {
          reload: true
        },
        files: ['Gruntfile.js']
      },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      },
      jade: {
        files: 'jade/*.jade',
        tasks: ['jade']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks("grunt-contrib-jade");

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','watch']);
}
