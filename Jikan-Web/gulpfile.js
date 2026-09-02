import gulpSass from 'gulp-sass';
import { src, dest, watch, series, parallel } from 'gulp';
import * as dartSass from 'sass';
import terser from 'gulp-terser';
import plumber from 'gulp-plumber';
import { deleteAsync } from 'del';

import rollup from '@rollup/stream';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const sass = gulpSass(dartSass);

export function clean() {
    return deleteAsync(['./build']);
};

export function js() {
    return rollup({
        input: './src/js/app.js',
        plugins: [
            nodeResolve(),
            commonjs()
        ],
        output: {
            format: 'es'
        }
    })
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(plumber())
        .pipe(terser())
        .pipe(dest('./build/js'));
};

export function css() {
    return src('./src/scss/style.scss', { sourcemaps: true })
        .pipe(plumber())
        .pipe(sass({
            style: 'compressed'
        }).on('error', sass.logError))
        .pipe(dest('./build/css', { sourcemaps: '.' }));
};

export function html() {
    return src('./index.html')
        .pipe(dest('./build'));
};

export function pages() {
    return src('./pages/**/*.html')
        .pipe(dest('./build/pages'));
};

export function publicFiles() {
    return src('./public/**/*', { encoding: false })
        .pipe(dest('./build'));
};

export function dev() {
    watch('./src/scss/**/*.scss', css);
    watch('./src/js/**/*.js', js);
    watch('./index.html', html);
    watch('./pages/**/*.html', pages);
    watch('./public/**/*', publicFiles);
};

export const build = series(
    clean,
    parallel(js, css, html, pages, publicFiles)
);

export default series(build, dev);