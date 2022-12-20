// function previousDay(year, month, day) {
//     let date = new Date(year, month, day);
//     date.setDate(date.getDate() - 1);
//     console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`);
// }

function nextDay(year, month, day) {
    let nextDay = new Date(year, month - 1, day - 1);
    let newYear = nextDay.getFullYear();
    let newMonth = nextDay.getMonth() + 1;
    let newDate = nextDay.getDate();
    console.log(`${newYear}-${newMonth}-${newDate}`);
}

nextDay(2016, 9, 30);
nextDay(2015, 01, 1);