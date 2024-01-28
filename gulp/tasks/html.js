import fileinclude from 'gulp-file-include'
import webpHtmlNosvg from 'gulp-webp-html-nosvg'
import versionNumber from 'gulp-version-number'
import pug from "gulp-pug"

export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "HTML",
                message: "Error: <%= error.message %>"
            })
        ))
        // .pipe(fileinclude())
        .pipe(pug({
            pretty: true,
            varbose: true
        }))
        .pipe(app.plugins.reaplace(/@img\//g, 'images/content/'))
        .pipe(app.plugins.reaplace(/@svg\//g, 'images/svg/'))
        .pipe(app.plugins.reaplace(/@js\//g, 'js/'))
        .pipe(app.plugins.reaplace(/@scss\//g, 'css/'))
        .pipe(app.plugins.reaplace(/@icons\//g, 'images/svg/icons'))

        .pipe(
            app.plugins.if(
                app.isBuild,
                webpHtmlNosvg()
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                versionNumber({
                    'value': '%DT%',
                    'append': {
                        'key': '_v',
                        'cover': 0,
                        'to': [
                            'css',
                            'js',
                        ]
                    },
                    'output': {
                        'file': 'gulp/version.json'
                    }
                })
            )
        )
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream())
}