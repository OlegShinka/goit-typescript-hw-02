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
  if (day === Week.SUNDAY || day === Week.SATURDAY) {
    return true;
  } else return false;
}
let day = isWeekend(Week.SATURDAY);
