import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./dist`
const srcFolder = `./src`

export const path = {
    build: {

        js: `${buildFolder}/js/`,
        images: `${buildFolder}/images/content`,
        svg: `${buildFolder}/images/svg`,
        fonts: `${buildFolder}/fonts/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
    },
    src: {

        js: `${srcFolder}/assets/js/app.js`,
        images: `${srcFolder}/assets/images/content/**/*.{jpg,jpeg,png,gif,webp,ico}`,
        svg: `${srcFolder}/assets/images/svg/**/*.svg`,
        scss: `${srcFolder}/assets/scss/style.scss`,
        html: `${srcFolder}/*.pug`, //.html
        files: `${srcFolder}/files/**/*.*`,
    },
    watch: {

        js: `${srcFolder}/assets/js/**/*.js`,
        images: `${srcFolder}/assets/images/**/*.{jpg,jpeg,png,gif,webp,svg, ico}`,
        scss: `${srcFolder}/assets/scss/**/*.scss`,
        html: `${srcFolder}/**/*.pug`,//.html
        files: `${srcFolder}/files/**/*.*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: `test`
}