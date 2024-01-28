
import gulpSass from "gulp-sass"
import * as dartSass from "sass"
import rename from "gulp-rename"

import cleanCss from "gulp-clean-css"
import wepcss from "gulp-webpcss"
import autoprefixer from "gulp-autoprefixer"
import groupCssMediaQueries from "gulp-group-css-media-queries"

const sass = gulpSass(dartSass)

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })

        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SCSS",
                message: "Error: <%= error.message %>"
            })
        ))


        .pipe(sass({
            outputStyle: 'expanded'
        }))

        .pipe(app.plugins.reaplace(/@img\//g, '../images/content/'))
        .pipe(app.plugins.reaplace(/@svg\//g, '../images/svg/'))
        .pipe(app.plugins.reaplace(/@js\//g, '../js/'))
        .pipe(app.plugins.reaplace(/@scss\//g, '../css/'))
        .pipe(app.plugins.reaplace(/@icons\//g, 'images/svg/icons'))

        .pipe(
            app.plugins.if(
                app.isBuild,
                groupCssMediaQueries()
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                wepcss({
                    webClass: ".webp",
                    noWebpClass: ".no-webp"
                })
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                autoprefixer({
                    grid: true,
                    overrideBrowserslist: ["last 10 versions"],
                    cascade: true
                })
            )
        )
        // .pipe(groupCssMediaQueries())
        // .pipe(wepcss({
        //     webClass: ".webp",
        //     noWebpClass: ".no-webp"
        // }))
        // .pipe(autoprefixer({
        //     grid: true,
        //     overrideBrowserslist: ["last 10 versions"],
        //     cascade: true
        // }))

        .pipe(app.gulp.dest(app.path.build.css))
        // .pipe(cleanCss())
        .pipe(
            app.plugins.if(
                app.isBuild,
                cleanCss()
            )
        )
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream())
}