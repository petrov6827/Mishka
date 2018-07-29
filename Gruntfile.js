module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            style: {
                files: {
                    ['css/style.css'] : ['sass/style.scss']
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-sass");
};
