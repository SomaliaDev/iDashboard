const elixir = require('laravel-elixir');
const path = require('path');
require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application as well as publishing vendor resources.
 |
 */

elixir(mix => {
  Elixir.webpack.mergeConfig({
        resolveLoader: {
            root: path.join(__dirname, 'node_modules'),
        },
        module: {
            loaders: [
                {
                    test: /\.css$/,
                    loader: 'style!css'
                }
            ]
        }
    });
    mix.styles([
        '../vendors/bootstrap/css/bootstrap.min.css',
        '../vendors/font-awesome/css/font-awesome.min.css',
        '../vendors/animate/animate.css',
        'style.css',
    ],'public/admin/css/all.css')
    .styles([
      'login.css'
    ],'public/admin/css/login.css')
    .scripts([
        '../vendors/jquery/jquery-2.1.1.js',
        '../vendors/bootstrap/js/bootstrap.min.js',
        '../vendors/metisMenu/jquery.metisMenu.js',
        '../vendors/slimscroll/jquery.slimscroll.min.js',
        '../vendors/Particleground.js',
        'admin/inspinia.js'
    ],'public/admin/js/all.js')
    .copy('resources/assets/css/patterns', 'public/admin/css/patterns')
    .copy('resources/assets/css/patterns', 'public/build/admin/css/patterns')
    .copy('resources/assets/img', 'public/admin/img')
    .copy('resources/assets/vendors/font-awesome/fonts', 'public/admin/fonts')
    .copy('resources/assets/vendors/font-awesome/fonts', 'public/build/admin/fonts')
    .version(['admin/css/all.css','admin/css/login.css','admin/js/all.css'])
    .webpack('./resources/assets/js/app.js','./public/admin/js');
});
