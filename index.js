var moment = require('moment');
moment.locale('es');
var day = moment("1995-12-25");

console.log(day.fromNow());
