/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Week {
  SUNDAY = "sun",
  MONDAY = "mon",
  TUESDAY = "tue",
  WEDNESDAY = "wed",
  THURSDAY = "thu",
  FRIDAY = "fri",
  SATURDAY = "sat",
}

function isWeekend(day: Week): boolean {
  return day === Week.SUNDAY || day === Week.SATURDAY;
}
let day = isWeekend(Week.SATURDAY);
