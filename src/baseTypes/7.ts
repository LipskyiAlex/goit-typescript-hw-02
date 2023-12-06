/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {

  MONDAY = 'Monday',
  TUESDAY = 'Tuesday',
  WEDNESDAY = 'Wednesday',
  THURSDAY = 'Thursday',
  FRIDAY = 'Friday',
  SATURDAY = 'Saturday',
  SUNDAY = 'Sunday',
}

function isWeekend(day: DayOfWeek): boolean {
  
    return day === DayOfWeek.SATURDAY || day === DayOfWeek.SUNDAY;

}

 const result = isWeekend(DayOfWeek.MONDAY);


