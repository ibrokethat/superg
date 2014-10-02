var path = require('path');
var co = require('co');
var CONF = require('config');
var moment = require('moment-timezone');

// globally set the timezone to UTC
process.env.TZ = 'UTC';

// globally set the locale of moment
// moment.locale(CONFIG.date.lang);
// // set start day of the week
// moment.localeData(CONFIG.date.lang)._week.dow = CONFIG.date.start_of_week;

//  load the src files
var src = require('require-all')(path.join(process.cwd(), 'src'));

module.exports.app = {};

co(function* () {
    // start the server
    module.exports.app = yield require('superposition').default(CONF.app.stable, src[CONF.app.stable.version]);
})();
