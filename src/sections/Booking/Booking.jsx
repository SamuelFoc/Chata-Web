import React, { useState } from "react";
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

  return (
    <div className="mainBookingContainer">
      <div className="bookingTitle">
        <h3>Look for availability</h3>
      </div>
      <div className="bookingDateBox">
        <div className="bookingDatepickers">
          <div className="finalDatepicker">
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
            />
          </div>
        </div>
        <button className="btn btnCustom">Book a date</button>
      </div>
      <img src="/wood.png" alt="wood" className="bookingWoodLeft" />
      <img src="/wood.png" alt="wood" className="bookingWoodRight" />
    </div>
  );
};

export default Booking;
