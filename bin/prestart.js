var path = require('path');
var fs = require('fs');

var iter = require('super-iter');
var forEach = iter.forEach;

var gulp = require('gulp');
require('../gulpfile');


// var src = require('require-all')(path.join(process.cwd(), 'src'));

// forEach(src, function (dirs, version) {

//   var file_path = path.join(process.cwd(), 'src', version, 'register.js');

//   fs.unlinkSync(file_path);

//   var tok = [];

//   forEach(dirs, function (dir, dir_name) {

//     forEach(dir, function (file, file_name) {

//       if (dir_name === 'components') {

//         var cmp_name = file_name;

//         forEach(file, function (file, file_name) {

//           tok.push('import * as ' + dir_name + '_' + cmp_name + '_' + file_name + ' from \'./' + dir_name + '/' + dir_name + '/' + file_name + '\';\n');
//         });
//       }
//       else {

//         tok.push('import * as ' + dir_name + '_' + file_name + ' from \'./' + dir_name + '/' + file_name + '\';\n');
//       }

//     });

//   });

//   fs.writeFileSync(file_path, tok.join(''));

// });


gulp.start('prestart');
