import React from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import FullCalendar, { DateSelectArg } from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';

const Home: NextPage = () => {
  const toolbar = {
    start: 'title', // will normally be on the left. if RTL, will be on the right
    center: '',
    end: 'dayGridMonth,timeGridWeek,timeGridDay' // will normally be on the right. if RTL, will be on the left
  };

  const select = (info: DateSelectArg) => {
    alert('selected ' + info.startStr + ' to ' + info.endStr);
  }

  return (
    <div className={styles.container}>
      <FullCalendar
        plugins={[interactionPlugin, timeGridPlugin, dayGridPlugin]}
        headerToolbar={toolbar}
        initialView="dayGridMonth"
        slotDuration={'00:30:00'}
        selectable
        select={(info) => select(info)}
      />
    </div>
  )
}

export default Home
