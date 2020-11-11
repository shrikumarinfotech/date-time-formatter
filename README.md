# Date Time Formatter
Use JavaScript formatter to get Date and Time in well formatted way.

# Usage

```
// default output
const todayDefault = dateTimeFormatter();
console.log(todayDefault); // outputs as: 11 November, 2020 20:45:12
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

The output values will be depending on your geographical location and time.