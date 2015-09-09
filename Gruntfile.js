module.exports = function(grunt) {

    grunt.initConfig({
        shell: {
            options: {
                stdout: true,
                execOptions: {
                    maxBuffer: Infinity
                }                
            },
            build: {
                command: 'make'
            },
            test: {
                command: 'make test'
            },
            clean: {
                command: 'make clean'
            }
        },
        bowerRelease: {
            options: {
                overwriteTag: 'true'
            },
            mathquill: {
                options: {
                    endpoint: 'https://github.com/apollo-ctp/mathquill.git',
                    name: 'apollo-ctp-mathquill',
                    stagingDir: 'staging'
                },
                files: [{
                    expand: true,
                    cwd: 'build',
                    src: '**/*',
                    dest: 'bower'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-bower-release');

    grunt.registerTask('clean', [
        'shell:clean'
    ]);

    grunt.registerTask('test', [
        'shell:test'
    ]);

    grunt.registerTask('publish', [
        'shell:build',
//        'copy:bower',
        'bowerRelease:mathquill'
    ]);
}
