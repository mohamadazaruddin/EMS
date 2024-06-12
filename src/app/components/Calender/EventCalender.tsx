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

const events = [
  {
    start: moment("2024-06-06").toDate(),
    end: moment("2024-06-06").toDate(),
    title: "WeekOff",
  },
  {
    start: moment("2023-01-10T10:00:00").toDate(),
    end: moment("2023-01-10T11:00:00").toDate(),
    title: "WeekOff",
  },
  {
    start: moment("2023-06-10T10:00:00").toDate(),
    end: moment("2023-06-10T11:00:00").toDate(),
    title: "WeekOff",
  },
];

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
      events={events}
      titleAccessor="title" // Ensure the title is accessed correctly
      views={{
        month: true,
        day: false,
      }}
      messages={{ year: "Year" } as any}
    />
  );
}
