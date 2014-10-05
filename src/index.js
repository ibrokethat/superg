import * as path from 'path';
import * as co from 'co';
import * as CONF from 'config';
import * as moment from 'moment-timezone';
import superposition from 'superposition';

import * as libs from './libs';

// globally set the timezone to UTC
process.env.TZ = 'UTC';

// globally set the locale of moment
// moment.locale(CONFIG.date.lang);
// // set start day of the week
// moment.localeData(CONFIG.date.lang)._week.dow = CONFIG.date.start_of_week;

export var app = {};

co(function* () {
    // start the server
  app = yield superposition();

})();



// var path = require('path');
// var co = require('co');
// var CONF = require('config');
// var moment = require('moment-timezone');

// // globally set the timezone to UTC
// process.env.TZ = 'UTC';

// // globally set the locale of moment
// // moment.locale(CONFIG.date.lang);
// // // set start day of the week
// // moment.localeData(CONFIG.date.lang)._week.dow = CONFIG.date.start_of_week;

// //  load the src files
// var lib = require('require-all')(path.join(process.cwd(), 'lib'));

// module.exports.app = {};

// co(function* () {
//     // start the server
//   module.exports.app = yield require('superposition').default(CONF.app.stable, lib);
// })();
