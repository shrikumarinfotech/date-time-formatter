/*
* Name: Date Time Formatter
* Description: Format date and time in JavaScript
* Author: Shrikumar Infotech
* Author URI: dev@shrikumarinfotech.com
* License:              GPLv2 or later
* License URI:          http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
*/

// Date-Time Formatter
'use strict';

const dateTimeFormatter = require('./date-formatter-v1.0.0');

// default output
const todayDefault = dateTimeFormatter();
console.log(todayDefault);

// output format DD
const todayDD = dateTimeFormatter('DD');
console.log(todayDD);

// output format DD-MM
const todayDDMM = dateTimeFormatter('DD-MM');
console.log(todayDDMM);

// output format DD-MM-YY
const todayDDMMYY = dateTimeFormatter('DD-MM-YY');
console.log(todayDDMMYY);

// output format DD-MM-YY-TIME
const todayDDMMYYTIME = dateTimeFormatter('DD-MM-YY-TIME');
console.log(todayDDMMYYTIME);