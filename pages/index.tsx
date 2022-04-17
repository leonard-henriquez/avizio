import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";
import DateModal from "../components/DateModal";
const Calendar = dynamic(() => import("../components/Calendar"), {
  ssr: false,
});

const Home: NextPage = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [show, setShow] = useState(false);
  return (
    <div className={styles.container}>
      <Calendar
        setEndDate={setEndDate}
        setStartDate={setStartDate}
        setShow={setShow}
      />
      {startDate && endDate && (
        <DateModal
          show={show}
          setShow={setShow}
          startDate={startDate}
          endDate={endDate}
        />
      )}
    </div>
  );
};
export default Home;
