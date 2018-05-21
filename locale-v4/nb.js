import * as FullCalendar from 'fullcalendar';

FullCalendar.locale("nb", {
  week: {
    dow: 1, // Monday is the first day of the week.
    doy: 4  // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: "Forrige",
    next: "Neste",
    today: "I dag",
    month: "Måned",
    week: "Uke",
    day: "Dag",
    list: "Agenda"
  },
  allDayText: "Hele dagen",
  eventLimitText: "til",
  noEventsMessage: "Ingen hendelser å vise"
});