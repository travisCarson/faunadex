module.exports = function (grunt) {
  var webpackConfig = require('./webpack.config.js');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      scripts: {
        files: 'client/**/*.js',
        tasks: ['webpack']
      }
    },
    webpack: {
      options: webpackConfig,
      faunadex: {
        entry: './client/index.js',
        output: {
          path: __dirname + '/client',
          filename: 'bundle.js'
        },

        stats: {
          colors: true,
          modules: true,
          reasons: true
        },

        watch: false,
        progress: true
        
      }
    },
    nodemon: {
      dev: {
        script: 'server/server.js',
        watch: ['server']
      }
    },
    concurrent: {
      dev: {
        tasks: ['nodemon', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-webpack-without-server');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('startserver', '', function () {
    var taskList = ['concurrent', 'nodemon', 'watch'];
    grunt.task.run(taskList);
  });


};
