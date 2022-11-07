import React, { useEffect, useState } from "react";
import { addDays, format, isWeekend } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";

import "./Datepicker.css";
import "./Phone.css";
import "./XSmall.css";
import "./Small.css";
import "./Medium.css";
import "./Booking.css";

const Booking = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const [takenDays, setTakenDays] = useState([
    { startDate: "2/11/2022", endDate: "5/11/2022" },
    { startDate: "10/11/2022", endDate: "12/11/2022" },
    { startDate: "14/11/2022", endDate: "16/11/2022" },
    { startDate: "23/11/2022", endDate: "26/11/2022" },
    { startDate: "22/12/2022", endDate: "27/12/2022" },
  ]);
  const [nonDays, setNonDays] = useState();

  const extractTakenDates = (takenDays) => {
    if (takenDays?.length < 1 || !Array.isArray(takenDays)) return [];
    let fullTakenDays = [];
    takenDays.forEach((item) => {
      let start = item.startDate.split("/")[0];
      let end = item.endDate.split("/")[0];
      for (let i = start; i <= end; i++) {
        fullTakenDays.push(
          new Date(
            `${item.startDate.split("/")[1]}/${i}/${
              item.startDate.split("/")[2]
            }`
          ).toDateString()
        );
      }
    });
    return fullTakenDays;
  };

  const customDayContent = (day) => {
    let extraDot = null;

    if (nonDays?.includes(day.toDateString())) {
      extraDot = (
        <div
          style={{
            height: "2px",
            width: "100%",
            borderRadius: "0px",
            background: "rgb(102,102,102,40%)",
            position: "absolute",
            bottom: "12px",
            left: 0,
          }}
        />
      );
    }
    return (
      <div>
        {extraDot}
        <span>{format(day, "d")}</span>
      </div>
    );
  };

  useEffect(() => {
    setNonDays(extractTakenDates(takenDays));
  }, [takenDays]);

  return (
    <div className="mainBookingContainer">
      <div className="bookingTitle">
        <h3>Look for availability</h3>
      </div>
      <div className="bookingDateBox">
        <div className="bookingDatepickers">
          <div className="finalDatepicker">
            <DateRange
              dayContentRenderer={customDayContent}
              editableDateInputs={true}
              onChange={(item) => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
            />
          </div>
        </div>
        <button className="btn btnCustom">Book selected date</button>
      </div>
      <img src="/wood.png" alt="wood" className="bookingWoodLeft" />
      <img src="/wood.png" alt="wood" className="bookingWoodRight" />
    </div>
  );
};

export default Booking;
