'use strict';

// initiate dateTimeFormatter function
const dateTimeFormatter = function( formatString ){

    // define format options
    const formatOptions = [
        "DD",
        "DD-MM",
        "DD-MM-YY",
        "DD-MM-YY-TIME"
    ];

    /**
     * functions for data
     */

    // current date
    const datetime = new Date(Date.now());
    // define month names
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // define day names
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // generate and store date and time values
    // get day:date
    const currentDay = function( data ){
        return data.getDate();
    }
    const theDay = currentDay( datetime );
    // console.log('Today Date is: ' + theDay );

    // get month:number
    const currentMonthNum = function( data ){
        return data.getMonth();
    }
    const theMonthNum = currentMonthNum(datetime);
    const theMonthName = months[theMonthNum];
    // console.log('The Month is: ' + months[theMonthNum]);

    // get the day:name
    const currentDayNum = function( data ){
        return data.getDay();
    }
    const theDayNum = currentDayNum(datetime);
    const theDayName = days[theDayNum];
    // console.log('Today is: ' + days[theDayNum]);

    // get the year:number
    const theCurrentYear = function( data ){
        return data.getFullYear();
    }
    const theYear = theCurrentYear(datetime);
    // console.log('The Year: ' + theYear);

    // get the time:00:00:00
    // get hours:00:
    const getTimeHrs = function( data ){
        return data.getHours();
    }
    const theTimeHrs = getTimeHrs( datetime );
    // get minutes:00:
    const getTimeMinutes = function( data ){
        return data.getMinutes();
    }
    const theTimeMins = getTimeMinutes( datetime );
    // get seconds:00
    const getTimeSeconds = function( data ){
        return data.getSeconds();
    }
    const theTimeSeconds = getTimeSeconds( datetime );
    // define structure as 00:00:00
    // const theTimeInHours = `${theTimeHrs}:${theTimeMins}:${theTimeSeconds}`;
    // console.log(theTimeInHours);

    // return the values depending on request
    // check for provided format
    if( formatString === formatOptions[0] ){
        // console.log( formatOptions[0] );
        // format: "DD":
        return `${theDay} ${theMonthName}, ${theDayName}`;
    }
    else if( formatString === formatOptions[1] ){
        // console.log( formatOptions[1] );
        // format: "DD-MM":
        return `${theDay} ${theMonthName}`;
    }
    else if( formatString === formatOptions[2] ){
        // console.log( formatOptions[2] );
        // format: "DD-MM-YY":
        return `${theDay} ${theMonthName}, ${theYear}`;
    }
    else if( formatString === formatOptions[3] ){
        // console.log( formatOptions[3] );
        // format: "DD-MM-YY-TIME"
        return `${theDay} ${theMonthName}, ${theYear} ${theTimeHrs}:${theTimeMins}:${theTimeSeconds}`;
    }
    else{
        // format: default:
        return `${theDay} ${theMonthName}, ${theYear} ${theTimeHrs}:${theTimeMins}:${theTimeSeconds}`;
    }

};

module.exports = dateTimeFormatter;


// console.log(`Current Date(miliseconds from 1st January 1970): ${datetime}`);

/**
 * Using custom JS functions
 */
// convert mili seconds to seconds
// const milsecToSec = function( data ){
//     if(data){
//         return (data / 1000);
//     }
// };
// let seconds = milsecToSec(datetime);
// console.log(`Seconds: ${seconds}`);

// // convert seconds to minuites
// const secToMinuites = function( data ){
//     if(data){
//         return (data / 60);
//     }
// }
// let minuites = secToMinuites(seconds);
// console.log('Minuites: ' + minuites);

// // convert minuites to hours
// const minuitesToHours = function( data ){
//     if(data){
//         return (data / 60);
//     }
// };
// let hours = minuitesToHours(minuites);
// console.log('Hours: ' + hours);

// // convert hours to days
// const hoursToDays = function( data ){
//     if(data){
//         return (data / 24);
//     }
// }
// let totaldays = hoursToDays(hours);
// console.log('Days: ' + totaldays);

// // convert days to years
// const daystoYears = function( data ){
//     if(data){
//         return ( data / 365 );
//     }
// }
// let years = daystoYears(totaldays);
// console.log('Years: ' + years);

// // calculate current year
// const currentYear = function( data ){
//     if(data){
//         return ( Math.round( data + 1970 ) );
//     }
// }
// let year = currentYear( years );
// console.log('Year: ' + year);

// // calculate current month
// const currentMonth = function( data ){
//     if(data){
//         return ( Math.round( (data % 365) / 30 ) );
//     }
// };
// let month = currentMonth(totaldays);
// console.log('Month: ' + month);
