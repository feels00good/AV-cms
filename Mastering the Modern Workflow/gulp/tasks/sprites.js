var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    rename = require('gulp-rename'),
    del = require('del');

var config = {
  mode: {
    css: {
      sprite: 'sprite.svg',
      render: {
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    } 
  }
}

gulp.task('startClean', function() {
  return del(['./app/assets/images/sprites']);
})

gulp.task('createSprite', ['startClean'], function() {
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/assets/images/sprites'));
})

gulp.task('copySpriteGraphic', ['createSprite'], function(){
  return gulp.src('./app/assets/images/sprites/css/**/*.svg')
    .pipe(gulp.dest('./app/assets/images/sprites'));
})

gulp.task('copySpriteCSS', ['createSprite'], function() {
  return gulp.src('./app/assets/images/sprites/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'));
})

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function() {
  return del(['./app/assets/images/sprites/css']);
})

gulp.task('icons', ['startClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']);
