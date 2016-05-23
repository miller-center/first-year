module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: [ 'bower_components/foundation/scss',
                        'bower_components/slick-carousel/slick',
                        'scss',
	]
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
          'css/essay.css': 'scss/essay.scss',
          'css/hero/home.css': 'scss/hero/home.scss',
          'css/hero/issue1.css': 'scss/hero/issue1.scss',
          'css/hero/issue1/essay1.css': 'scss/hero/issue1/essay1.scss',
          'css/hero/issue1/essay2.css': 'scss/hero/issue1/essay2.scss',
          'css/hero/issue1/essay3.css': 'scss/hero/issue1/essay3.scss',
          'css/hero/issue1/essay4.css': 'scss/hero/issue1/essay4.scss',
          'css/hero/issue1/essay5.css': 'scss/hero/issue1/essay5.scss',
          'css/hero/issue1/essay6.css': 'scss/hero/issue1/essay6.scss',
          'css/hero/issue2.css': 'scss/hero/issue2.scss',
          'css/hero/issue2/essay1.css': 'scss/hero/issue2/essay1.scss',
          'css/hero/issue2/essay2.css': 'scss/hero/issue2/essay2.scss',
          'css/hero/issue2/essay3.css': 'scss/hero/issue2/essay3.scss',
          'css/hero/issue2/essay4.css': 'scss/hero/issue2/essay4.scss',
          'css/hero/issue2/essay5.css': 'scss/hero/issue2/essay5.scss',
          'css/hero/issue2/essay6.css': 'scss/hero/issue2/essay6.scss',
          'css/hero/issue2/essay7.css': 'scss/hero/issue2/essay7.scss',
          'css/hero/issue3.css': 'scss/hero/issue3.scss',
          'css/hero/issue3/bernstein.css': 'scss/hero/issue3/bernstein.scss',
          'css/hero/issue3/bruner.css': 'scss/hero/issue3/bruner.scss',
          'css/hero/issue3/gale.css': 'scss/hero/issue3/gale.scss',
          'css/hero/issue3/macguineas.css': 'scss/hero/issue3/macguineas.scss',
          'css/hero/issue3/mckee.css': 'scss/hero/issue3/mckee.scss',
          'css/hero/issue3/scheppach.css': 'scss/hero/issue3/scheppach.scss',
          'css/teaser.css': 'scss/teaser.scss',
          'css/blog-entry.css': 'scss/blog-entry.scss',
          'css/about.css': 'scss/about.scss',
          'css/hero/issue4.css': 'scss/hero/issue4.scss',
          'css/hero/issue4/milkis.css': 'scss/hero/issue4/milkis.scss',
          'css/hero/issue4/milkis.css': 'scss/hero/issue4/freeman.scss',
          'css/hero/issue4/milkis.css': 'scss/hero/issue4/law.scss',
          'css/hero/issue4/milkis.css': 'scss/hero/issue4/tichenor.scss',
          'css/hero/issue4/milkis.css': 'scss/hero/issue4/martin.scss'

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
  grunt.registerTask('scss', ['sass']);
  grunt.registerTask('default', ['build','watch']);
}
