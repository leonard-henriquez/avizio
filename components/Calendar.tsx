import React, { useEffect, useState } from "react";
import FullCalendar, { DateSelectArg } from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";

type Props = {
  setStartDate: (date: Date) => void;
  setEndDate: (date: Date) => void;
  setShow: (bool: boolean) => void;
};

const Calendar: React.FC<Props> = ({ setEndDate, setStartDate, setShow }) => {
  const [initialView, setInitialView] = useState<string>();
  const handleShow = () => setShow(true);
  const [toolbar, setToolbar] = useState<any>();
  useEffect(() => {
    setInitialView("dayGridWeek");
    setToolbar({
      start: '',
      center: "title",
      end: "today prev,next",
    });
  }, []);

  const select = ({ start, end }: DateSelectArg) => {
    setStartDate(start);
    setEndDate(end);
    handleShow();
  };

  return (
    <FullCalendar
      plugins={[interactionPlugin, timeGridPlugin, dayGridPlugin]}
      headerToolbar={toolbar}
      initialView={initialView}
      selectable
      select={(info) => select(info)}
    />
  );
};
export default Calendar;
