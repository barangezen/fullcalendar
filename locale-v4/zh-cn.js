import * as FullCalendar from 'fullcalendar';

FullCalendar.locale("zh-cn", {
  week: {
    // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
    dow: 1, // Monday is the first day of the week.
    doy: 4  // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: "上月",
    next: "下月",
    today: "今天",
    month: "月",
    week: "周",
    day: "日",
    list: "日程"
  },
  allDayText: "全天",
  eventLimitText: function(n) {
    return "另外 " + n + " 个";
  },
  noEventsMessage: "没有事件显示"
});