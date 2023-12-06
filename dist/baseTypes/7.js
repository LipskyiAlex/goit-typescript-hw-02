/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek["MONDAY"] = "Monday";
    DayOfWeek["TUESDAY"] = "Tuesday";
    DayOfWeek["WEDNESDAY"] = "Wednesday";
    DayOfWeek["THURSDAY"] = "Thursday";
    DayOfWeek["FRIDAY"] = "Friday";
    DayOfWeek["SATURDAY"] = "Saturday";
    DayOfWeek["SUNDAY"] = "Sunday";
})(DayOfWeek || (DayOfWeek = {}));
function isWeekend(day) {
    return day === DayOfWeek.SATURDAY || day === DayOfWeek.SUNDAY;
}
const result = isWeekend(DayOfWeek.MONDAY);
//# sourceMappingURL=7.js.map