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
          'css/hero/issue4/freeman.css': 'scss/hero/issue4/freeman.scss',
          'css/hero/issue4/law.css': 'scss/hero/issue4/law.scss',
          'css/hero/issue4/tichenor.css': 'scss/hero/issue4/tichenor.scss',
          'css/hero/issue4/martin.css': 'scss/hero/issue4/martin.scss',
          'css/hero/issue5.css': 'scss/hero/issue5.scss', 
          'css/hero/issue5/mckinsey.css': 'scss/hero/issue5/mckinsey.scss', 
          'css/hero/issue5/taylor.css': 'scss/hero/issue5/taylor.scss',  
          'css/hero/issue5/kondik.css': 'scss/hero/issue5/kondik.scss', 
          'css/hero/issue5/katz.css': 'scss/hero/issue5/katz.scss',
          'css/hero/issue5/gallagher.css': 'scss/hero/issue5/gallagher.scss',
          'css/hero/issue6.css': 'scss/hero/issue6.scss', 
          'css/hero/issue6/barnes.css': 'scss/hero/issue6/barnes.scss',
          'css/hero/issue6/galston.css': 'scss/hero/issue6/galston.scss',
          'css/hero/issue6/moyo.css': 'scss/hero/issue6/moyo.scss',
          'css/hero/issue6/nelson.css': 'scss/hero/issue6/nelson.scss',
          'css/hero/issue6/omara.css': 'scss/hero/issue6/omara.scss',
          'css/hero/issue6/pianta.css': 'scss/hero/issue6/pianta.scss',
          'css/hero/issue6/schragger.css': 'scss/hero/issue6/schragger.scss',
          'css/hero/issue6/wehner.css': 'scss/hero/issue6/wehner.scss',
          'css/hero/issue7/cary.css': 'scss/hero/issue7/cary.scss',
          'css/hero/issue7/douglas.css': 'scss/hero/issue7/douglas.scss',
          'css/hero/issue7/dunn.css': 'scss/hero/issue7/dunn.scss',
          'css/hero/issue7/greenberg.css': 'scss/hero/issue7/greenberg.scss',
          'css/hero/issue7/shesol.css': 'scss/hero/issue7/shesol.scss',
          'css/hero/issue8.css': 'scss/hero/issue8.scss', 
          'css/hero/issue8/atkinson.css': 'scss/hero/issue8/atkinson.scss',
          'css/hero/issue8/lahood.css': 'scss/hero/issue8/lahood.scss',
          'css/hero/issue8/villaraigosa.css': 'scss/hero/issue8/villaraigosa.scss',
          'css/hero/issue8/norton.css': 'scss/hero/issue8/norton.scss',
          'css/hero/issue8/williams.css': 'scss/hero/issue8/williams.scss',
          'css/hero/issue9.css': 'scss/hero/issue9.scss', 
          'css/hero/issue9/blackmon.css': 'scss/hero/issue9/blackmon.scss',
          'css/hero/issue9/dyson.css': 'scss/hero/issue9/dyson.scss',
          'css/hero/issue9/hinton.css': 'scss/hero/issue9/hinton.scss',
          'css/hero/issue9/patterson.css': 'scss/hero/issue9/patterson.scss',
          'css/hero/issue10.css': 'scss/hero/issue10.scss', 
          'css/hero/issue10/womack.css': 'scss/hero/issue10/womack.scss',
          'css/hero/issue10/frieden.css': 'scss/hero/issue10/frieden.scss',
          'css/hero/issue10/eichengreen.css': 'scss/hero/issue10/eichengreen.scss',
          'css/hero/issue10/chinn.css': 'scss/hero/issue10/chinn.scss',
          'css/hero/issue10/holtz-eakin.css': 'scss/hero/issue10/holtz-eakin.scss',
          'css/hero/issue10/davis.css': 'scss/hero/issue10/davis.scss',
          'css/hero/issue11.css': 'scss/hero/issue11.scss', 
          'css/hero/issue11/jenkins.css': 'scss/hero/issue11/jenkins.scss',
          'css/hero/issue11/flores.css': 'scss/hero/issue11/flores.scss',
          'css/hero/issue11/childress.css': 'scss/hero/issue11/childress.scss',
          'css/hero/issue11/lawrence.css': 'scss/hero/issue11/lawrence.scss',
          'css/hero/issue11/minsk.css': 'scss/hero/issue11/minsk.scss',
          'css/hero/issue11/bordoff.css': 'scss/hero/issue11/bordoff.scss',
          'css/hero/issue11/book.css': 'scss/hero/issue11/book.scss',
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
