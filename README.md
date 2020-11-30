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
console.log(thisYearYy); // outputs as: 2020
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

## HTML Prototype

Use this into your HTML file before `</body>` tag:
```
<script src="date-fromatter-html-prototype-v1.0.0.js"></script>
```

This is HTML structure of the example display:
```
<div id="display-wrapper" class="display-wrapper">
    <p class="p1">Current Date: <span class="p1-date"></span></p>
    <p class="p2">Current Date: <span class="p2-date"></span></p>
</div>
```

To display the Date and Time according to above HTML:
```
// Define display wrapper
const displayWrapper = document.getElementById('display-wrapper');
// Define display element
const displayElement = displayWrapper.querySelector('.p1-date');
const displayDateElement = displayWrapper.querySelector('.p2-date');

// Define current date and time to display
let dateDay = dateTimeFormatter('DD');
// Display Date
displayDateElement.innerHTML = dateDay;

// Display current date and time
setInterval(() => {
    displayElement.innerHTML = dateTimeFormatter();
}, 1000);
```

Expected Output:
```
Mon Nov 30 2020 19:25:49 GMT+0530 (India Standard Time)
```

```
30 November, Monday
```

The output values will be depending on your geographical location and time.