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
        copy: {
            bower: {
                cwd: '.',
                src: 'bower.json',
                dest: 'build/bower.json'
            }
        },
        'release-bower': {
            options: {
                scanPath: 'build'
            }
        }
    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-release-bower');

    grunt.registerTask('clean', [
        'shell:clean'
    ]);

    grunt.registerTask('test', [
        'shell:test'
    ]);

    grunt.registerTask('publish', [
        'shell:build',
        'copy:bower',
        'release-bower'
    ]);
}
