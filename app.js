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

// output format Dd
const todayDd = dateTimeFormatter('Dd');
console.log(todayDd);

// output format Mm
const todayMm = dateTimeFormatter('Mm');
console.log(todayMm);

// output format Yy
const thisYearYy = dateTimeFormatter('Yy');
console.log(thisYearYy);

// output format Hrs
const todayHours = dateTimeFormatter('HRS');
console.log(todayHours);

// output format Time in AM/PM
const thisTimeAmPm = dateTimeFormatter('TIME-am-pm');
console.log(thisTimeAmPm);

// output format d
const todayWithd = dateTimeFormatter('d');
console.log(todayWithd);

// output format m
const todayWithm = dateTimeFormatter('m');
console.log(todayWithm);

// output format Dd-Mm-Yy-TIME-am-pm
const todayDDMMYYTIMEAMPM = dateTimeFormatter('Dd-Mm-Yy-TIME-am-pm');
console.log(todayDDMMYYTIMEAMPM);

// output format TZ
const timeZoneTZ = dateTimeFormatter('TZ');
console.log(timeZoneTZ);