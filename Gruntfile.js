module.exports = grunt => {
    const sass = require("node-sass");
    const imageminJpegtran = require('imagemin-jpegtran');
    const imageminOptipng = require('imagemin-optipng');
    const imageminSvgo = require('imagemin-svgo');

    grunt.initConfig({
        concat: {
                sass: {
                    // src: [
                    //     // CONCATENANDO ARQUIVOS PARA UM MESMO SCSS
                    //     './src/assets/sass/_designsystem.scss',
                    //     './src/assets/sass/_global.scss',
                    //     './src/assets/sass/index.scss',
                    // ],
                    // dest: './src/assets/sass/index.scss'
                },
                // js: {
                //    src: [
                //         './src/assets/js/*.js',
                //    ],
                //    dest: './src/assets/js/all.js'
                // }
        },
        sass: {
            options: {
                implementation: sass, 
                expand: true,
            },
            build: {
                files:[{
                    // MAPEAMENTO DOS SASS PARA O CSS
                    src: ['src/assets/sass/index.scss'],
                    dest: 'src/assets/css/index.css'
                }]
            }
        },
        cssmin: {
            styles: {
                files: {
                    // MINIMIFICANDO O CSS
                    './src/assets/css/index.min.css': ['./src/assets/css/index.css'],
                    './src/assets/css/privacy.min.css': ['./src/assets/css/privacy.css'],
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    // './dist/assets/js/print.min.js': ['./src/assets/js/print.js']
                }
            }
        },
        imagemin: {
            static: {
                options: {
                    optimizationLevel: 3,
                    svgoPlugins: [{removeViewBox: false}],
                    use: [imageminOptipng(), imageminJpegtran(), imageminSvgo()]
                },
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['assets/img/*.{png,jpg,gif,jpeg}', 'assets/img/*/*.{png,jpg,gif,jpeg}'],
                    dest: 'dist/assets/img'
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['*.html'],
                    dest: 'dist/'
                }]
            },
        },
        clean: {
            build: ['./dist/*'],
            dev: ['./src/assets/**/*.min.*', './src/assets/**/all.*'],
            js: ['./src/assets/js/*.min.*', './src/assets/js/*.js', './src/libs/bootstrap-5.1.3-dist/js/*.js'],
            css: ['./src/assets/sass/*.min.*', './src/libs/bootstrap-5.1.3-dist/css/*.min.*'],
            release: ['./dist/assets/*/none.*']
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: ['*.{png,ico,jpg,js,json,xml,webp}'],
                        dest: 'dist/',
                        flatten: true,
                        filter: 'isFile',
                    },
                    {    
                        expand: true,
                        cwd: 'src/assets/',
                        src: ['**/*.min.{js,css}', '**/_main.{js,css}','**/bootstrap.{js,css}','**/owl-carousel.{js,css}','**/carousel-cripito.{js,css}' ],
                        dest: 'dist/assets/',
                        filter: 'isFile',
                    },
                    {    
                        expand: true,
                        cwd: 'src/libs/',
                        src: ['**/*.min.{js,css}', '**/_main.{js,css}','**/bootstrap.{js,css}','**/owl-carousel.{js,css}','**/carousel-cripito.{js,css}' ],
                        dest: 'dist/libs/',
                        filter: 'isFile',
                    },
                    {   
                        expand: true,
                        cwd: 'src/assets/font',
                        src: ['*', '*'],
                        dest: 'dist/assets/font',
                        filter: 'isFile',
                    },
                    {   
                        expand: true,
                        cwd: 'src/privacy',
                        src: ['*/*'],
                        dest: 'dist/privacy',
                        filter: 'isFile',
                    },
                    
                    {
                        expand: true,
                        cwd: 'src/assets/img/',
                        src: ['*'],
                        dest: 'dist/assets/img',
                        filter: 'isFile',
                    }],
                }
        },
        watch: {
            files: ['src/*.html', 'src/assets/sass/*.scss', 'src/assets/js/*.js', ],
            tasks: ['clean:dev', 'clean:build','concat', 'sass', 'cssmin', 'uglify', 'htmlmin', 'copy', 'clean:release'],
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: {
                        path: 'dist/',
                        options: {
                            index: 'index.html'
                        }
                    }
                }
            }
        }
    });

    grunt.registerTask('build', function() {
        grunt.task.run(['clean:dev', 'clean:build', 'concat', 'sass', 'cssmin','htmlmin', 'copy', 'clean:release']);
    });
    grunt.registerTask('dev', function() {
        grunt.task.run(['watch']);
    });
    grunt.registerTask('default', ['connect', 'watch']);    
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks("grunt-sass");
    

};