module.exports = function(grunt) {
  grunt.loadTasks('tasks');
  grunt.initConfig({
    coveralls: {
      options: {
        debug: true,
        coverageDir: 'test',
        dryRun: true,
        force: true,
        recursive: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-karma-coveralls');

  grunt.registerTask('default', ['coveralls']);
};
