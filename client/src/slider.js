import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const data = require("../../data/tracking.json");
const maxDataDate = new Date(data[0].time);
const minDataDate = new Date(data[data.length - 1].time);
const Slider = (props) => {
  const [startDate, setStartDate] = useState("");
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => {
        setStartDate(date);
        props.newDate(date.toISOString());
      }}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={5}
      timeCaption="time"
      dateFormat="yyyy-MM-dd h:mm aa"
      minDate={minDataDate}
      maxDate={maxDataDate}
    />
  );
};
export default Slider;
