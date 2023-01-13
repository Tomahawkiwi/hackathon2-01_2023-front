import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

function CalendarV2() {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  return (
    <Datepicker
      value={value}
      primaryColor={"lime"}
      onChange={handleValueChange}
    />
  );
}

export default CalendarV2;
