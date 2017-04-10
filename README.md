# gulp concat sample

## 概要

* gulp-concatを使って単純に連結させている

## サンプル

* gulpfile.jsに以下のように記述している

````javascript
    gulp.src(['header.html', 'templates/**/*.html', 'footer.html'])
````

* header.html, templates内のhtmlファイル, footer.html の順に連結される
