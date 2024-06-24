"use client";
import {
  Calendar as BigCalendar,
  momentLocalizer,
  Views,
  View,
} from "react-big-calendar";
import moment from "moment";
import { useState } from "react";

const localizer = momentLocalizer(moment);

function getFiveMonthsWeekendEvents() {
  const events = [];
  const currentDate = moment();
  const currentMonth = currentDate.month();
  const currentYear = currentDate.year();

  for (let i = -1; i < 4; i++) {
    const month = currentMonth + i;
    const year = currentYear + Math.floor((month + 1) / 12);
    const monthInYear = (month + 12) % 12;
    const daysInMonth = moment(
      `${year}-${monthInYear + 1}`,
      "YYYY-MM"
    ).daysInMonth();

    for (let day = 1; day <= daysInMonth; day++) {
      const date = moment(`${year}-${monthInYear + 1}-${day}`, "YYYY-MM-DD");

      if (date.isoWeekday() === 6 || date.isoWeekday() === 7) {
        events.push({
          start: date.toDate(),
          end: date.toDate(),
          title: "WeekOff",
        });
      }
    }
  }

  return events;
}

// const events = [
//   {
//     start: moment("2024-06-06").toDate(),
//     end: moment("2024-06-06").toDate(),
//     title: "WeekOff",
//   },
//   {
//     start: moment("2023-01-10T10:00:00").toDate(),
//     end: moment("2023-01-10T11:00:00").toDate(),
//     title: "WeekOff",
//   },
//   {
//     start: moment("2023-06-10T10:00:00").toDate(),
//     end: moment("2023-06-10T11:00:00").toDate(),
//     title: "WeekOff",
//   },
// ];

export default function Calendar() {
  // const [view, setView] = useState(Views.MONTH);
  const [date, setDate] = useState(new Date());

  return (
    <BigCalendar
      localizer={localizer}
      defaultView={Views.MONTH}
      defaultDate={moment().toDate()}
      style={{ height: 100, width: "100%" }} // Adjusted height to 500 for better visibility
      view={Views.MONTH}
      date={date}
      // onView={(view) => setView(view)}
      onNavigate={(date) => setDate(date)}
      events={getFiveMonthsWeekendEvents()}
      titleAccessor="title" // Ensure the title is accessed correctly
      views={{
        month: true,
        day: false,
      }}
      messages={{ year: "Year" } as any}
    />
  );
}
