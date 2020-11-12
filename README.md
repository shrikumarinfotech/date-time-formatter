# Date Time Formatter
Use "Date Time Formatter" to get Date and Time in well formatted way in JavaScript.

# Usage

```
// default output
const todayDefault = dateTimeFormatter();
console.log(todayDefault); // outputs as: Thu Nov 12 2020 09:14:06 GMT+0530 (India Standard Time)
```

```
// output format DD
const todayDD = dateTimeFormatter('DD');
console.log(todayDD); // outputs as: 11 November, Wednesday
```

```
// output format DD-MM
const todayDDMM = dateTimeFormatter('DD-MM');
console.log(todayDDMM); // outputs as: 11 November
```

```
// output format DD-MM-YY
const todayDDMMYY = dateTimeFormatter('DD-MM-YY');
console.log(todayDDMMYY); // outputs as: 11 November, 2020
```

```
// output format DD-MM-YY-TIME
const todayDDMMYYTIME = dateTimeFormatter('DD-MM-YY-TIME');
console.log(todayDDMMYYTIME); // outputs as: 11 November, 2020 20:45:12
```

```
// output format Dd
const todayDd = dateTimeFormatter('Dd');
console.log(todayDd); // outputs as: Thursday
```

```
// output format Mm
const todayMm = dateTimeFormatter('Mm');
console.log(todayMm); // outputs as: November
```

```
// output format Yy
const thisYearYy = dateTimeFormatter('Yy');
console.log(thisYearYy); // outputs as: 202
```

```
// output format Hrs
const todayHours = dateTimeFormatter('HRS');
console.log(todayHours); // outputs as: 12:56:20
```

```
// output format Time in AM/PM
const thisTimeAmPm = dateTimeFormatter('TIME-am-pm');
console.log(thisTimeAmPm); // outputs as: 12:56:20 PM
```

```
// output format d
const todayWithd = dateTimeFormatter('d');
console.log(todayWithd); // outputs as: 12 november, 2020
```

```
// output format m
const todayWithm = dateTimeFormatter('m');
console.log(todayWithm); // outputs as: 12 november
```

```
// output format Dd-Mm-Yy-TIME-am-pm
const todayDDMMYYTIMEAMPM = dateTimeFormatter('Dd-Mm-Yy-TIME-am-pm');
console.log(todayDDMMYYTIMEAMPM); // outputs as: 12 November, 2020 12:56:20 PM
```

```
// output format TZ
const timeZoneTZ = dateTimeFormatter('TZ');
console.log(timeZoneTZ); // outputs as: November 12, 2020, 12:56:20 GMT+5:30
```

The output values will be depending on your geographical location and time.