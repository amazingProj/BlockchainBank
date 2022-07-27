import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const BirthdayPicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <DatePicker
        className="mt-2 mb-2"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};

export default BirthdayPicker;
